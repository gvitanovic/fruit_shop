import { CartContainer, CartErrorBoundary } from '@fruit-shop/ui-components';

export default function CartPage() {
    return (
        <CartErrorBoundary>
            <CartContainer />
        </CartErrorBoundary>
    );
}
