import { config } from '../config';

interface RequestOptions {
    method?: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';
    headers?: Record<string, string>;
    body?: any;
}

class ServerHttpClient {
    private baseURL: string;
    private apiKey: string;

    constructor(baseURL: string, apiKey: string) {
        this.baseURL = baseURL.replace(/\/$/, ''); // Remove trailing slash
        this.apiKey = apiKey;
    }

    private getHeaders(additionalHeaders: Record<string, string> = {}): Record<string, string> {
        return {
            'Content-Type': 'application/json',
            'X-API-Key': this.apiKey,
            ...additionalHeaders,
        };
    }

    async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
        const url = `${this.baseURL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
        
        const fetchOptions: RequestInit = {
            method: options.method || 'GET',
            headers: this.getHeaders(options.headers),
        };

        if (options.body && options.method !== 'GET') {
            fetchOptions.body = typeof options.body === 'string' 
                ? options.body 
                : JSON.stringify(options.body);
        }

        try {
            const response = await fetch(url, fetchOptions);

            if (!response.ok) {
                const errorText = await response.text().catch(() => 'Could not read response');
                console.error(`HTTP ${response.status} Error for ${url}:`, errorText);
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Server HTTP Client Error (${options.method || 'GET'} ${url}):`, error);
            throw error;
        }
    }

    async get<T>(endpoint: string, headers?: Record<string, string>): Promise<T> {
        return this.request<T>(endpoint, { method: 'GET', headers });
    }

    async post<T>(endpoint: string, body?: any, headers?: Record<string, string>): Promise<T> {
        return this.request<T>(endpoint, { method: 'POST', body, headers });
    }

    async delete<T>(endpoint: string, headers?: Record<string, string>): Promise<T> {
        return this.request<T>(endpoint, { method: 'DELETE', headers });
    }

    async put<T>(endpoint: string, body?: any, headers?: Record<string, string>): Promise<T> {
        return this.request<T>(endpoint, { method: 'PUT', body, headers });
    }
}

// Create a singleton instance for server-side use
export const serverHttpClient = new ServerHttpClient(
    config.backendServer.url,
    config.backendServer.apiKey
);

export default ServerHttpClient;
