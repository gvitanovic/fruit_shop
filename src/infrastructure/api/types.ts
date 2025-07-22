export interface ApiResponse<T> {
    data: T;
    success: boolean;
    message?: string;
}

export interface ApiError {
    message: string;
    status: number;
    code?: string;
}

export class ApiException extends Error {
    constructor(
        public readonly status: number,
        message: string,
        public readonly code?: string
    ) {
        super(message);
        this.name = 'ApiException';
    }
}
