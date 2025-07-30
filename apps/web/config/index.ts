export const config = {
    // Mock server configuration
    mockServerUrl: process.env.MOCK_SERVER_URL || 'http://localhost:3002',

    // External server configuration  
    externalServerUrl: process.env.EXTERNAL_SERVER_URL || 'http://localhost:3002',

    // Backend server (for compatibility)
    backendServer: {
        url: process.env.EXTERNAL_SERVER_URL || 'http://localhost:3002'
    },

    // Environment
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',
};
