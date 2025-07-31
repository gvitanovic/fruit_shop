import { useQuery } from '@tanstack/react-query';
import { ProductFilters } from '@fruit-shop/domain';
import ApiManager from '@fruit-shop/infrastructure';

export const useProducts = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: () => ApiManager.getInstance().products.getAllProducts(),
        staleTime: 30 * 60 * 1000, // 30 minutes cache
        gcTime: 30 * 60 * 1000, // Keep in cache for 30 minutes after component unmount
        retry: 1,
        placeholderData: []
    });
};

export const useFilteredProducts = (filters: ProductFilters) => {
    // Create a stable query key that properly tracks filter changes
    const queryKey = [
        'products',
        'filtered',
        filters.searchQuery || '',
        filters.colors?.join(',') || '',
        filters.sortOrder || 'name-asc'
    ];

    return useQuery({
        queryKey,
        queryFn: () => ApiManager.getInstance().products.getFilteredProducts(filters),
        staleTime: 30 * 60 * 1000, // 30 minutes cache
        gcTime: 30 * 60 * 1000, // Keep in cache for 30 minutes after component unmount
        retry: 1,
    });
};

export const useProduct = (id: string) => {
    return useQuery({
        queryKey: ['product', id],
        queryFn: () => ApiManager.getInstance().products.getProductById(id),
        enabled: !!id,
        staleTime: 30 * 60 * 1000, // 30 minutes cache
        gcTime: 30 * 60 * 1000, // Keep in cache for 30 minutes after component unmount
    });
};

export const useProductSuggestions = (query: string, enabled = true) => {
    return useQuery({
        queryKey: ['suggestions', query],
        queryFn: () => ApiManager.getInstance().products.searchProducts(query),
        enabled: enabled && query.length > 2,
        staleTime: 30 * 60 * 1000, // 30 minutes cache
        gcTime: 30 * 60 * 1000, // Keep in cache for 30 minutes after component unmount
        retry: 1,
        placeholderData: []
    });
};