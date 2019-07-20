import { minLengthValidator } from './validators';

export function validatorsControl(value: string, rules: any): any {
    let isValid = true;
    let valid = {
        value: true,
        message: ''
    };

    if (rules && rules.minLength && isValid) {
        isValid = minLengthValidator(value, rules.minLength.value);
        if (!isValid) {
            valid = {
                value: isValid,
                message: rules.minLength.message
            }
        }
    }

    return valid
}
