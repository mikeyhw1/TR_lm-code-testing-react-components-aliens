import { useState } from "react";
import ErrorMsg from "./ErrorMsg";
import { test_failMaxLength, test_failMinLength, test_failValidEntry } from "../validator/validator";

interface ReasonForSparingProps {
    input: string;
    handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({ input, handleChange }) => {
    const [errorDisplay, setErrorDisplay] = useState<boolean>(false);
    const [errorMessageArray, setErrorMessageArray] = useState<string[]>([]);

    const validation = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const testInput = e.target.value;
        const validateResult = {
            validationError: false,
            tempErrorMsgArray: [],
        };
        await validation_reasonForSparing(testInput, validateResult);
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
            <label className="form__label" htmlFor="reasonForSparing">
                Reason for sparing:
            </label>
            <textarea
                className="form__input"
                cols={50}
                rows={5}
                name="reasonForSparing"
                value={input || ""}
                placeholder={"Reason for sparing"}
                onChange={(e) => {
                    validation(e);
                    handleChange(e);
                }}
                id="reasonForSparing"
            />
            <ErrorMsg messageArray={errorMessageArray} display={errorDisplay} />
        </>
    );
};

export const validation_reasonForSparing = async (
    testInput: string,
    validateResult: { validationError: boolean; tempErrorMsgArray: string[] }
) => {
    await test_failMinLength(testInput, 17, validateResult, "Reason for sparing");
    await test_failMaxLength(testInput, 153, validateResult, "Reason for sparing");
    await test_failValidEntry(testInput, validateResult, "Reason for sparing");
    return validateResult;
};

export default ReasonForSparing;
