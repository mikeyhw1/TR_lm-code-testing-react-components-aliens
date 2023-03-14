import ErrorMsg from "./ErrorMsg";

interface SpeciesNameProps {
    input: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SpeciesName: React.FC<SpeciesNameProps> = ({ input, handleChange }) => {
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
                onChange={handleChange}
                id="speciesName"
                // aria-label="speciesName"
            />

            <ErrorMsg message="validation message" display={true} />
        </>
    );
};
export default SpeciesName;
