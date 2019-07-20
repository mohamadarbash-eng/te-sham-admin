import { validatorsControl } from './validators-control';

export function minLengthValidator(value: string, minLength: number): boolean {
    const _value = value.trim();
    return (!!_value && (_value.length >= minLength));
}

export function formControlsValidator(formControls: any): boolean {
    let formValid = true;
    for(const key in formControls) {
        if (!formControls[key].value) {
            formValid = formValid && validatorsControl(formControls[key].value, formControls[key].rules).value;
        } else {
            const subForm = formControls[key];
            for (const _key in subForm) {
                if (subForm[_key].value) {
                    formValid = formValid && validatorsControl(subForm[_key].value, subForm[_key].rules).value;
                }
            }
        }
        if(!formValid) {
            break;
        }
    }
    return formValid;
}
