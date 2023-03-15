import ErrorMsg from "./ErrorMsg";

interface QuizAnswerProps {
    input: string;
    handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const QuizAnswer: React.FC<QuizAnswerProps> = ({ input, handleChange }) => {
    return (
        <>
            <label className="form__label" htmlFor="quizAnswer">
                What is 2+2?
            </label>
            <select className="form__input" name="quizAnswer" value={input} onChange={handleChange} id="quizAnswer">
                <option value="Not 4">Not 4</option>
                <option value="Alien">Alien</option>
                <option value="666">666</option>
                <option value="4">4</option>
            </select>
            <ErrorMsg message="validation message" display={true} />
        </>
    );
};
export default QuizAnswer;
