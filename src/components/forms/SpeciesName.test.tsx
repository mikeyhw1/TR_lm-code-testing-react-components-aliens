import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SpeciesName from "./SpeciesName";

// afterEach(() => {
//     jest.clearAllMocks();
// });

// test("renders SpeciesName label", () => {
//     const input = "";
//     const handleChange = () => {};
//     render(<SpeciesName input={input} handleChange={handleChange} />);
//     expect(screen.getByText(/Species Name:/i)).toBeInTheDocument();
// });

// test("renders SpeciesName input", async () => {
//     const input = "test value";
//     const handleChange = () => {};
//     render(<SpeciesName input={input} handleChange={handleChange} />);

//     expect(screen.getByPlaceholderText("Species Name")).toBeInTheDocument();
//     expect(screen.getByPlaceholderText("Species Name")).toHaveValue("test value");

//     // FAIL:
//     // expect(screen.getByPlaceholderText("Species Name")).toHaveValue("bbb");
//     // expect(screen.getByPlaceholderText("Species Name")).toHaveDisplayValue("");
//     // expect(screen.getByRole("textbox", { name: "speciesName" })).toHaveValue("");
//     // expect(screen.getByRole("textbox", { name: "speciesName" })).toHaveDisplayValue("");

//     // aria-label
// });

// expect(await screen.findByText('Invalid User Name')).not.toBeVisible()

// "@types/jest": "^29.2.5",
// test("text type in", async () => {
//     const input = "";
//     // const mockHandleChange = jest.fn();
//     const handleChange = () => {};
//     render(<SpeciesName input={input} handleChange={handleChange} />);

//     const speciesName = screen.getByRole("textbox");

//     expect(speciesName).toBeInTheDocument();
//     // expect(speciesName).toHaveDisplayValue("init");

//     await userEvent.type(speciesName, "Mike");
//     // expect(mockHandleChange).toHaveBeenCalledTimes(4);
//     // expect(speciesName).toHaveDisplayValue("init");
//     // expect(speciesName).toHaveDisplayValue("Mike");

//     // await waitFor(() => expect(speciesName).toHaveValue("init"));
//     await waitFor(() => expect(speciesName).toHaveValue("Mike"));

//     // // userEvent.type(screen.getByPlaceholderText("Species Name"), "Super Mike");
//     // await userEvent.type(screen.getByRole("textbox"), "Super");
//     // expect(mockHandleChange).toHaveBeenCalled();
//     // expect(mockHandleChange).toHaveBeenCalledTimes(5);

//     // // expect(screen.getByPlaceholderText("Species Name")).toHaveDisplayValue("aa");
//     // // expect(screen.getByRole("textbox")).toHaveDisplayValue("aa");
//     // expect(screen.getByRole("textbox")).toHaveValue("aa");

//     // expect(screen.getByPlaceholderText("Species Name")).toHaveDisplayValue("Super Mike");
//     // expect(screen.getByRole("textbox")).toHaveDisplayValue("Super Mike");
//     // expect(handleChange).toHaveBeenCalled();

//     // const input = "test value";
//     // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {};
//     // render(<SpeciesName input={input} handleChange={handleChange} />);

//     // expect(screen.getByPlaceholderText("Species Name")).toBeInTheDocument();
//     // expect(screen.getByPlaceholderText("Species Name")).toHaveDisplayValue("test value");
// });

// test("test input onChange", async () => {
//     const data = {
//         input: "aa",
//         handleChange: jest.fn(),
//     };
//     render(<SpeciesName {...data} />);
//     const speciesNameInput = screen.getByRole("textbox");
//     const onChangeProp = data.handleChange;
//     speciesNameInput.onchange = onChangeProp;
//     await userEvent.type(speciesNameInput, "Humans");
//     expect(onChangeProp).toHaveBeenCalled();

//     expect(onChangeProp).toHaveBeenCalledTimes(6);

//     expect(speciesNameInput).toHaveValue("Humans");
// });

test("type into an input field", async () => {
    // render(<input defaultValue="Hello," />);
    const mock = jest.fn();
    render(
        <input
            // defaultValue="Hello,"
            // className="form__input"
            // type="text"
            // name="speciesName"
            // value={"Hello,"}
            value={""}
            // placeholder={"Species Name"}
            // onChange={() => {}}
            onChange={mock}
            // id="speciesName"
            // aria-label="speciesName"
        />
    );

    // render(<SpeciesName input={"Hello,"} handleChange={() => {}} />);
    // render(<SpeciesName input={"Hello,"} handleChange={jest.fn()} />);
    const input = screen.getByRole("textbox");

    // await waitFor(async () => {
    // await userEvent.type(input, " World!");
    await userEvent.type(input, "mike");

    // });

    await waitFor(() => {
        // expect(input).toHaveValue("Hello, World!");
        expect(mock).toHaveBeenCalledWith("mike");

        // expect(screen.getByLabelText("Name")).toHaveValue("hello");
    });
    // screen.debug();
});
