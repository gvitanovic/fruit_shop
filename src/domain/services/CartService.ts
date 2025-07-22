import { Cart, CartItem } from '../entities/Cart';
import { Product } from '../entities/Product';

export class CartService {
    static addToCart(cart: Cart, product: Product, quantity: number): Cart {
        const existingItemIndex = cart.items.findIndex(item => item.productId === product.id);

        let newItems: CartItem[];

        if (existingItemIndex >= 0) {
            newItems = cart.items.map((item, index) =>
                index === existingItemIndex
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            );
        } else {
            const newItem: CartItem = {
                productId: product.id,
                productName: product.name,
                price: product.price,
                quantity,
                image: product.image,
                packageSize: product.packageSize
            };
            newItems = [...cart.items, newItem];
        }

        return this.calculateTotals({ ...cart, items: newItems });
    }

    static removeFromCart(cart: Cart, productId: string, quantity: number): Cart {
        const newItems = cart.items
            .map(item =>
                item.productId === productId
                    ? { ...item, quantity: Math.max(0, item.quantity - quantity) }
                    : item
            )
            .filter(item => item.quantity > 0);

        return this.calculateTotals({ ...cart, items: newItems });
    }

    static calculateTotals(cart: Cart): Cart {
        const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        return {
            ...cart,
            totalItems,
            totalPrice
        };
    }

    static getItemQuantityInCart(cart: Cart, productId: string): number {
        return cart.items
            .filter(item => item.productId === productId)
            .reduce((sum, item) => sum + item.quantity, 0);
    }

    static groupItemsByProductId(items: CartItem[]): CartItem[] {
        const grouped = items.reduce((acc: { [key: string]: CartItem }, item) => {
            if (acc[item.productId]) {
                acc[item.productId] = {
                    ...acc[item.productId],
                    quantity: acc[item.productId].quantity + item.quantity
                };
            } else {
                acc[item.productId] = { ...item };
            }
            return acc;
        }, {});

        return Object.values(grouped);
    }

    static removeItemsPartially(cart: Cart, productId: string, quantityToRemove: number): Cart {
        let remainingToRemove = quantityToRemove;
        const newItems: CartItem[] = [];

        for (const item of cart.items) {
            if (item.productId === productId && remainingToRemove > 0) {
                const itemQuantity = item.quantity;
                if (itemQuantity <= remainingToRemove) {
                    // Remove entire item
                    remainingToRemove -= itemQuantity;
                } else {
                    // Partially remove from item
                    newItems.push({
                        ...item,
                        quantity: itemQuantity - remainingToRemove
                    });
                    remainingToRemove = 0;
                }
            } else {
                // Keep item as is
                newItems.push(item);
            }
        }

        return this.calculateTotals({ ...cart, items: newItems });
    }
}
