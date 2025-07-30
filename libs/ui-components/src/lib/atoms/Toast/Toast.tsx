'use client';

import { ReactNode, useEffect, useState } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { Button } from '../Button/Button';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastProps {
    id: string;
    type: ToastType;
    title: string;
    message?: string;
    duration?: number;
    onClose: (id: string) => void;
}

const toastIcons = {
    success: CheckCircle,
    error: AlertCircle,
    warning: AlertTriangle,
    info: Info,
};

const toastStyles = {
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
};

const iconStyles = {
    success: 'text-green-500',
    error: 'text-red-500',
    warning: 'text-yellow-500',
    info: 'text-blue-500',
};

export const Toast = ({ id, type, title, message, duration = 5000, onClose }: ToastProps) => {
    const [isVisible, setIsVisible] = useState(true);
    const Icon = toastIcons[type];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => onClose(id), 300); // Allow time for exit animation
        }, duration);

        return () => clearTimeout(timer);
    }, [id, duration, onClose]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => onClose(id), 300);
    };

    return (
        <div
            className={`
                transform transition-all duration-300 ease-in-out
                ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
                border rounded-lg p-4 shadow-lg max-w-sm w-full
                ${toastStyles[type]}
            `}
            role="alert"
            aria-live="polite"
        >
            <div className="flex items-start space-x-3">
                <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${iconStyles[type]}`} aria-hidden="true" />
                
                <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm">{title}</p>
                    {message && (
                        <p className="text-sm opacity-90 mt-1">{message}</p>
                    )}
                </div>

                <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleClose}
                    className="p-1 h-auto text-current hover:bg-black/10"
                    aria-label="Close notification"
                >
                    <X className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
};
