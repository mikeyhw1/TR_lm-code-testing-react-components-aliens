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
    temp: { validationError: boolean; tempErrorMsgArray: string[] },
    inputName: string
) {
    return new Promise<void>((resolve, reject) => {
        if (!(input.length <= max)) {
            temp.validationError = true;
            temp.tempErrorMsgArray.push(`${inputName} must have less than ${max} characters!`);
            resolve();
        }
        resolve();
    });
}
