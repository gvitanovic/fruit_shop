import { Product, ProductFilters, Cart, CartItem, PasswordUpdate } from '@fruit-shop/domain';
import { HttpClient } from './interfaces';
import { ApiResponse } from './types';

export interface IProductRepository {
    getAllProducts(): Promise<Product[]>;
    getProductById(id: string): Promise<Product>;
    searchProducts(query: string): Promise<string[]>;
    getFilteredProducts(filters: ProductFilters): Promise<Product[]>;
}

export interface ICartRepository {
    getCart(): Promise<Cart>;
    addToCart(item: CartItem): Promise<Cart>;
    removeFromCart(productId: string, quantity: number): Promise<Cart>;
}

export interface IUserRepository {
    updatePassword(passwordData: PasswordUpdate): Promise<void>;
}

export class ProductRepository implements IProductRepository {
    constructor(private httpClient: HttpClient) { }

    async getAllProducts(): Promise<Product[]> {
        const response = await this.httpClient.get<ApiResponse<Product[]>>('/products');
        // The axios interceptor returns response.data, which is the ApiResponse object
        // So we need to access the data property of that ApiResponse
        return (response as ApiResponse<Product[]>).data || [];
    }

    async getProductById(id: string): Promise<Product> {
        const response = await this.httpClient.get<ApiResponse<Product>>(`/products/${id}`);
        return (response as ApiResponse<Product>).data;
    }

    async searchProducts(query: string): Promise<string[]> {
        const response = await this.httpClient.get<ApiResponse<string[]>>(
            `/suggestions?searchQuery=${encodeURIComponent(query)}`
        );
        return (response as ApiResponse<string[]>).data || [];
    }

    async getFilteredProducts(filters: ProductFilters): Promise<Product[]> {
        const params = new URLSearchParams();

        // Always apply filters - even if just default sorting
        if (filters.searchQuery) {
            params.append('search', filters.searchQuery);
        }

        if (filters.colors && filters.colors.length > 0) {
            params.append('colors', filters.colors.join(','));
        }

        if (filters.sortOrder) {
            params.append('sort', filters.sortOrder);
        }

        const queryString = params.toString();
        const url = queryString ? `/products?${queryString}` : '/products';

        const response = await this.httpClient.get<ApiResponse<Product[]>>(url);
        return (response as ApiResponse<Product[]>).data || [];
    }

}

export class CartRepository implements ICartRepository {
    constructor(private httpClient: HttpClient) { }

    async getCart(): Promise<Cart> {
        const response = await this.httpClient.get<ApiResponse<Cart>>('/cart');
        return (response as ApiResponse<Cart>).data || { items: [], totalPrice: 0, totalItems: 0 };
    }

    async addToCart(item: CartItem): Promise<Cart> {
        const response = await this.httpClient.post<ApiResponse<Cart>>('/cart', item);
        return (response as ApiResponse<Cart>).data || { items: [], totalPrice: 0, totalItems: 0 };
    }

    async removeFromCart(productId: string, quantity: number): Promise<Cart> {
        const response = await this.httpClient.post<ApiResponse<Cart>>('/cart/remove', {
            productId,
            quantity
        });
        return (response as ApiResponse<Cart>).data || { items: [], totalPrice: 0, totalItems: 0 };
    }
}

export class UserRepository implements IUserRepository {
    constructor(private httpClient: HttpClient) { }

    async updatePassword(passwordData: PasswordUpdate): Promise<void> {
        await this.httpClient.put<ApiResponse<void>>('/user/password', passwordData);
    }
}
