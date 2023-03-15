export function test_failMinLength(
    input: string,
    min: number,
    validateResult: { validationError: boolean; tempErrorMsgArray: string[] },
    inputName: string
) {
    return new Promise<void>((resolve, reject) => {
        if (!(input.length >= min)) {
            validateResult.validationError = true;
            validateResult.tempErrorMsgArray.push(`${inputName} must have more than ${min} characters!`);
            resolve();
        }
        resolve();
    });
}

export function test_failMaxLength(
    input: string,
    max: number,
    validateResult: { validationError: boolean; tempErrorMsgArray: string[] },
    inputName: string
) {
    return new Promise<void>((resolve, reject) => {
        if (!(input.length <= max)) {
            validateResult.validationError = true;
            validateResult.tempErrorMsgArray.push(`${inputName} must have less than ${max} characters!`);
            resolve();
        }
        resolve();
    });
}

export function test_failNoNumbers(
    input: string,
    validateResult: { validationError: boolean; tempErrorMsgArray: string[] },
    inputName: string
) {
    return new Promise<void>((resolve, reject) => {
        const numbers = /[0-9]/;
        if (numbers.test(input)) {
            validateResult.validationError = true;
            validateResult.tempErrorMsgArray.push(`${inputName} must have NO numbers!`);
            resolve();
        }
        resolve();
    });
}

export function test_failNoSpecialCharacters(
    input: string,
    validateResult: { validationError: boolean; tempErrorMsgArray: string[] },
    inputName: string
) {
    return new Promise<void>((resolve, reject) => {
        const specialCharacters = /[`£€¢!@#$%^&*()_+\-–=[\]{};':"\\|,.<>/?~]/;
        if (specialCharacters.test(input)) {
            validateResult.validationError = true;
            validateResult.tempErrorMsgArray.push(`${inputName} must have NO special characters!`);
            resolve();
        }
        resolve();
    });
}
