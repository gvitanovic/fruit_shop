import { useCallback } from 'react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastMessage {
    type: ToastType;
    title: string;
    message?: string;
}

export const useToast = () => {
    const showToast = useCallback((toast: ToastMessage) => {
        // For now, use a simple alert as fallback
        // This can be enhanced with a proper toast system later
        const emoji = {
            success: '✅',
            error: '❌', 
            warning: '⚠️',
            info: 'ℹ️'
        }[toast.type];
        
        const fullMessage = toast.message 
            ? `${emoji} ${toast.title}\n${toast.message}`
            : `${emoji} ${toast.title}`;
            
        alert(fullMessage);
    }, []);

    const showSuccess = useCallback((title: string, message?: string) => {
        showToast({ type: 'success', title, message });
    }, [showToast]);

    const showError = useCallback((title: string, message?: string) => {
        showToast({ type: 'error', title, message });
    }, [showToast]);

    const showWarning = useCallback((title: string, message?: string) => {
        showToast({ type: 'warning', title, message });
    }, [showToast]);

    const showInfo = useCallback((title: string, message?: string) => {
        showToast({ type: 'info', title, message });
    }, [showToast]);

    return {
        showToast,
        showSuccess,
        showError,
        showWarning,
        showInfo,
    };
};
