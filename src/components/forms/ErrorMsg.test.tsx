import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import ErrorMsg from "./ErrorMsg";

test("display ErrorMsg", () => {
    const messageArray = ["message for test"];
    const display = true;
    render(<ErrorMsg messageArray={messageArray} display={display} />);
    expect(screen.getByText(/message for test/i)).toBeInTheDocument();
    expect(screen.queryByText("message for test")).toBeInTheDocument();
});

test("hide ErrorMsg", () => {
    const messageArray = ["message for test"];
    const display = false;
    render(<ErrorMsg messageArray={messageArray} display={display} />);
    expect(screen.queryByText("message for test")).toBeNull();
});

test("renders ErrorMsg prop input", () => {
    const messageArray = ["different warning"];
    const display = true;
    render(<ErrorMsg messageArray={messageArray} display={display} />);
    expect(screen.getByText(/different warning/i)).toBeInTheDocument();
});

test("renders all message in array", () => {
    const messageArray = ["message", "more msg for test", "final one"];
    const display = true;
    render(<ErrorMsg messageArray={messageArray} display={display} />);
    expect(screen.getByText(/message/i)).toBeInTheDocument();
    expect(screen.getByText(/more msg for test/i)).toBeInTheDocument();
    expect(screen.getByText(/final one/i)).toBeInTheDocument();
});
