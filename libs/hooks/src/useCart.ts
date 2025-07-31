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
}; export const useAddToCart = (onSuccess?: (message: string, description: string) => void, onError?: (title: string, message: string) => void) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (item: CartItem) => ApiManager.getInstance().cart.addToCart(item),
        onSuccess: (data, variables) => {
            queryClient.invalidateQueries({ queryKey: ['cart'] });
            onSuccess?.(
                'Added to Cart',
                `Successfully added ${variables.quantity} ${variables.productName} to your cart`
            );
        },
        onError: (error, variables) => {
            console.error('Failed to add item to cart:', error);
            onError?.(
                'Failed to Add Item',
                `Could not add ${variables.productName} to cart. Please try again.`
            );
        },
    });
};

export const useRemoveFromCart = (onSuccess?: (message: string, description: string) => void, onError?: (title: string, message: string) => void) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ productId, quantity }: { productId: string; quantity: number }) =>
            ApiManager.getInstance().cart.removeFromCart(productId, quantity),
        onSuccess: (data, variables) => {
            queryClient.invalidateQueries({ queryKey: ['cart'] });
            onSuccess?.(
                'Removed from Cart',
                `Successfully removed ${variables.quantity} item${variables.quantity > 1 ? 's' : ''} from cart`
            );
        },
        onError: (error, variables) => {
            console.error('Failed to remove item from cart:', error);
            onError?.(
                'Failed to Remove Item',
                'Could not remove items from cart. Please try again.'
            );
        },
    });
};
