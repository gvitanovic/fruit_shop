import { forwardRef, ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background select-none',
    {
        variants: {
            variant: {
                default: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600',
                secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
                destructive: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-600',
                outline: 'border border-gray-300 bg-transparent hover:bg-gray-50 focus:ring-gray-500',
                ghost: 'hover:bg-gray-100 focus:ring-gray-500',
            },
            size: {
                default: 'h-10 py-2 px-4',
                sm: 'h-8 px-3 text-sm',
                lg: 'h-12 px-6 text-lg',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={clsx(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
