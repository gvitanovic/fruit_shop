import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { CartItem } from '@fruit-shop/domain';
import ApiManager from '@fruit-shop/infrastructure';

export const useCart = () => {
    return useQuery({
        queryKey: ['cart'],
        queryFn: () => ApiManager.getInstance().cart.getCart(),
        retry: 1,
        staleTime: 30 * 1000, // 30 seconds
        placeholderData: {
            items: [],
            totalPrice: 0,
            totalItems: 0
        }
    });
}; export const useAddToCart = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (item: CartItem) => ApiManager.getInstance().cart.addToCart(item),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] });
        },
    });
};

export const useRemoveFromCart = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ productId, quantity }: { productId: string; quantity: number }) =>
            ApiManager.getInstance().cart.removeFromCart(productId, quantity),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] });
        },
    });
};
