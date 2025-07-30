'use client';

import { Suspense } from 'react';
import { ProductsContainer, ErrorBoundary, Spinner } from '@fruit-shop/ui-components';

export default function ProductsPage() {
    return (
        <ErrorBoundary>
            <Suspense fallback={
                <div className="flex items-center justify-center py-12">
                    <Spinner size="lg" />
                </div>
            }>
                <ProductsContainer />
            </Suspense>
        </ErrorBoundary>
    );
}
