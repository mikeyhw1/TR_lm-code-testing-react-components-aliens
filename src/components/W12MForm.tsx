import { useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./forms/SpeciesName";
import PlanetName from "./forms/PlanetName";
import NumberOfBeings from "./forms/NumberOfBeings";
import QuizAnswer from "./forms/QuizAnswer";
import ReasonForSparing from "./forms/ReasonForSparing";
import Input from "../interface";

const W12MForm = () => {
    const [inputs, setInputs] = useState<Input>({
        speciesName: "",
        planetName: "",
        numberOfBeings: 0,
        reason: "",
        quizAnswer: "Not 4",
        reasonForSparing: "",
    });

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

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
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

                    <input type="submit" />
                </form>
            </div>

            <div className="form__container">
                <h2>Answer Review:</h2>
                <p>{inputs.speciesName}</p>
                <p>{inputs.planetName}</p>
                <p>{inputs.numberOfBeings}</p>
                <p>{inputs.quizAnswer}</p>
                <p>{inputs.reasonForSparing}</p>
            </div>
        </section>
    );
};

export default W12MForm;
