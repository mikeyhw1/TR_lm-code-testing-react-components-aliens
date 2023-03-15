import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import W12MForm from "./W12MForm";

test("renders form element", () => {
    // we can hold onto the object returned from render()
    // this object has a container property that we can destructure and inspect
    const { container } = render(<W12MForm />);

    // the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
    // for example, the firstChild of our container should be our form element
    expect(container.firstChild).toHaveClass("w12MForm");
});

test("render submit button", async () => {
    render(<W12MForm />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveValue("Submit Request");
});

test("test text input and button submit success", async () => {
    render(<W12MForm />);

    const input_speciesName = screen.getByRole("textbox", { name: "Species Name:" });
    expect(input_speciesName).toBeInTheDocument();

    const input_planetName = screen.getByRole("textbox", { name: "Planet Name:" });
    expect(input_planetName).toBeInTheDocument();

    const input_numberOfBeings = screen.getByRole("spinbutton", { name: "Number of beings:" });
    expect(input_numberOfBeings).toBeInTheDocument();

    const input_quizAnswer = screen.getByRole("combobox", { name: "What is 2+2?" });
    expect(input_quizAnswer).toBeInTheDocument();

    const input_reasonForSparing = screen.getByRole("textbox", { name: "Reason for sparing:" });
    expect(input_reasonForSparing).toBeInTheDocument();

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();

    await user.type(input_speciesName, "Aliens");
    await user.type(input_planetName, "Moon");
    await user.type(input_numberOfBeings, "666");
    // await user.type(input_quizAnswer, "Aliens");
    await user.selectOptions(input_quizAnswer, "4");
    await user.type(input_reasonForSparing, "I am your father");
    await user.click(submitButton);

    const submitted_speciesName = screen.getByTestId("submitted_speciesName");
    expect(submitted_speciesName).toBeInTheDocument();
    expect(submitted_speciesName).toHaveTextContent("Aliens");

    const submitted_planetName = screen.getByTestId("submitted_planetName");
    expect(submitted_planetName).toBeInTheDocument();
    expect(submitted_planetName).toHaveTextContent("Moon");

    const submitted_numberOfBeings = screen.getByTestId("submitted_numberOfBeings");
    expect(submitted_numberOfBeings).toBeInTheDocument();
    expect(submitted_numberOfBeings).toHaveTextContent("666");

    const submitted_quizAnswer = screen.getByTestId("submitted_quizAnswer");
    expect(submitted_quizAnswer).toBeInTheDocument();
    expect(submitted_quizAnswer).toHaveTextContent("4");

    const submitted_reasonForSparing = screen.getByTestId("submitted_reasonForSparing");
    expect(submitted_reasonForSparing).toBeInTheDocument();
    expect(submitted_reasonForSparing).toHaveTextContent("I am your father");
});
