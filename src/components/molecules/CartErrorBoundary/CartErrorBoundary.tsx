'use client';

import { ErrorBoundary } from '../../atoms/ErrorBoundary/ErrorBoundary';
import { ShoppingCart, RefreshCw } from 'lucide-react';
import { Button } from '../../atoms/Button/Button';
import { ReactNode } from 'react';

interface CartErrorBoundaryProps {
    children: ReactNode;
}

const CartErrorFallback = () => (
    <div className="bg-white rounded-lg shadow-md p-8 text-center space-y-4">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
            <ShoppingCart className="w-8 h-8 text-red-600" />
        </div>
        <div className="space-y-2">
            <h2 className="text-xl font-bold text-gray-900">
                Cart Error
            </h2>
            <p className="text-gray-600">
                We&apos;re having trouble loading your cart. Please try again.
            </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
                variant="outline"
                onClick={() => window.location.reload()}
            >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh Cart
            </Button>
            <Button onClick={() => window.location.href = '/products'}>
                Continue Shopping
            </Button>
        </div>
    </div>
);

export const CartErrorBoundary = ({ children }: CartErrorBoundaryProps) => {
    return (
        <ErrorBoundary fallback={<CartErrorFallback />}>
            {children}
        </ErrorBoundary>
    );
};
