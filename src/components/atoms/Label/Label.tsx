import { LabelHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

const Label = forwardRef<
    HTMLLabelElement,
    LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
    <label
        ref={ref}
        className={clsx(
            'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
            className
        )}
        {...props}
    />
));

Label.displayName = 'Label';

export { Label };
