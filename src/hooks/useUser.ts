import { useMutation } from '@tanstack/react-query';
import { PasswordUpdate } from '../domain/entities/User';
import ApiManager from '../infrastructure/api/ApiManager';

export const useUpdatePassword = () => {
    return useMutation({
        mutationFn: (passwordData: PasswordUpdate) =>
            ApiManager.getInstance().user.updatePassword(passwordData),
    });
};
