'use client';

import { useEffect } from 'react';
import { Package, RefreshCw, Home } from 'lucide-react';
import { Button } from '../../components/atoms/Button/Button';

export default function ProductsError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('Products page error:', error);
    }, [error]);

    return (
        <div className="min-h-[500px] flex items-center justify-center p-6">
            <div className="text-center space-y-6 max-w-md">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <Package className="w-8 h-8 text-red-600" />
                </div>

                <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Products Unavailable
                    </h2>
                    <p className="text-gray-600">
                        We&apos;re having trouble loading our products.
                        This might be a temporary issue with our servers.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button onClick={reset} variant="outline">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Try Again
                    </Button>
                    <Button onClick={() => window.location.href = '/'}>
                        <Home className="w-4 h-4 mr-2" />
                        Go Home
                    </Button>
                </div>
            </div>
        </div>
    );
}
