export interface User {
    id: string;
    email: string;
    name: string;
}

export interface PasswordUpdate {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}

export interface PasswordStrength {
    score: number;
    percentage: number;
    rules: PasswordRule[];
}

export interface PasswordRule {
    name: string;
    met: boolean;
    points: number;
}
