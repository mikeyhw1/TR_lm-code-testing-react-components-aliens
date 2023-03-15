import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfBeings from "./NumberOfBeings";

test("renders NumberOfBeings label", () => {
    const input = 0;
    const handleChange = () => {};
    render(<NumberOfBeings input={input} handleChange={handleChange} />);
    expect(screen.getByText(/Number of beings:/i)).toBeInTheDocument();
});

test("renders NumberOfBeings prop input", () => {
    const input = 666;
    const handleChange = () => {};
    render(<NumberOfBeings input={input} handleChange={handleChange} />);

    expect(screen.getByPlaceholderText("Number of beings")).toBeInTheDocument();
    expect(screen.getByRole("spinbutton", { name: "Number of beings:" })).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Number of beings")).toHaveValue(666);
});

test("NumberOfBeings input handleChange", async () => {
    const input = 0;
    const mock = jest.fn();
    render(<NumberOfBeings input={input} handleChange={mock} />);

    const element = screen.getByRole("spinbutton");
    expect(element).toBeInTheDocument();

    await userEvent.type(element, "666");
    expect(mock).toHaveBeenCalledTimes(3);
});
