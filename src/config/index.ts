export const config = {
    // Backend server configuration
    backendServer: {
        url: process.env.BACKEND_SERVER_URL || 'http://localhost:3000',
    },

    // Frontend server configuration
    frontendServer: {
        port: process.env.PORT || 3001,
    },
} as const;
