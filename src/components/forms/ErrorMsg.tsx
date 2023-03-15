interface ErrorMsgProps {
    messageArray: string[];
    display: boolean;
}

const ErrorMsg: React.FC<ErrorMsgProps> = ({ messageArray, display }) => {
    return (
        <>
            {display === true &&
                messageArray.map((i) => (
                    <h3 className="form__errorMsg--display" key={i}>
                        {i}
                    </h3>
                ))}
        </>
    );
};
export default ErrorMsg;

// const ErrorMsg: React.FC<ErrorMsgProps> = ({ message = "validation message", display }) => {
//     return <>{display === true && <p className="form__errorMsg--display">{message}</p>}</>;
// };
// export default ErrorMsg;
