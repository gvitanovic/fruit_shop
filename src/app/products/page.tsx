'use client';

import { Suspense } from 'react';
import { ProductsContainer } from '../../components/containers/ProductsContainer/ProductsContainer';
import { ErrorBoundary } from '../../components/atoms/ErrorBoundary/ErrorBoundary';
import { Spinner } from '../../components/atoms/Spinner/Spinner';

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
