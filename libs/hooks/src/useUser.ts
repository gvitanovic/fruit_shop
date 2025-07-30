import { useMutation } from '@tanstack/react-query';
import { PasswordUpdate } from '@fruit-shop/domain';
import ApiManager from '@fruit-shop/infrastructure';

export const useUpdatePassword = () => {
    return useMutation({
        mutationFn: (passwordData: PasswordUpdate) =>
            ApiManager.getInstance().user.updatePassword(passwordData),
    });
};
