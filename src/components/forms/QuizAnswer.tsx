import { useState } from "react";
import ErrorMsg from "./ErrorMsg";
import { test_failMatchAnswer, test_failValidEntry } from "../validator/validator";

interface QuizAnswerProps {
    input: string;
    handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const QuizAnswer: React.FC<QuizAnswerProps> = ({ input, handleChange }) => {
    const [errorDisplay, setErrorDisplay] = useState<boolean>(false);
    const [errorMessageArray, setErrorMessageArray] = useState<string[]>([]);

    const validation = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const testInput = e.target.value;
        const validateResult = {
            validationError: false,
            tempErrorMsgArray: [],
        };
        await validation_quizAnswer(testInput, validateResult);
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
            <label className="form__label" htmlFor="quizAnswer">
                What is 2+2?
            </label>
            <select
                className="form__input"
                name="quizAnswer"
                value={input}
                onChange={(e) => {
                    validation(e);
                    handleChange(e);
                }}
                id="quizAnswer"
            >
                <option value="Not 4">Not 4</option>
                <option value="Alien">Alien</option>
                <option value="666">666</option>
                <option value="4">4</option>
            </select>
            <ErrorMsg messageArray={errorMessageArray} display={errorDisplay} />
        </>
    );
};

export const validation_quizAnswer = async (
    testInput: string,
    validateResult: { validationError: boolean; tempErrorMsgArray: string[] }
) => {
    await test_failMatchAnswer(testInput, "4", validateResult, "What is 2+2?");
    await test_failValidEntry(testInput, validateResult, "What is 2+2?");
    return validateResult;
};

export default QuizAnswer;
