import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PlanetName from "./PlanetName";

test("renders PlanetName label", () => {
    const input = "";
    const handleChange = () => {};
    render(<PlanetName input={input} handleChange={handleChange} />);
    expect(screen.getByText(/Planet Name:/i)).toBeInTheDocument();
});

test("renders PlanetName prop input", () => {
    const input = "test value";
    const handleChange = () => {};
    render(<PlanetName input={input} handleChange={handleChange} />);

    expect(screen.getByPlaceholderText("Planet Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Planet Name")).toHaveValue("test value");
});

test("PlanetName input handleChange", async () => {
    const input = "";
    const mock = jest.fn();
    render(<PlanetName input={input} handleChange={mock} />);

    const element = screen.getByRole("textbox");
    expect(element).toBeInTheDocument();

    await userEvent.type(element, "earth");
    expect(mock).toHaveBeenCalledTimes(5);
});
