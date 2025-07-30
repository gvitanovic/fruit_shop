'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from '@fruit-shop/ui-components';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Route error:', error);
    }, [error]);

    return (
        <div className="min-h-[600px] flex items-center justify-center p-6">
            <div className="text-center space-y-6 max-w-lg">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <AlertTriangle className="w-10 h-10 text-red-600" />
                </div>

                <div className="space-y-4">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Page Error
                    </h1>
                    <p className="text-lg text-gray-600">
                        We encountered an error while loading this page.
                        This might be a temporary issue.
                    </p>
                </div>

                {/* Show error details in development */}
                {process.env.NODE_ENV === 'development' && (
                    <details className="text-left bg-gray-100 p-4 rounded-lg max-w-full overflow-auto">
                        <summary className="cursor-pointer text-sm font-medium text-gray-700 mb-2">
                            Error Details (Development)
                        </summary>
                        <pre className="text-xs text-red-600 whitespace-pre-wrap">
                            {error.message}
                            {error.stack}
                        </pre>
                    </details>
                )}

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={reset} variant="outline">
                        <RefreshCw className="w-5 h-5 mr-2" />
                        Try Again
                    </Button>
                    <Button onClick={() => window.location.href = '/'}>
                        <Home className="w-5 h-5 mr-2" />
                        Go Home
                    </Button>
                </div>
            </div>
        </div>
    );
}
