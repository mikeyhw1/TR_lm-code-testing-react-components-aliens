import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import QuizAnswer from "./QuizAnswer";

test("renders QuizAnswer label", () => {
    const input = "";
    const handleChange = () => {};
    render(<QuizAnswer input={input} handleChange={handleChange} />);
    expect(screen.getByText(/What is 2+2?/i)).toBeInTheDocument();
});

test("renders QuizAnswer prop input", () => {
    const input = "Not 4";
    const handleChange = () => {};
    render(<QuizAnswer input={input} handleChange={handleChange} />);

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toHaveValue("Not 4");
});

// test("QuizAnswer input handleChange", async () => {
//     const input = "";
//     const mock = jest.fn();
//     render(<QuizAnswer input={input} handleChange={mock} />);

//     const element = screen.getByRole("combobox");
//     expect(element).toBeInTheDocument();
//     expect(element).toBeDefined();
//     expect(element).not.toBeNull();
//     expect(mock).toHaveBeenCalledTimes(0);

//     // userEvent.selectOptions(element, "666");
//     // expect(mock).toHaveBeenCalledTimes(1);
//     // expect(mock).toHaveBeenCalledWith({ label: "666", value: "666" });
// });
