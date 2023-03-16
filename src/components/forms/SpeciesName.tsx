import { useState } from "react";
import {
    test_failMaxLength,
    test_failMinLength,
    test_failNoNumbers,
    test_failNoSpecialCharacters,
    test_failValidEntry,
} from "../validator/validator";
import ErrorMsg from "./ErrorMsg";

interface SpeciesNameProps {
    input: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SpeciesName: React.FC<SpeciesNameProps> = ({ input, handleChange }) => {
    const [errorDisplay, setErrorDisplay] = useState<boolean>(false);
    const [errorMessageArray, setErrorMessageArray] = useState<string[]>([]);

    const validation = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const testInput = e.target.value;
        const validateResult = {
            validationError: false,
            tempErrorMsgArray: [],
        };
        await validation_speciesName(testInput, validateResult);
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
            <label className="form__label" htmlFor="speciesName">
                Species Name:
            </label>
            <input
                className="form__input"
                type="text"
                name="speciesName"
                value={input || ""}
                placeholder={"Species Name"}
                onChange={(e) => {
                    validation(e);
                    handleChange(e);
                }}
                id="speciesName"
            />
            <ErrorMsg messageArray={errorMessageArray} display={errorDisplay} />
        </>
    );
};

export const validation_speciesName = async (
    testInput: string,
    validateResult: { validationError: boolean; tempErrorMsgArray: string[] }
) => {
    await test_failMinLength(testInput, 3, validateResult, "Species Name");
    await test_failMaxLength(testInput, 23, validateResult, "Species Name");
    await test_failNoNumbers(testInput, validateResult, "Species Name");
    await test_failNoSpecialCharacters(testInput, validateResult, "Species Name");
    await test_failValidEntry(testInput, validateResult, "Species Name");
    return validateResult;
};

export default SpeciesName;
