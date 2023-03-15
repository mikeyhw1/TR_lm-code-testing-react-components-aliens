import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SpeciesName from "./SpeciesName";

test("renders SpeciesName label", () => {
    const input = "";
    const handleChange = () => {};
    render(<SpeciesName input={input} handleChange={handleChange} />);
    expect(screen.getByText(/Species Name:/i)).toBeInTheDocument();
});

test("renders SpeciesName prop input", () => {
    const input = "test value";
    const handleChange = () => {};
    render(<SpeciesName input={input} handleChange={handleChange} />);

    expect(screen.getByPlaceholderText("Species Name")).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Species Name:" })).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Species Name")).toHaveValue("test value");
});

test("SpeciesName input handleChange", async () => {
    const input = "";
    const mock = jest.fn();
    render(<SpeciesName input={input} handleChange={mock} />);

    const element = screen.getByRole("textbox");
    expect(element).toBeInTheDocument();

    await userEvent.type(element, "Mike");
    expect(mock).toHaveBeenCalledTimes(4);
});
