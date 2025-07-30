import { Product, ProductFilters } from '../entities/Product';

export class ProductService {
    static filterProducts(products: Product[], filters: ProductFilters): Product[] {
        let filtered = products;

        // Apply search filter
        if (filters.searchQuery) {
            const query = filters.searchQuery.toLowerCase();
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(query)
            );
        }

        // Apply color filter
        if (filters.colors.length > 0) {
            filtered = filtered.filter(product =>
                product.colors.some(color => filters.colors.includes(color))
            );
        }

        // Apply sorting
        filtered = this.sortProducts(filtered, filters.sortOrder);

        return filtered;
    }

    static sortProducts(products: Product[], sortOrder: string): Product[] {
        const sorted = [...products];

        switch (sortOrder) {
            case 'name-asc':
                return sorted.sort((a, b) => a.name.localeCompare(b.name));
            case 'name-desc':
                return sorted.sort((a, b) => b.name.localeCompare(a.name));
            case 'price-asc':
                return sorted.sort((a, b) => a.price - b.price);
            case 'price-desc':
                return sorted.sort((a, b) => b.price - a.price);
            case 'discount-desc':
                return sorted.sort((a, b) => b.discount - a.discount);
            default:
                return sorted;
        }
    }

    static calculateDiscountedPrice(price: number, discount: number): number {
        return price * (1 - discount / 100);
    }

    static isValidQuantity(quantity: number, packageSize: number): boolean {
        return quantity > 0 && quantity % packageSize === 0;
    }

    static getMaxValidQuantity(stock: number, packageSize: number): number {
        return Math.floor(stock / packageSize) * packageSize;
    }
}
