import ErrorMsg from "./ErrorMsg";

interface ReasonForSparingProps {
    input: string;
    handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({ input, handleChange }) => {
    return (
        <>
            <label className="form__label">Reason for sparing:</label>
            <textarea
                className="form__input"
                cols={50}
                rows={5}
                name="reasonForSparing"
                value={input || ""}
                placeholder={"Reason for sparing"}
                onChange={handleChange}
            />
            <ErrorMsg message="validation message" display={true} />
        </>
    );
};
export default ReasonForSparing;
