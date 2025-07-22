'use client';

import { useState } from 'react';
import { Product } from '../../../domain/entities/Product';
import { ProductService } from '../../../domain/services/ProductService';
import { CartService } from '../../../domain/services/CartService';
import { useCart, useAddToCart } from '../../../hooks/useCart';
import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';
import { Badge } from '../../atoms/Badge/Badge';
import { Modal } from '../../molecules/Modal/Modal';
import { ShoppingCart, Eye } from 'lucide-react';
import Image from 'next/image';

interface ProductCardProps {
    product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
    const [quantity, setQuantity] = useState(product.packageSize);
    const [showDetails, setShowDetails] = useState(false);

    const { data: cart } = useCart();
    const { mutate: addToCart, isPending } = useAddToCart();

    const discountedPrice = ProductService.calculateDiscountedPrice(product.price, product.discount);
    const currentCartQuantity = cart ? CartService.getItemQuantityInCart(cart, product.id) : 0;
    const availableStock = product.stock - currentCartQuantity;

    const isValidQuantity = ProductService.isValidQuantity(quantity, product.packageSize);
    const canAddToCart = isValidQuantity && quantity <= availableStock && availableStock > 0;

    const handleQuantityChange = (value: string) => {
        const num = parseInt(value) || 0;
        setQuantity(num);
    };

    const handleAddToCart = () => {
        if (!canAddToCart) return;

        addToCart({
            productId: product.id,
            productName: product.name,
            price: discountedPrice,
            quantity,
            image: product.image,
            packageSize: product.packageSize
        });
    };

    const incrementQuantity = () => {
        const newQuantity = quantity + product.packageSize;
        if (newQuantity <= availableStock) {
            setQuantity(newQuantity);
        }
    };

    const decrementQuantity = () => {
        const newQuantity = quantity - product.packageSize;
        if (newQuantity >= product.packageSize) {
            setQuantity(newQuantity);
        }
    };

    return (
        <>
            <article
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2"
                aria-labelledby={`product-title-${product.id}`}
            >
                <div className="relative">
                    <Image
                        src={product.image}
                        alt={`${product.name} - Fresh fruit available in ${product.colors.join(', ')} colors`}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover"
                        priority={false}
                    />
                    {product.discount > 0 && (
                        <Badge
                            variant="danger"
                            className="absolute top-2 right-2"
                            aria-label={`${product.discount}% discount`}
                        >
                            {product.discount}% OFF
                        </Badge>
                    )}
                </div>

                <div className="p-4 space-y-3">
                    <div>
                        <h3
                            id={`product-title-${product.id}`}
                            className="font-semibold text-lg"
                        >
                            {product.name}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1" aria-label="Available colors">
                            {product.colors.map((color) => (
                                <div
                                    key={color}
                                    className={`w-4 h-4 rounded-full ${color === 'green' ? 'bg-green-500' :
                                        color === 'orange' ? 'bg-orange-500' :
                                            'bg-yellow-500'
                                        }`}
                                    aria-label={`${color} color option`}
                                    role="img"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2" aria-label="Price information">
                            <span className="text-lg font-bold">${discountedPrice.toFixed(2)}</span>
                            {product.discount > 0 && (
                                <span className="text-sm text-gray-500 line-through">
                                    ${product.price.toFixed(2)}
                                </span>
                            )}
                        </div>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setShowDetails(true)}
                            aria-label={`View details for ${product.name}`}
                        >
                            <Eye className="w-4 h-4" aria-hidden="true" />
                        </Button>
                    </div>

                    <div className="text-sm text-gray-600" aria-label="Product information">
                        <p>Stock: <span aria-label={`${availableStock} units available`}>{availableStock}</span></p>
                        <p>Package: <span aria-label={`Sold in packages of ${product.packageSize} units`}>{product.packageSize} units</span></p>
                    </div>

                    <fieldset className="flex items-center space-x-2">
                        <legend className="sr-only">Select quantity</legend>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={decrementQuantity}
                            disabled={quantity <= product.packageSize}
                            aria-label={`Decrease quantity by ${product.packageSize}`}
                        >
                            -
                        </Button>
                        <Input
                            type="number"
                            value={quantity}
                            onChange={(e) => handleQuantityChange(e.target.value)}
                            className="w-20 text-center"
                            min={product.packageSize}
                            step={product.packageSize}
                            aria-label="Quantity"
                            aria-describedby={`quantity-help-${product.id}`}
                        />
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={incrementQuantity}
                            disabled={quantity + product.packageSize > availableStock}
                            aria-label={`Increase quantity by ${product.packageSize}`}
                        >
                            +
                        </Button>
                        <div
                            id={`quantity-help-${product.id}`}
                            className="sr-only"
                        >
                            Quantity must be in multiples of {product.packageSize}. Available stock: {availableStock}
                        </div>
                    </fieldset>

                    <Button
                        onClick={handleAddToCart}
                        disabled={!canAddToCart || isPending}
                        className="w-full"
                        aria-describedby={!isValidQuantity ? `quantity-error-${product.id}` : undefined}
                    >
                        <ShoppingCart className="w-4 h-4 mr-2" aria-hidden="true" />
                        {isPending ? 'Adding to cart...' : `Add ${quantity} ${quantity === 1 ? 'unit' : 'units'} to Cart`}
                    </Button>

                    {!isValidQuantity && (
                        <p
                            id={`quantity-error-${product.id}`}
                            role="alert"
                            className="text-sm text-red-600"
                        >
                            Quantity must be a multiple of {product.packageSize}
                        </p>
                    )}
                </div>
            </article>

            {/* Product Details Modal */}
            <Modal
                isOpen={showDetails}
                onClose={() => setShowDetails(false)}
                title={`${product.name} - Product Details`}
                size="lg"
            >
                <div className="p-6 space-y-4">
                    <Image
                        src={product.image}
                        alt={`Detailed view of ${product.name} - Fresh fruit`}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover rounded-lg"
                    />

                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-bold">{product.name}</h3>
                            <div className="flex items-center space-x-2" aria-label="Price information">
                                <span className="text-2xl font-bold">${discountedPrice.toFixed(2)}</span>
                                {product.discount > 0 && (
                                    <span className="text-lg text-gray-500 line-through" aria-label={`Original price $${product.price.toFixed(2)}`}>
                                        ${product.price.toFixed(2)}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <span className="font-medium">Available colors:</span>
                                {product.colors.map((color) => (
                                    <div
                                        key={color}
                                        className={`w-6 h-6 rounded-full ${color === 'green' ? 'bg-green-500' :
                                            color === 'orange' ? 'bg-orange-500' :
                                                'bg-yellow-500'
                                            }`}
                                        aria-label={`${color} color option`}
                                        role="img"
                                    />
                                ))}
                            </div>
                            {product.discount > 0 && (
                                <Badge
                                    variant="danger"
                                    aria-label={`${product.discount}% discount applied`}
                                >
                                    {product.discount}% OFF
                                </Badge>
                            )}
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="font-medium">Stock:</span> {product.stock} units
                            </div>
                            <div>
                                <span className="font-medium">Package Size:</span> {product.packageSize} units
                            </div>
                        </div>

                        <p className="text-gray-700">{product.description}</p>
                    </div>
                </div>
            </Modal>
        </>
    );
};
