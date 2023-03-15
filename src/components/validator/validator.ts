export function test_failMinLength(
    input: string,
    min: number,
    validateResult: { validationError: boolean; tempErrorMsg: string }
) {
    return new Promise<void>((resolve, reject) => {
        if (!(input.length >= min)) {
            validateResult.validationError = true;
            validateResult.tempErrorMsg += `Must have more than ${min} characters!`;
            resolve();
        }
        resolve();
    });
}

export function test_failMaxLength(
    input: string,
    max: number,
    temp: { validationError: boolean; tempErrorMsg: string }
) {
    return new Promise<void>((resolve, reject) => {
        if (!(input.length <= max)) {
            temp.validationError = true;
            temp.tempErrorMsg += `Must have less than ${max} characters!`;
            resolve();
        }
        resolve();
    });
}
