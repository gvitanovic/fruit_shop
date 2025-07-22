import { PasswordStrength as PasswordStrengthType } from '../../../domain/entities/User';

interface PasswordStrengthProps {
    strength: PasswordStrengthType;
}

export const PasswordStrength = ({ strength }: PasswordStrengthProps) => {
    const getStrengthColor = (percentage: number) => {
        if (percentage < 50) return 'bg-red-500';
        if (percentage < 80) return 'bg-yellow-500';
        return 'bg-green-500';
    };

    const getStrengthLabel = (percentage: number) => {
        if (percentage < 50) return 'Weak';
        if (percentage < 80) return 'Medium';
        return 'Strong';
    };

    return (
        <div className="space-y-3">
            {/* Strength bar */}
            <div className="space-y-1">
                <div className="flex justify-between text-sm">
                    <span>Password Strength</span>
                    <span className="font-medium">{getStrengthLabel(strength.percentage)}</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                        className={`h-full transition-all duration-300 ${getStrengthColor(strength.percentage)}`}
                        style={{ width: `${strength.percentage}%` }}
                    />
                </div>
            </div>

            {/* Rules checklist */}
            <div className="space-y-1">
                <div className="text-sm font-medium text-gray-700">Requirements:</div>
                {strength.rules.map((rule, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                        <div
                            className={`w-4 h-4 rounded-full flex items-center justify-center ${rule.met ? 'bg-green-500 text-white' : 'bg-gray-300'
                                }`}
                        >
                            {rule.met && <span className="text-xs">✓</span>}
                        </div>
                        <span className={rule.met ? 'text-green-700' : 'text-gray-600'}>
                            {rule.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
