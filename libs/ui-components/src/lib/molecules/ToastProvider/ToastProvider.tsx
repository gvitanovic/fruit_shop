'use client';

import { createContext, useContext, useCallback, ReactNode, useState } from 'react';
import { Toast, ToastProps, ToastType } from '../../atoms/Toast/Toast';

export interface ToastContextType {
    showToast: (toast: Omit<ToastProps, 'id' | 'onClose'>) => void;
    showSuccess: (title: string, message?: string, duration?: number) => void;
    showError: (title: string, message?: string, duration?: number) => void;
    showWarning: (title: string, message?: string, duration?: number) => void;
    showInfo: (title: string, message?: string, duration?: number) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export { ToastContext };

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};

interface ToastProviderProps {
    children: ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
    const [toasts, setToasts] = useState<ToastProps[]>([]);

    const removeToast = useCallback((id: string) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    }, []);

    const showToast = useCallback((toast: Omit<ToastProps, 'id' | 'onClose'>) => {
        const id = Math.random().toString(36).substr(2, 9);
        const newToast: ToastProps = {
            ...toast,
            id,
            onClose: removeToast,
        };
        setToasts(prev => [...prev, newToast]);
    }, [removeToast]);

    const showSuccess = useCallback((title: string, message?: string, duration?: number) => {
        showToast({ type: 'success', title, message, duration });
    }, [showToast]);

    const showError = useCallback((title: string, message?: string, duration?: number) => {
        showToast({ type: 'error', title, message, duration });
    }, [showToast]);

    const showWarning = useCallback((title: string, message?: string, duration?: number) => {
        showToast({ type: 'warning', title, message, duration });
    }, [showToast]);

    const showInfo = useCallback((title: string, message?: string, duration?: number) => {
        showToast({ type: 'info', title, message, duration });
    }, [showToast]);

    const contextValue: ToastContextType = {
        showToast,
        showSuccess,
        showError,
        showWarning,
        showInfo,
    };

    return (
        <ToastContext.Provider value={contextValue}>
            {children}
            
            {/* Toast Container */}
            <div 
                className="fixed top-4 right-4 z-50 space-y-2 pointer-events-none"
                aria-live="polite"
                aria-label="Notifications"
            >
                {toasts.map(toast => (
                    <div key={toast.id} className="pointer-events-auto">
                        <Toast {...toast} />
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
};
