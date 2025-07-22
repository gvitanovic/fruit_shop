import { NextRequest, NextResponse } from 'next/server';
import { config } from '../../../../config';
import { CartItem } from '../../../../domain/entities/Cart';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { productId, quantity: quantityToRemove } = body;

        // First, get current cart items to find which ones to delete
        const cartResponse = await fetch(`${config.backendServer.url}/cart`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!cartResponse.ok) {
            throw new Error(`HTTP error! status: ${cartResponse.status}`);
        }

        const cartData = await cartResponse.json();
        const cartItems = Array.isArray(cartData) ? cartData.filter(item =>
            item.productId && item.id !== undefined
        ) : [];

        // Find items matching the productId and collect their IDs
        const matchingItems = cartItems.filter(item => item.productId === productId);

        if (matchingItems.length === 0) {
            throw new Error('Product not found in cart');
        }

        // Remove items one by one until we've removed the requested quantity
        let remainingToRemove = quantityToRemove;
        const idsToDelete = [];
        let totalQuantityToRemove = 0;

        // Calculate total available quantity for this product
        const totalAvailable = matchingItems.reduce((sum, item) => sum + item.quantity, 0);
        const actualToRemove = Math.min(quantityToRemove, totalAvailable);

        for (const item of matchingItems) {
            if (remainingToRemove <= 0) break;

            if (item.quantity <= remainingToRemove) {
                // Remove entire item
                idsToDelete.push(item.id);
                totalQuantityToRemove += item.quantity;
                remainingToRemove -= item.quantity;
            } else {
                // Partial removal needed - remove this item but we'll add back the difference
                idsToDelete.push(item.id);
                totalQuantityToRemove += item.quantity;
                remainingToRemove = 0; // We've covered the remaining amount
            }
        }

        // Delete the selected items
        for (const id of idsToDelete) {
            const deleteResponse = await fetch(`${config.backendServer.url}/cart/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!deleteResponse.ok) {
                console.error(`Failed to delete item ${id}`);
            }
        }

        // If we removed more than requested, add back the difference
        const overRemoved = totalQuantityToRemove - actualToRemove;
        if (overRemoved > 0) {
            // Get the last removed item details to add back the excess
            const lastRemovedItem = matchingItems[matchingItems.length - 1];

            // Add back the excess quantity
            const addBackResponse = await fetch(`${config.backendServer.url}/cart`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId: lastRemovedItem.productId,
                    productName: lastRemovedItem.productName,
                    price: lastRemovedItem.price,
                    quantity: overRemoved,
                    image: lastRemovedItem.image,
                    packageSize: lastRemovedItem.packageSize
                }),
            });

            if (!addBackResponse.ok) {
                console.error('Failed to add back excess quantity');
            }
        }

        // After deletion, fetch the updated cart
        const updatedCartResponse = await fetch(`${config.backendServer.url}/cart`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!updatedCartResponse.ok) {
            throw new Error(`HTTP error! status: ${updatedCartResponse.status}`);
        }

        const updatedCartData = await updatedCartResponse.json();

        // Apply the same grouping logic as in GET /api/cart
        const validItems = Array.isArray(updatedCartData) ? updatedCartData.filter((item: CartItem) =>
            item.productId && item.productName && item.price !== undefined && item.quantity !== undefined
        ) : [];

        // Group items by productId and sum quantities
        const groupedItems = validItems.reduce((acc: CartItem[], item: CartItem) => {
            const existing = acc.find((existingItem: CartItem) => existingItem.productId === item.productId);

            if (existing) {
                // Add quantity to existing item
                existing.quantity += item.quantity;
            } else {
                // Add new item
                acc.push({
                    productId: item.productId,
                    productName: item.productName,
                    price: item.price,
                    quantity: item.quantity,
                    image: item.image,
                    packageSize: item.packageSize
                });
            }

            return acc;
        }, []);

        const totalPrice = groupedItems.reduce((sum: number, item: CartItem) => sum + (item.price * item.quantity), 0);
        const totalItems = groupedItems.reduce((sum: number, item: CartItem) => sum + item.quantity, 0); const transformedCart = {
            success: true,
            data: {
                items: groupedItems,
                totalPrice,
                totalItems
            }
        };

        return NextResponse.json(transformedCart);
    } catch (error) {
        console.error('Error removing from cart:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to remove from cart' },
            { status: 500 }
        );
    }
}
