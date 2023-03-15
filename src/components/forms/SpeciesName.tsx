import { useState } from "react";
import { test_failMaxLength, test_failMinLength } from "../validator/validator";
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
                    // validation(setErrorDisplay, setErrorMessage, handleChange, e);
                    handleChange(e);
                }}
                id="speciesName"
                // aria-label="speciesName"
            />

            <ErrorMsg messageArray={errorMessageArray} display={errorDisplay} />
        </>
    );
};

const validation_speciesName = async (
    testInput: string,
    validateResult: { validationError: boolean; tempErrorMsgArray: string[] }
) =>
    // setErrorDisplay: React.Dispatch<React.SetStateAction<boolean>>,
    // setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
    // handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    // e: React.ChangeEvent<HTMLInputElement>
    {
        await test_failMinLength(testInput, 3, validateResult, "Species Name");
        // TOFIX: max 23
        await test_failMaxLength(testInput, 6, validateResult, "Species Name");

        return validateResult;
        // let tempErrorDisplay = false;
        // let tempErrorMsg = "Error: ";
        // console.log(`1 tempErrorDisplay: ${temp.tempErrorDisplay}`);
        // console.log(`1 tempErrorMsg: ${temp.tempErrorMsg}`);

        // console.log(`2 tempErrorDisplay: ${temp.tempErrorDisplay}`);
        // console.log(`2 tempErrorMsg: ${temp.tempErrorMsg}`);

        // const errorMsg_minLength = failMinLength(input, 3, tempErrorDisplay, tempErrorMsg);
        // if (errorMsg_minLength) {
        //     tempErrorDisplay = true;
        //     tempErrorMsg += errorMsg_minLength;
        // }
    };
export default SpeciesName;
