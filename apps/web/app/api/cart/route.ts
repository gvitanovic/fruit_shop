import { NextRequest, NextResponse } from 'next/server';
import { config } from '../../../config';
import { CartItem } from '@fruit-shop/domain';

export async function GET() {
    try {
        const response = await fetch(`${config.backendServer.url}/cart`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Transform backend array response to expected Cart format
        const validItems = Array.isArray(data) ? data.filter((item: CartItem) =>
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
        }; return NextResponse.json(transformedCart);
    } catch (error) {
        console.error('Error fetching cart:', error);

        // Return default empty cart when backend is not available
        const defaultCart = {
            success: true,
            data: {
                items: [],
                totalPrice: 0,
                totalItems: 0
            }
        };

        return NextResponse.json(defaultCart);
    }
} export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const response = await fetch(`${config.backendServer.url}/cart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error adding to cart:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to add to cart' },
            { status: 500 }
        );
    }
}
