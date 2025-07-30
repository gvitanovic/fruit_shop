'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { PasswordUpdate, PasswordService } from '@fruit-shop/domain';
import { useUpdatePassword } from '@fruit-shop/hooks';
import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';
import { Label } from '../../atoms/Label/Label';
import { PasswordStrength } from '../../molecules/PasswordStrength/PasswordStrength';
import { CheckCircle } from 'lucide-react';

const passwordSchema = z.object({
    currentPassword: z.string().min(1, 'Current password is required'),
    newPassword: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

type PasswordFormData = z.infer<typeof passwordSchema>;

export const ProfileContainer = () => {
    const [showSuccess, setShowSuccess] = useState(false);

    const { mutate: updatePassword, isPending, error } = useUpdatePassword();

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors, isValid }
    } = useForm<PasswordFormData>({
        resolver: zodResolver(passwordSchema),
        mode: 'onChange'
    });

    const newPassword = watch('newPassword', '');
    const passwordStrength = PasswordService.calculateStrength(newPassword);
    const isStrongPassword = PasswordService.isStrongPassword(newPassword);

    const onSubmit = (data: PasswordFormData) => {
        if (!isStrongPassword) return;

        const passwordUpdate: PasswordUpdate = {
            currentPassword: data.currentPassword,
            newPassword: data.newPassword,
            confirmPassword: data.confirmPassword,
        };

        updatePassword(passwordUpdate, {
            onSuccess: () => {
                setShowSuccess(true);
                reset();
                setTimeout(() => setShowSuccess(false), 5000);
            }
        });
    };

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold">Profile</h1>
                <p className="text-gray-600 mt-2">Update your account settings</p>
            </div>

            {/* Success Message */}
            {showSuccess && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <p className="text-green-800">Password updated successfully!</p>
                </div>
            )}

            {/* Error Message */}
            {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-800">Error updating password. Please try again.</p>
                </div>
            )}

            {/* Password Update Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-6">Update Password</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Current Password */}
                    <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input
                            id="currentPassword"
                            type="password"
                            {...register('currentPassword')}
                            error={errors.currentPassword?.message}
                        />
                    </div>

                    {/* New Password */}
                    <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input
                            id="newPassword"
                            type="password"
                            {...register('newPassword')}
                            error={errors.newPassword?.message}
                        />
                    </div>

                    {/* Password Strength Indicator */}
                    {newPassword && (
                        <div className="space-y-2">
                            <PasswordStrength strength={passwordStrength} />
                        </div>
                    )}

                    {/* Confirm Password */}
                    <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input
                            id="confirmPassword"
                            type="password"
                            {...register('confirmPassword')}
                            error={errors.confirmPassword?.message}
                        />
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        disabled={!isValid || !isStrongPassword || isPending}
                        className="w-full"
                        size="lg"
                    >
                        {isPending ? 'Updating...' : 'Update Password'}
                    </Button>

                    {/* Password Requirements Note */}
                    {newPassword && !isStrongPassword && (
                        <p className="text-sm text-red-600 text-center">
                            Password must be strong to update (minimum 80% strength)
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};
