'use client';

import { ReactNode, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '../../atoms/Button/Button';
import { Portal } from '../../atoms/Portal/Portal';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Modal = ({ isOpen, onClose, title, children, size = 'md' }: ModalProps) => {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';

            // Focus management - focus the modal when it opens
            const modal = document.getElementById('modal-dialog');
            if (modal) {
                modal.focus();
            }
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }

    const sizeClasses = {
        sm: 'max-w-md',
        md: 'max-w-lg',
        lg: 'max-w-2xl',
        xl: 'max-w-4xl',
    };

    return (
        <Portal>
            <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? 'modal-title' : undefined}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black bg-opacity-50"
                    onClick={onClose}
                    aria-hidden="true"
                />

                {/* Modal */}
                <div
                    id="modal-dialog"
                    className={`relative bg-white rounded-lg shadow-lg w-full ${sizeClasses[size]} max-h-[90vh] overflow-hidden focus:outline-none`}
                    tabIndex={-1}
                >
                    {/* Header */}
                    {title && (
                        <div className="flex items-center justify-between p-6 border-b">
                            <h2
                                id="modal-title"
                                className="text-xl font-semibold"
                            >
                                {title}
                            </h2>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={onClose}
                                className="p-1 h-auto"
                                aria-label="Close dialog"
                            >
                                <X className="w-5 h-5" aria-hidden="true" />
                            </Button>
                        </div>
                    )}

                    {/* Content */}
                    <div
                        className="overflow-y-auto max-h-[calc(90vh-140px)]"
                        role="document"
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
