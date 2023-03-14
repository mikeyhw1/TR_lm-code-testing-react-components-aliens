import { useState } from "react";
import W12MHeader from "./W12MHeader";

const W12MForm = () => {
    // const aaa = 0;

    const [inputs, setInputs] = useState({
        species: "species",
        planet: "planet",
        numOfBeings: "numOfBeings",
        reason: "reason",
    });
    const [mathAnswer, setMathAnswer] = useState("Not 4");

    // const [inputs, setInputs] = useState<Cat | Dog>({
    //     name: "name",
    //     species: "species",
    //     favFoods: ["favFoods"],
    //     birthYear: 2999,
    // });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleChange_mathAnswer = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value as "Not 4" | "Alien" | "666" | "4";
        setMathAnswer(value);
    };

    const handleChange_reason = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // const newID = uuidv4();
        // if (inputType === "Cat") {
        //     setCats([...cats, { ...inputs, id: newID }]);
        // } else {
        //     setDogs([...dogs, { ...inputs, id: newID }]);
        // }
    };

    return (
        <section className="w12MForm">
            <W12MHeader />

            {/* REST OF FORM GOES HERE */}
            <div className="form__container">
                <form onSubmit={handleSubmit}>
                    <label>Species Name:</label>
                    <input
                        className="form__input"
                        type="text"
                        name="species"
                        value={inputs.species || ""}
                        onChange={handleChange}
                    />

                    <label>Planet Name:</label>
                    <input
                        className="form__input"
                        type="text"
                        name="planet"
                        value={inputs.planet || ""}
                        onChange={handleChange}
                    />

                    <label>Number of beings:</label>
                    <input
                        className="form__input"
                        type="number"
                        name="numOfBeings"
                        value={inputs.numOfBeings || ""}
                        onChange={handleChange}
                    />

                    <label>What is 2+2?</label>
                    <select className="form__input" value={mathAnswer} onChange={handleChange_mathAnswer}>
                        <option value="Not 4">Not 4</option>
                        <option value="Alien">Alien</option>
                        <option value="666">666</option>
                        <option value="4">4</option>
                    </select>

                    <label>Reason for sparing:</label>
                    <textarea
                        className="form__input"
                        name="reason"
                        cols={50}
                        rows={5}
                        value={inputs.reason}
                        onChange={handleChange_reason}
                    ></textarea>
                    {/* cols="40" rows="5" */}
                    <input type="submit" />
                </form>
            </div>

            <div className="form__container">
                <h2>Answer Review:</h2>
                <p>{inputs.species}</p>
                <p>{inputs.planet}</p>
                <p>{inputs.numOfBeings}</p>
                <p>{mathAnswer}</p>
                <p>{inputs.reason}</p>
            </div>
        </section>
    );
};

export default W12MForm;
