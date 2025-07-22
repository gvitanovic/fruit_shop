'use client';

import { ErrorBoundary } from '../../atoms/ErrorBoundary/ErrorBoundary';
import { Package, RefreshCw } from 'lucide-react';
import { Button } from '../../atoms/Button/Button';
import { ReactNode } from 'react';

interface ProductErrorBoundaryProps {
    children: ReactNode;
}

const ProductErrorFallback = () => (
    <div className="bg-white rounded-lg shadow-md p-6 text-center space-y-4">
        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto">
            <Package className="w-6 h-6 text-red-600" />
        </div>
        <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">
                Product Loading Error
            </h3>
            <p className="text-sm text-gray-600">
                Unable to load product information. Please try refreshing the page.
            </p>
        </div>
        <Button
            size="sm"
            variant="outline"
            onClick={() => window.location.reload()}
        >
            <RefreshCw className="w-4 h-4 mr-2" />
            Retry
        </Button>
    </div>
);

export const ProductErrorBoundary = ({ children }: ProductErrorBoundaryProps) => {
    return (
        <ErrorBoundary fallback={<ProductErrorFallback />}>
            {children}
        </ErrorBoundary>
    );
};
