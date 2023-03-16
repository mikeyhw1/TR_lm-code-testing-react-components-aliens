// NOTE: should have seperate out pure validate logic,
// put I have no time for this right now

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

export function test_failMinValue(
    input: string,
    minValue: number,
    validateResult: { validationError: boolean; tempErrorMsgArray: string[] },
    inputName: string
) {
    return new Promise<void>((resolve, reject) => {
        if (isNumeric(input)) {
            const num = Number.parseInt(input);
            if (num < minValue) {
                validateResult.validationError = true;
                validateResult.tempErrorMsgArray.push(`${inputName} must be at least ${minValue}`);
                resolve();
            }
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

export function test_failIsNumbers(
    input: string,
    validateResult: { validationError: boolean; tempErrorMsgArray: string[] },
    inputName: string
) {
    return new Promise<void>((resolve, reject) => {
        if (!isNumeric(input)) {
            validateResult.validationError = true;
            validateResult.tempErrorMsgArray.push(`${inputName} must be numbers only!`);
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

export function test_failMatchAnswer(
    input: string,
    answer: string,
    validateResult: { validationError: boolean; tempErrorMsgArray: string[] },
    inputName: string
) {
    return new Promise<void>((resolve, reject) => {
        if (input !== answer) {
            validateResult.validationError = true;
            validateResult.tempErrorMsgArray.push(`'${input}' is a wrong answer for '${inputName}'!`);
            resolve();
        }
        resolve();
    });
}

export function test_failValidEntry(
    input: string | number | null | undefined,
    validateResult: { validationError: boolean; tempErrorMsgArray: string[] },
    inputName: string
) {
    return new Promise<void>((resolve, reject) => {
        if (input === null || input === undefined || input === 0 || input === "" || input === "0") {
            validateResult.validationError = true;
            validateResult.tempErrorMsgArray.push(`'${inputName}' cannot have invalid entry!`);
            resolve();
        }
        resolve();
    });
}

function isNumeric(value: string) {
    if (typeof value !== "string") return false;
    return !isNaN(+value) && !isNaN(parseFloat(value));
}
