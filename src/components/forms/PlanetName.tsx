import { useState } from "react";

import ErrorMsg from "./ErrorMsg";
import { test_failMaxLength, test_failMinLength, test_failNoSpecialCharacters } from "../validator/validator";

interface PlanetNameProps {
    input: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PlanetName: React.FC<PlanetNameProps> = ({ input, handleChange }) => {
    const [errorDisplay, setErrorDisplay] = useState<boolean>(false);
    const [errorMessageArray, setErrorMessageArray] = useState<string[]>([]);

    const validation = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const testInput = e.target.value;
        const validateResult = {
            validationError: false,
            tempErrorMsgArray: [],
        };
        await validation_planetName(testInput, validateResult);
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
            <label className="form__label" htmlFor="planetName">
                Planet Name:
            </label>
            <input
                className="form__input"
                type="text"
                name="planetName"
                value={input || ""}
                placeholder={"Planet Name"}
                onChange={(e) => {
                    validation(e);
                    handleChange(e);
                }}
                id="planetName"
            />
            <ErrorMsg messageArray={errorMessageArray} display={errorDisplay} />
        </>
    );
};

export const validation_planetName = async (
    testInput: string,
    validateResult: { validationError: boolean; tempErrorMsgArray: string[] }
) => {
    await test_failMinLength(testInput, 2, validateResult, "Planet Name");
    await test_failMaxLength(testInput, 49, validateResult, "Planet Name");
    await test_failNoSpecialCharacters(testInput, validateResult, "Planet Name");
    return validateResult;
};

export default PlanetName;
