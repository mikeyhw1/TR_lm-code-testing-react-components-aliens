import { useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName, { validation_speciesName } from "./forms/SpeciesName";
import PlanetName, { validation_planetName } from "./forms/PlanetName";
import NumberOfBeings, { validation_numberOfBeings } from "./forms/NumberOfBeings";
import QuizAnswer, { validation_quizAnswer } from "./forms/QuizAnswer";
import ReasonForSparing, { validation_reasonForSparing } from "./forms/ReasonForSparing";
import Input from "../interface";

const W12MForm = () => {
    const [inputs, setInputs] = useState<Input>({
        speciesName: "",
        planetName: "",
        numberOfBeings: 0,
        quizAnswer: "Not 4",
        reasonForSparing: "",
    });

    const [submittedAnswer, setSubmittedAnswer] = useState<Input | undefined>(undefined);

    const handleChange = (
        event:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const validateResult = { validationError: false, tempErrorMsgArray: [] };
        await validation_speciesName(inputs.speciesName, validateResult);
        await validation_planetName(inputs.planetName, validateResult);
        await validation_numberOfBeings(inputs.numberOfBeings.toString(), validateResult);
        await validation_quizAnswer(inputs.quizAnswer, validateResult);
        await validation_reasonForSparing(inputs.reasonForSparing, validateResult);

        // console.log(`input: `, inputs);
        if (validateResult.validationError === true) {
            alert("ERROR! Field(s) is invalid. Please check before resubmit!");
        } else {
            setSubmittedAnswer(inputs);
        }
    };

    return (
        <section className="w12MForm">
            <W12MHeader />

            {/* REST OF FORM GOES HERE */}
            <div className="form__container">
                <form onSubmit={handleSubmit}>
                    <SpeciesName input={inputs.speciesName} handleChange={handleChange} />
                    <PlanetName input={inputs.planetName} handleChange={handleChange} />
                    <NumberOfBeings input={inputs.numberOfBeings} handleChange={handleChange} />
                    <QuizAnswer input={inputs.quizAnswer} handleChange={handleChange} />
                    <ReasonForSparing input={inputs.reasonForSparing} handleChange={handleChange} />

                    <input type="submit" className="form__button" value="Submit Request" />
                </form>
            </div>

            <div className="form__container">
                <label>Answer Preview:</label>
                <p>{inputs.speciesName}</p>
                <p>{inputs.planetName}</p>
                <p>{inputs.numberOfBeings}</p>
                <p>{inputs.quizAnswer}</p>
                <p>{inputs.reasonForSparing}</p>
            </div>

            <div className="form__container">
                <label>Submitted Answer:</label>
                {submittedAnswer !== undefined && (
                    <>
                        <p data-testid="submitted_speciesName">{submittedAnswer.speciesName}</p>
                        <p data-testid="submitted_planetName">{submittedAnswer.planetName}</p>
                        <p data-testid="submitted_numberOfBeings">{submittedAnswer.numberOfBeings}</p>
                        <p data-testid="submitted_quizAnswer">{submittedAnswer.quizAnswer}</p>
                        <p data-testid="submitted_reasonForSparing">{submittedAnswer.reasonForSparing}</p>
                    </>
                )}
            </div>
        </section>
    );
};

export default W12MForm;
