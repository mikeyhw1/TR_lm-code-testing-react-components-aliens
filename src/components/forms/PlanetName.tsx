import ErrorMsg from "./ErrorMsg";

interface PlanetNameProps {
    input: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PlanetName: React.FC<PlanetNameProps> = ({ input, handleChange }) => {
    return (
        <>
            <label className="form__label">Planet Name:</label>
            <input
                className="form__input"
                type="text"
                name="planetName"
                value={input || ""}
                placeholder={"Planet Name"}
                onChange={handleChange}
            />
            <ErrorMsg message="validation message" display={true} />
        </>
    );
};
export default PlanetName;
