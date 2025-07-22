import { AxiosHttpClient } from './AxiosHttpClient';
import { ProductRepository, CartRepository, UserRepository } from './repositories';

class ApiManager {
    private httpClient: AxiosHttpClient;
    public products: ProductRepository;
    public cart: CartRepository;
    public user: UserRepository;

    constructor() {
        // Use Next.js API routes as BFF layer
        const baseURL = typeof window !== 'undefined'
            ? '/api'  // Client-side: use relative path to Next.js API routes
            : `http://localhost:${process.env.PORT || 3001}/api`; // Server-side: full URL

        this.httpClient = new AxiosHttpClient(baseURL);

        this.products = new ProductRepository(this.httpClient);
        this.cart = new CartRepository(this.httpClient);
        this.user = new UserRepository(this.httpClient);
    }    // Singleton pattern
    private static instance: ApiManager;

    static getInstance(): ApiManager {
        if (!ApiManager.instance) {
            ApiManager.instance = new ApiManager();
        }
        return ApiManager.instance;
    }
}

export default ApiManager;
