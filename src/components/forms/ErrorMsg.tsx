interface ErrorMsgProps {
    message: string;
    display: boolean;
}

const ErrorMsg: React.FC<ErrorMsgProps> = ({ message = "validation message", display }) => {
    return <>{display === true && <p className="form__errorMsg--display">{message}</p>}</>;
};
export default ErrorMsg;
