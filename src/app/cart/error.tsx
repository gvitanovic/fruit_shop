'use client';

import { useEffect } from 'react';
import { ShoppingCart, RefreshCw, Package } from 'lucide-react';
import { Button } from '../../components/atoms/Button/Button';

export default function CartError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('Cart page error:', error);
    }, [error]);

    return (
        <div className="min-h-[500px] flex items-center justify-center p-6">
            <div className="text-center space-y-6 max-w-md">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <ShoppingCart className="w-8 h-8 text-red-600" />
                </div>

                <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Cart Unavailable
                    </h2>
                    <p className="text-gray-600">
                        We&apos;re having trouble loading your shopping cart.
                        Please try again or continue shopping.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button onClick={reset} variant="outline">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Retry
                    </Button>
                    <Button onClick={() => window.location.href = '/products'}>
                        <Package className="w-4 h-4 mr-2" />
                        Browse Products
                    </Button>
                </div>
            </div>
        </div>
    );
}
