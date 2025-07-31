'use client';

import { useState } from 'react';
import { useCart, useRemoveFromCart } from '@fruit-shop/hooks';
import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';
import { Spinner } from '../../atoms/Spinner/Spinner';
import { useToast } from '../../hooks/useToast';
import { Trash2, Minus, Plus } from 'lucide-react';
import Image from 'next/image';

export const CartContainer = () => {
    const { data: cart, isLoading, error } = useCart();
    const { showSuccess, showError } = useToast();
    
    const { mutate: removeFromCart, isPending } = useRemoveFromCart(
        (title, message) => showSuccess(title, message, 2500),
        (title, message) => showError(title, message)
    );

    // Track quantities to remove for each product
    const [removeQuantities, setRemoveQuantities] = useState<Record<string, number>>({});
    // Track which item is currently being removed
    const [removingItemId, setRemovingItemId] = useState<string | null>(null);

    const handleQuantityChange = (productId: string, value: string) => {
        const num = Math.max(0, parseInt(value) || 0);
        setRemoveQuantities(prev => ({ ...prev, [productId]: num }));
    };

    const incrementRemoveQuantity = (productId: string, packageSize: number) => {
        const current = removeQuantities[productId] || 0;
        const cartItem = cart?.items.find(item => item.productId === productId);
        const maxRemove = cartItem ? cartItem.quantity : 0;

        const newQuantity = current + packageSize;
        if (newQuantity <= maxRemove) {
            setRemoveQuantities(prev => ({ ...prev, [productId]: newQuantity }));
        }
    };

    const decrementRemoveQuantity = (productId: string, packageSize: number) => {
        const current = removeQuantities[productId] || 0;
        const newQuantity = Math.max(0, current - packageSize);
        setRemoveQuantities(prev => ({ ...prev, [productId]: newQuantity }));
    };

    const handleRemoveFromCart = (productId: string) => {
        const quantity = removeQuantities[productId] || 0;
        if (quantity > 0) {
            setRemovingItemId(productId);
            removeFromCart(
                { productId, quantity },
                {
                    onSettled: () => {
                        setRemovingItemId(null);
                        setRemoveQuantities(prev => ({ ...prev, [productId]: 0 }));
                    }
                }
            );
        }
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center py-12">
                <Spinner size="lg" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-12">
                <p className="text-red-600">Error loading cart. Please try again.</p>
            </div>
        );
    }

    if (!cart || cart.items.length === 0) {
        return (
            <div className="text-center py-12">
                <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
                <p className="text-gray-600 mb-4">Your cart is empty</p>
                <Button onClick={() => window.location.href = '/products'}>
                    Browse Products
                </Button>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Your Cart</h1>
                <div className="text-right">
                    <p className="text-sm text-gray-600">{cart?.totalItems} items</p>
                    <p className="text-2xl font-bold">${cart?.totalPrice?.toFixed(2) ?? '0.00'}</p>
                </div>
            </div>

            <div className="space-y-4">
                {cart?.items.map((item) => {
                    const removeQuantity = removeQuantities[item.productId] || 0;
                    const canRemove = removeQuantity > 0 && removeQuantity <= item.quantity;
                    const isValidRemoveQuantity = removeQuantity % item.packageSize === 0;
                    const isRemoving = removingItemId === item.productId;

                    return (
                        <div key={item.productId} className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-start space-x-4">
                                <Image
                                    src={item.image}
                                    alt={item.productName}
                                    width={80}
                                    height={80}
                                    className="w-20 h-20 object-cover rounded-md"
                                />

                                <div className="flex-1 space-y-2">
                                    <h3 className="font-semibold text-lg">{item.productName}</h3>
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-1">
                                            <p className="text-sm text-gray-600">
                                                Price: ${item.price.toFixed(2)} each
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                Quantity: {item.quantity} units
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                Package: {item.packageSize} units
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-lg">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Remove Controls */}
                                    <div className="flex items-center space-x-4 pt-4 border-t">
                                        <div className="flex items-center space-x-2">
                                            <span className="text-sm font-medium">Remove:</span>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => decrementRemoveQuantity(item.productId, item.packageSize)}
                                                disabled={removeQuantity <= 0}
                                            >
                                                <Minus className="w-3 h-3" />
                                            </Button>
                                            <Input
                                                type="number"
                                                value={removeQuantity}
                                                onChange={(e) => handleQuantityChange(item.productId, e.target.value)}
                                                className="w-20 text-center"
                                                min="0"
                                                max={item.quantity}
                                                step={item.packageSize}
                                            />
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => incrementRemoveQuantity(item.productId, item.packageSize)}
                                                disabled={removeQuantity + item.packageSize > item.quantity}
                                            >
                                                <Plus className="w-3 h-3" />
                                            </Button>
                                        </div>

                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            onClick={() => handleRemoveFromCart(item.productId)}
                                            disabled={!canRemove || !isValidRemoveQuantity || isRemoving}
                                        >
                                            <Trash2 className="w-4 h-4 mr-1" />
                                            {isRemoving ? 'Removing...' : 'Remove'}
                                        </Button>
                                    </div>

                                    {!isValidRemoveQuantity && removeQuantity > 0 && (
                                        <p className="text-sm text-red-600">
                                            Remove quantity must be a multiple of {item.packageSize}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Cart Summary */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center text-xl font-bold">
                    <span>Total: ${cart?.totalPrice.toFixed(2)}</span>
                    <Button size="lg">
                        Proceed to Checkout
                    </Button>
                </div>
            </div>
        </div>
    );
};
