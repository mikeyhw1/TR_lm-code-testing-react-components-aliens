import ErrorMsg from "./ErrorMsg";

interface NumberOfBeingsProps {
    input: number;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({ input, handleChange }) => {
    return (
        <>
            <label className="form__label">Number of beings:</label>
            <input
                className="form__input"
                type="number"
                name="numberOfBeings"
                value={input || ""}
                placeholder={"Number of beings"}
                onChange={handleChange}
            />
            <ErrorMsg message="validation message" display={true} />
        </>
    );
};
export default NumberOfBeings;
