import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { HttpClient, RequestConfig } from './interfaces';
import { ApiException } from './types';

export class AxiosHttpClient implements HttpClient {
    private axiosInstance: AxiosInstance;

    constructor(baseURL: string, timeout = 10000) {
        this.axiosInstance = axios.create({
            baseURL,
            timeout,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        this.setupInterceptors();
    }

    private setupInterceptors(): void {
        // Request interceptor
        this.axiosInstance.interceptors.request.use(
            (config) => {
                // Add auth token if available
                const token = this.getAuthToken();
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        // Response interceptor
        this.axiosInstance.interceptors.response.use(
            (response) => response.data,
            (error) => {
                const status = error.response?.status || 500;
                const message = error.response?.data?.message || error.message || 'An error occurred';
                const code = error.response?.data?.code;

                throw new ApiException(status, message, code);
            }
        );
    }

    private getAuthToken(): string | null {
        // Implementation would depend on your auth strategy
        return typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
    }

    private buildConfig(config?: RequestConfig): AxiosRequestConfig {
        return {
            headers: config?.headers,
            params: config?.params,
            timeout: config?.timeout,
        };
    }

    async get<T>(url: string, config?: RequestConfig): Promise<T> {
        return this.axiosInstance.get(url, this.buildConfig(config));
    }

    async post<T>(url: string, data?: unknown, config?: RequestConfig): Promise<T> {
        return this.axiosInstance.post(url, data, this.buildConfig(config));
    }

    async put<T>(url: string, data?: unknown, config?: RequestConfig): Promise<T> {
        return this.axiosInstance.put(url, data, this.buildConfig(config));
    }

    async delete<T>(url: string, config?: RequestConfig): Promise<T> {
        return this.axiosInstance.delete(url, this.buildConfig(config));
    }
}
