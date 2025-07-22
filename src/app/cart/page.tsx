import { CartContainer } from '../../components/containers/CartContainer/CartContainer';
import { CartErrorBoundary } from '../../components/molecules/CartErrorBoundary/CartErrorBoundary';

export default function CartPage() {
    return (
        <CartErrorBoundary>
            <CartContainer />
        </CartErrorBoundary>
    );
}
