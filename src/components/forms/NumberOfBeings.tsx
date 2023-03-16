import { useState } from "react";
import ErrorMsg from "./ErrorMsg";
import { test_failIsNumbers, test_failMinValue, test_failValidEntry } from "../validator/validator";

interface NumberOfBeingsProps {
    input: number;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({ input, handleChange }) => {
    const [errorDisplay, setErrorDisplay] = useState<boolean>(false);
    const [errorMessageArray, setErrorMessageArray] = useState<string[]>([]);

    const validation = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const testInput = e.target.value;
        const validateResult = {
            validationError: false,
            tempErrorMsgArray: [],
        };
        await validation_numberOfBeings(testInput, validateResult);
        if (validateResult.validationError) {
            setErrorDisplay(true);
            setErrorMessageArray(validateResult.tempErrorMsgArray);
        } else {
            setErrorDisplay(false);
            setErrorMessageArray([]);
        }
    };

    return (
        <>
            <label className="form__label" htmlFor="numberOfBeings">
                Number of beings:
            </label>
            <input
                className="form__input"
                type="number"
                name="numberOfBeings"
                value={input || ""}
                placeholder={"Number of beings"}
                onChange={(e) => {
                    validation(e);
                    handleChange(e);
                }}
                id="numberOfBeings"
            />
            <ErrorMsg messageArray={errorMessageArray} display={errorDisplay} />
        </>
    );
};

export const validation_numberOfBeings = async (
    testInput: string,
    validateResult: { validationError: boolean; tempErrorMsgArray: string[] }
) => {
    await test_failIsNumbers(testInput, validateResult, "Number of beings");
    await test_failMinValue(testInput, 1000000000, validateResult, "Number of beings");
    await test_failValidEntry(testInput, validateResult, "Number of beings");
    return validateResult;
};

export default NumberOfBeings;
