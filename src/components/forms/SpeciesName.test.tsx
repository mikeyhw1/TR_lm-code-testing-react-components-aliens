import { render, screen, waitFor } from "@testing-library/react";
import SpeciesName from "./SpeciesName";

// test("renders SpeciesName label", () => {
//     const input = "";
//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {};
//     render(<SpeciesName input={input} handleChange={handleChange} />);
//     expect(screen.getByText(/Species Name:/i)).toBeInTheDocument();
// });

test("renders SpeciesName input", async () => {
    const input = "test value";
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {};
    render(<SpeciesName input={input} handleChange={handleChange} />);

    expect(screen.getByPlaceholderText("Species Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Species Name")).toHaveDisplayValue("test value");

    // FAIL:
    // expect(screen.getByPlaceholderText("Species Name")).toHaveValue("bbb");
    // expect(screen.getByPlaceholderText("Species Name")).toHaveDisplayValue("");
    // expect(screen.getByRole("textbox", { name: "speciesName" })).toHaveValue("");
    // expect(screen.getByRole("textbox", { name: "speciesName" })).toHaveDisplayValue("");

    // aria-label
});






// expect(await screen.findByText('Invalid User Name')).not.toBeVisible()
