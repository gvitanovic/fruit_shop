import { forwardRef, InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, type = 'text', error, label, id, ...props }, ref) => {
        const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
        const errorId = error ? `${inputId}-error` : undefined;

        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        {label}
                    </label>
                )}
                <input
                    id={inputId}
                    type={type}
                    className={clsx(
                        'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50',
                        error && 'border-red-500 focus:ring-red-600',
                        className
                    )}
                    aria-invalid={error ? 'true' : 'false'}
                    aria-describedby={errorId}
                    ref={ref}
                    {...props}
                />
                {error && (
                    <p
                        id={errorId}
                        role="alert"
                        aria-live="polite"
                        className="mt-1 text-sm text-red-600"
                    >
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

export { Input };
