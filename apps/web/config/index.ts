export const config = {
    // Mock server configuration
    mockServerUrl: process.env.MOCK_SERVER_URL || 'http://localhost:3002',

    // External server configuration  
    externalServerUrl: process.env.EXTERNAL_SERVER_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',

    // Backend server (for compatibility)
    backendServer: {
        url: process.env.EXTERNAL_SERVER_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
        apiKey: process.env.API_KEY || process.env.NEXT_PUBLIC_API_KEY || 'fruit-shop-api-key-2024'
    },

    // Environment
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',
};
