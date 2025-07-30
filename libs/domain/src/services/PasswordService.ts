import { PasswordStrength, PasswordRule } from '../entities/User';

export class PasswordService {
    static calculateStrength(password: string): PasswordStrength {
        const rules: PasswordRule[] = [
            {
                name: 'At least 8 characters',
                met: password.length >= 8,
                points: 10
            },
            {
                name: 'At least one lowercase letter',
                met: /[a-z]/.test(password),
                points: 5
            },
            {
                name: 'At least one uppercase letter',
                met: /[A-Z]/.test(password),
                points: 5
            },
            {
                name: 'At least one digit',
                met: /\d/.test(password),
                points: 5
            },
            {
                name: 'At least one symbol',
                met: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
                points: 10
            },
            {
                name: 'At least 5 unique characters',
                met: new Set(password).size >= 5,
                points: 5
            }
        ];

        const metRules = rules.filter(rule => rule.met);
        const totalPoints = metRules.reduce((sum, rule) => sum + rule.points, 0);
        const bonusPoints = metRules.length * 10;
        const score = totalPoints + bonusPoints;
        const percentage = Math.min(100, score);

        return {
            score,
            percentage,
            rules
        };
    }

    static isStrongPassword(password: string): boolean {
        const strength = this.calculateStrength(password);
        return strength.percentage >= 80; // Consider strong if >= 80%
    }

    static getStrengthLevel(percentage: number): 'weak' | 'medium' | 'strong' {
        if (percentage < 50) return 'weak';
        if (percentage < 80) return 'medium';
        return 'strong';
    }
}
