import { render, screen, waitFor } from "@testing-library/react";
import SpeciesName from "./SpeciesName";

// test("renders SpeciesName label", () => {
//     const input = "";
//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {};
//     render(<SpeciesName input={input} handleChange={handleChange} />);
//     expect(screen.getByText(/Species Name:/i)).toBeInTheDocument();
// });

test("renders SpeciesName input", async () => {
    const input = "bbb";
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {};
    render(<SpeciesName input={input} handleChange={handleChange} />);

    expect(screen.getByPlaceholderText("Species Name")).toBeInTheDocument();

    // aria-label

    // expect(screen.getByRole("textbox", { name: "speciesName" })).toBeInTheDocument();
    // NOTE: aria-label

    expect(screen.getByLabelText("speciesName")).toBeInTheDocument();

    // FAIL:
    // expect(screen.getByPlaceholderText("Species Name")).toHaveValue("bbb");
    // expect(screen.getByPlaceholderText("Species Name")).toHaveDisplayValue("");
    // expect(screen.getByRole("textbox", { name: "speciesName" })).toHaveValue("");
    // expect(screen.getByRole("textbox", { name: "speciesName" })).toHaveDisplayValue("");

    // expect(screen.getByRole("textbox", { name: "speciesName" })).toBeInTheDocument();

    // const aaa = screen.getAllByPlaceholderText("Species Name");

    // await expect(aaa).toHaveDisplayValue("aaa");

    // expect(aaa).toHaveDisplayValue("aaa");
    // .find((i) => i.nodeValue === "aaa");
    // expect(aaa).toHaveDisplayValue("");
    // await waitFor(() => expect(inputField).toHaveDisplayValue('John Doe')));

    // expect(screen.getByLabelText("speciesName")).toHaveValue("");

    // const aaa = screen.getByRole("textbox", { name: "speciesName" });
    // expect(screen.getByRole('input', { name: 'speciesName' }).value).toBe('test');

    // expect(screen.getByLabelText("speciesName").value)
});

// expect(await screen.findByText('Invalid User Name')).not.toBeVisible()
