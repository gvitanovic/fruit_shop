'use client';

import { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class GlobalErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return {
            hasError: true,
            error
        };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Global ErrorBoundary caught an error:', error, errorInfo);

        // Here you could send error reports to your logging service
        // reportErrorToService(error, errorInfo);
    }

    handleRetry = () => {
        this.setState({ hasError: false, error: undefined });
        window.location.reload();
    };

    handleGoHome = () => {
        window.location.href = '/';
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
                    <div className="text-center space-y-8 max-w-lg">
                        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                            <AlertTriangle className="w-10 h-10 text-red-600" />
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-3xl font-bold text-gray-900">
                                Oops! Something went wrong
                            </h1>
                            <p className="text-lg text-gray-600">
                                We&apos;re experiencing technical difficulties with FruitShop.
                                Our team has been notified and is working to fix this issue.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={this.handleRetry}
                                className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                            >
                                <RefreshCw className="w-5 h-5 mr-2" />
                                Reload Page
                            </button>
                            <button
                                onClick={this.handleGoHome}
                                className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                            >
                                <Home className="w-5 h-5 mr-2" />
                                Go to Homepage
                            </button>
                        </div>

                        <div className="pt-4 border-t border-gray-200">
                            <p className="text-sm text-gray-500">
                                If this problem persists, please contact our support team.
                            </p>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
