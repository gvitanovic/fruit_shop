'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { ProductFilters } from '../../../domain/entities/Product';
import { useFilteredProducts } from '../../../hooks/useProducts';
import { ProductCard } from '../../organisms/ProductCard/ProductCard';
import { ProductFiltersComponent } from '../../organisms/ProductFilters/ProductFilters';
import { SearchBar } from '../../molecules/SearchBar/SearchBar';
import { ProductErrorBoundary } from '../../molecules/ProductErrorBoundary/ProductErrorBoundary';
import { Spinner } from '../../atoms/Spinner/Spinner';

export const ProductsContainer = () => {
    const searchParams = useSearchParams();
    const [filters, setFilters] = useState<ProductFilters>({
        colors: [], // Start with no color filters to show all products
        sortOrder: 'name-asc',
        searchQuery: '',
    });

    // Update filters when URL search params change
    useEffect(() => {
        const searchQuery = searchParams.get('search') || '';
        setFilters(prev => ({ ...prev, searchQuery }));
    }, [searchParams]);

    const { data: products = [], isLoading, error } = useFilteredProducts(filters);

    const handleSearch = (query: string) => {
        setFilters(prev => ({ ...prev, searchQuery: query }));
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
                <p className="text-red-600">Error loading products. Please try again.</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Products</h1>
                <p className="text-gray-600">{products.length} products found</p>
            </div>

            {/* Search Bar */}
            <div className="max-w-md">
                <SearchBar
                    onSearch={handleSearch}
                    placeholder="Search products..."
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Filters Sidebar */}
                <div className="lg:col-span-1">
                    <ProductFiltersComponent
                        filters={filters}
                        onFiltersChange={setFilters}
                    />
                </div>

                {/* Products Grid */}
                <div className="lg:col-span-3">
                    {products.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-600">No products found matching your criteria.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((product) => (
                                <ProductErrorBoundary key={product.id}>
                                    <ProductCard product={product} />
                                </ProductErrorBoundary>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
