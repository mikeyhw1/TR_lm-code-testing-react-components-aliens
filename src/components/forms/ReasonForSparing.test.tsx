import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReasonForSparing from "./ReasonForSparing";

test("renders ReasonForSparing label", () => {
    const input = "";
    const handleChange = () => {};
    render(<ReasonForSparing input={input} handleChange={handleChange} />);
    expect(screen.getByText(/Reason for sparing:/i)).toBeInTheDocument();
});

test("renders ReasonForSparing prop input", () => {
    const input = "test value";
    const handleChange = () => {};
    render(<ReasonForSparing input={input} handleChange={handleChange} />);

    expect(screen.getByRole("textbox", { name: "Reason for sparing:" })).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Reason for sparing")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Reason for sparing")).toHaveValue("test value");
});

test("ReasonForSparing input handleChange", async () => {
    const input = "";
    const mock = jest.fn();
    render(<ReasonForSparing input={input} handleChange={mock} />);

    const element = screen.getByRole("textbox");
    expect(element).toBeInTheDocument();

    await userEvent.type(element, "Mike");
    expect(mock).toHaveBeenCalledTimes(4);
});
