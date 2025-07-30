import { HTMLAttributes } from 'react';
import { clsx } from 'clsx';

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
    size?: 'sm' | 'md' | 'lg';
}

const Spinner = ({ className, size = 'md', ...props }: SpinnerProps) => {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
    };

    return (
        <div
            className={clsx(
                'animate-spin rounded-full border-2 border-gray-300 border-t-blue-600',
                sizeClasses[size],
                className
            )}
            {...props}
        />
    );
};

export { Spinner };
