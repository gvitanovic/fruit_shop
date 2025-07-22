'use client';

import { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from '../Button/Button';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
    showDetails?: boolean;
}

interface State {
    hasError: boolean;
    error?: Error;
    errorInfo?: React.ErrorInfo;
}

export class ErrorBoundary extends Component<Props, State> {
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
        console.error('ErrorBoundary caught an error:', error, errorInfo);
        this.setState({
            error,
            errorInfo
        });
    }

    handleRetry = () => {
        this.setState({ hasError: false, error: undefined, errorInfo: undefined });
    };

    handleGoHome = () => {
        window.location.href = '/';
    };

    render() {
        if (this.state.hasError) {
            // Custom fallback UI
            if (this.props.fallback) {
                return this.props.fallback;
            }

            // Default error UI
            return (
                <div className="min-h-[400px] flex items-center justify-center p-6">
                    <div className="text-center space-y-6 max-w-md">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                            <AlertTriangle className="w-8 h-8 text-red-600" />
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold text-gray-900">
                                Something went wrong
                            </h2>
                            <p className="text-gray-600">
                                We&apos;re sorry, but something unexpected happened.
                                Please try refreshing the page or go back to the homepage.
                            </p>
                        </div>

                        {this.props.showDetails && this.state.error && (
                            <details className="text-left bg-gray-100 p-4 rounded-lg">
                                <summary className="cursor-pointer text-sm font-medium text-gray-700 mb-2">
                                    Error Details
                                </summary>
                                <pre className="text-xs text-red-600 whitespace-pre-wrap overflow-auto">
                                    {this.state.error.message}
                                    {this.state.error.stack}
                                </pre>
                            </details>
                        )}

                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Button onClick={this.handleRetry} variant="outline">
                                <RefreshCw className="w-4 h-4 mr-2" />
                                Try Again
                            </Button>
                            <Button onClick={this.handleGoHome}>
                                <Home className="w-4 h-4 mr-2" />
                                Go Home
                            </Button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
