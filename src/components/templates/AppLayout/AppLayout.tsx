'use client';

import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Header } from '../../organisms/Header/Header';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
            staleTime: 30 * 1000, // 30 seconds
            gcTime: 10 * 60 * 1000, // 10 minutes
        },
        mutations: {
            retry: 1,
        },
    },
}); interface AppLayoutProps {
    children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="min-h-screen bg-gray-50">
                {/* Skip to main content link for keyboard users */}
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                    Skip to main content
                </a>

                <Header />

                <main
                    id="main-content"
                    role="main"
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
                    aria-label="Main content"
                >
                    {children}
                </main>

                {/* Screen reader announcement region */}
                <div
                    id="sr-announcements"
                    aria-live="polite"
                    aria-atomic="true"
                    className="sr-only"
                ></div>
            </div>
        </QueryClientProvider>
    );
};
