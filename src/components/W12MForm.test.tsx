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

describe("test for SpeciesName", () => {
    it("test SpeciesName initial shows no error", async () => {
        render(<W12MForm />);
        const input_speciesName = screen.getByRole("textbox", { name: "Species Name:" });
        expect(input_speciesName).toBeInTheDocument();

        const errorMessage = screen.queryByTestId("errorMessage");
        expect(errorMessage).toBeNull();
    });

    it("test SpeciesName shows no error on correct input", async () => {
        render(<W12MForm />);
        const input_speciesName = screen.getByRole("textbox", { name: "Species Name:" });
        expect(input_speciesName).toBeInTheDocument();

        await user.type(input_speciesName, "some species name");
        expect(input_speciesName).toHaveValue("some species name");

        const errorMessage = screen.queryByTestId("errorMessage");
        expect(errorMessage).toBeNull();
    });

    it("test SpeciesName show errors on short input", async () => {
        render(<W12MForm />);
        const input_speciesName = screen.getByRole("textbox", { name: "Species Name:" });
        expect(input_speciesName).toBeInTheDocument();

        await user.type(input_speciesName, "aa");
        expect(input_speciesName).toHaveValue("aa");

        const errorMessage = screen.getByTestId("errorMessage");
        expect(errorMessage).toBeInTheDocument();
    });

    it("test SpeciesName show errors on long input", async () => {
        render(<W12MForm />);
        const input_speciesName = screen.getByRole("textbox", { name: "Species Name:" });
        expect(input_speciesName).toBeInTheDocument();

        await user.type(input_speciesName, "aaaaaa bbbbb ccccc ddddd eeeee");
        expect(input_speciesName).toHaveValue("aaaaaa bbbbb ccccc ddddd eeeee");

        const errorMessage = screen.getByTestId("errorMessage");
        expect(errorMessage).toBeInTheDocument();
    });

    it("test SpeciesName show errors on number", async () => {
        render(<W12MForm />);
        const input_speciesName = screen.getByRole("textbox", { name: "Species Name:" });
        expect(input_speciesName).toBeInTheDocument();

        await user.type(input_speciesName, "111111");
        expect(input_speciesName).toHaveValue("111111");

        const errorMessage = screen.getByTestId("errorMessage");
        expect(errorMessage).toBeInTheDocument();
    });

    it("test SpeciesName show errors on special characters", async () => {
        render(<W12MForm />);
        const input_speciesName = screen.getByRole("textbox", { name: "Species Name:" });
        expect(input_speciesName).toBeInTheDocument();

        await user.type(input_speciesName, "!!!!!");
        expect(input_speciesName).toHaveValue("!!!!!");

        const errorMessage = screen.getByTestId("errorMessage");
        expect(errorMessage).toBeInTheDocument();
    });

    it("test SpeciesName show errors on multiiple error", async () => {
        render(<W12MForm />);
        const input_speciesName = screen.getByRole("textbox", { name: "Species Name:" });
        expect(input_speciesName).toBeInTheDocument();

        await user.type(input_speciesName, "!!");
        expect(input_speciesName).toHaveValue("!!");

        const errorMessage = screen.getAllByTestId("errorMessage");
        expect(errorMessage.length).toBe(2);
    });
});

describe("test for PlanetName", () => {
    it("test PlanetName initial shows no error", async () => {
        render(<W12MForm />);
        const input_planetName = screen.getByRole("textbox", { name: "Planet Name:" });
        expect(input_planetName).toBeInTheDocument();

        const errorMessage = screen.queryByTestId("errorMessage");
        expect(errorMessage).toBeNull();
    });

    it("test PlanetName shows no error on correct input", async () => {
        render(<W12MForm />);
        const input_planetName = screen.getByRole("textbox", { name: "Planet Name:" });
        expect(input_planetName).toBeInTheDocument();

        await user.type(input_planetName, "some planet name");
        expect(input_planetName).toHaveValue("some planet name");

        const errorMessage = screen.queryByTestId("errorMessage");
        expect(errorMessage).toBeNull();
    });

    it("test PlanetName show errors on short input", async () => {
        render(<W12MForm />);
        const input_planetName = screen.getByRole("textbox", { name: "Planet Name:" });
        expect(input_planetName).toBeInTheDocument();

        await user.type(input_planetName, "1");
        expect(input_planetName).toHaveValue("1");

        const errorMessage = screen.getByTestId("errorMessage");
        expect(errorMessage).toBeInTheDocument();
    });

    it("test PlanetName show errors on long input", async () => {
        render(<W12MForm />);
        const input_planetName = screen.getByRole("textbox", { name: "Planet Name:" });
        expect(input_planetName).toBeInTheDocument();

        await user.type(
            input_planetName,
            "aaaaa bbbbb ccccc ddddd eeeee fffff ggggg hhhhh aaaaa bbbbb ccccc ddddd eeeee fffff ggggg hhhhh"
        );
        expect(input_planetName).toHaveValue(
            "aaaaa bbbbb ccccc ddddd eeeee fffff ggggg hhhhh aaaaa bbbbb ccccc ddddd eeeee fffff ggggg hhhhh"
        );

        const errorMessage = screen.getByTestId("errorMessage");
        expect(errorMessage).toBeInTheDocument();
    });

    it("test PlanetName show errors on special characters", async () => {
        render(<W12MForm />);
        const input_planetName = screen.getByRole("textbox", { name: "Planet Name:" });
        expect(input_planetName).toBeInTheDocument();

        await user.type(input_planetName, "!!!!!");
        expect(input_planetName).toHaveValue("!!!!!");

        const errorMessage = screen.getByTestId("errorMessage");
        expect(errorMessage).toBeInTheDocument();
    });

    it("test PlanetName show errors on multiiple error", async () => {
        render(<W12MForm />);
        const input_planetName = screen.getByRole("textbox", { name: "Planet Name:" });
        expect(input_planetName).toBeInTheDocument();

        await user.type(input_planetName, "!");
        expect(input_planetName).toHaveValue("!");

        const errorMessage = screen.getAllByTestId("errorMessage");
        expect(errorMessage.length).toBe(2);
    });
});

describe("test for NumberOfBeings", () => {
    it("test NumberOfBeings initial shows no error", async () => {
        render(<W12MForm />);
        const input_numberOfBeings = screen.getByRole("spinbutton", { name: "Number of beings:" });
        expect(input_numberOfBeings).toBeInTheDocument();

        const errorMessage = screen.queryByTestId("errorMessage");
        expect(errorMessage).toBeNull();
    });

    it("test NumberOfBeings shows no error on correct input", async () => {
        render(<W12MForm />);
        const input_numberOfBeings = screen.getByRole("spinbutton", { name: "Number of beings:" });
        expect(input_numberOfBeings).toBeInTheDocument();

        await user.type(input_numberOfBeings, "1000000000");
        expect(input_numberOfBeings).toHaveValue(1000000000);

        const errorMessage = screen.queryByTestId("errorMessage");
        expect(errorMessage).toBeNull();
    });

    it("test NumberOfBeings show errors on small number", async () => {
        render(<W12MForm />);
        const input_numberOfBeings = screen.getByRole("spinbutton", { name: "Number of beings:" });
        expect(input_numberOfBeings).toBeInTheDocument();

        await user.type(input_numberOfBeings, "1");
        expect(input_numberOfBeings).toHaveValue(1);

        const errorMessage = screen.getByTestId("errorMessage");
        expect(errorMessage).toBeInTheDocument();
    });

    it("test NumberOfBeings show errors on 0", async () => {
        render(<W12MForm />);
        const input_numberOfBeings = screen.getByRole("spinbutton", { name: "Number of beings:" });
        expect(input_numberOfBeings).toBeInTheDocument();

        await user.type(input_numberOfBeings, "0");
        expect(input_numberOfBeings).toHaveValue(0);

        const errorMessage = screen.getAllByTestId("errorMessage");
        expect(errorMessage.length).toBe(2);
    });
});

describe("test for QuizAnswer", () => {
    it("test QuizAnswer initial shows no error", async () => {
        render(<W12MForm />);
        const input_quizAnswer = screen.getByRole("combobox", { name: "What is 2+2?" });
        expect(input_quizAnswer).toBeInTheDocument();

        const errorMessage = screen.queryByTestId("errorMessage");
        expect(errorMessage).toBeNull();
    });

    it("test QuizAnswer shows no error on correct input", async () => {
        render(<W12MForm />);
        const input_quizAnswer = screen.getByRole("combobox", { name: "What is 2+2?" });
        expect(input_quizAnswer).toBeInTheDocument();

        await user.selectOptions(input_quizAnswer, "4");
        expect(input_quizAnswer).toHaveValue("4");

        const errorMessage = screen.queryByTestId("errorMessage");
        expect(errorMessage).toBeNull();
    });

    it("test QuizAnswer show errors on wrong answer 1", async () => {
        render(<W12MForm />);
        const input_quizAnswer = screen.getByRole("combobox", { name: "What is 2+2?" });
        expect(input_quizAnswer).toBeInTheDocument();

        await user.selectOptions(input_quizAnswer, "Not 4");
        expect(input_quizAnswer).toHaveValue("Not 4");

        const errorMessage = screen.getByTestId("errorMessage");
        expect(errorMessage).toBeInTheDocument();
    });

    it("test QuizAnswer show errors on wrong answer 2", async () => {
        render(<W12MForm />);
        const input_quizAnswer = screen.getByRole("combobox", { name: "What is 2+2?" });
        expect(input_quizAnswer).toBeInTheDocument();

        await user.selectOptions(input_quizAnswer, "Alien");
        expect(input_quizAnswer).toHaveValue("Alien");

        const errorMessage = screen.getByTestId("errorMessage");
        expect(errorMessage).toBeInTheDocument();
    });

    it("test QuizAnswer show errors on wrong answer 3", async () => {
        render(<W12MForm />);
        const input_quizAnswer = screen.getByRole("combobox", { name: "What is 2+2?" });
        expect(input_quizAnswer).toBeInTheDocument();

        await user.selectOptions(input_quizAnswer, "666");
        expect(input_quizAnswer).toHaveValue("666");

        const errorMessage = screen.getByTestId("errorMessage");
        expect(errorMessage).toBeInTheDocument();
    });
});

describe("test for ReasonForSparing", () => {
    it("test ReasonForSparing initial shows no error", async () => {
        render(<W12MForm />);
        const input_reasonForSparing = screen.getByRole("textbox", { name: "Reason for sparing:" });
        expect(input_reasonForSparing).toBeInTheDocument();

        const errorMessage = screen.queryByTestId("errorMessage");
        expect(errorMessage).toBeNull();
    });

    it("test ReasonForSparing shows no error on correct input", async () => {
        render(<W12MForm />);
        const input_reasonForSparing = screen.getByRole("textbox", { name: "Reason for sparing:" });
        expect(input_reasonForSparing).toBeInTheDocument();

        await user.type(input_reasonForSparing, "some reason more than seventeen characters");
        expect(input_reasonForSparing).toHaveValue("some reason more than seventeen characters");

        const errorMessage = screen.queryByTestId("errorMessage");
        expect(errorMessage).toBeNull();
    });

    it("test ReasonForSparing show errors on short input", async () => {
        render(<W12MForm />);
        const input_reasonForSparing = screen.getByRole("textbox", { name: "Reason for sparing:" });
        expect(input_reasonForSparing).toBeInTheDocument();

        await user.type(input_reasonForSparing, "short reason");
        expect(input_reasonForSparing).toHaveValue("short reason");

        const errorMessage = screen.getByTestId("errorMessage");
        expect(errorMessage).toBeInTheDocument();
    });

    it("test ReasonForSparing show errors on long input", async () => {
        render(<W12MForm />);
        const input_reasonForSparing = screen.getByRole("textbox", { name: "Reason for sparing:" });
        expect(input_reasonForSparing).toBeInTheDocument();

        await user.type(
            input_reasonForSparing,
            "1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890"
        );
        expect(input_reasonForSparing).toHaveValue(
            "1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890"
        );

        const errorMessage = screen.getByTestId("errorMessage");
        expect(errorMessage).toBeInTheDocument();
    });
});

test("test button submit success", async () => {
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

    await user.type(input_speciesName, "Greedy Human");
    await user.type(input_planetName, "Moon");
    await user.type(input_numberOfBeings, "5000000000");
    await user.selectOptions(input_quizAnswer, "4");
    await user.type(input_reasonForSparing, "I am your father, may the force be with you!");
    await user.click(submitButton);

    const submitted_speciesName = screen.getByTestId("submitted_speciesName");
    expect(submitted_speciesName).toBeInTheDocument();
    expect(submitted_speciesName).toHaveTextContent("Greedy Human");

    const submitted_planetName = screen.getByTestId("submitted_planetName");
    expect(submitted_planetName).toBeInTheDocument();
    expect(submitted_planetName).toHaveTextContent("Moon");

    const submitted_numberOfBeings = screen.getByTestId("submitted_numberOfBeings");
    expect(submitted_numberOfBeings).toBeInTheDocument();
    expect(submitted_numberOfBeings).toHaveTextContent("5000000000");

    const submitted_quizAnswer = screen.getByTestId("submitted_quizAnswer");
    expect(submitted_quizAnswer).toBeInTheDocument();
    expect(submitted_quizAnswer).toHaveTextContent("4");

    const submitted_reasonForSparing = screen.getByTestId("submitted_reasonForSparing");
    expect(submitted_reasonForSparing).toBeInTheDocument();
    expect(submitted_reasonForSparing).toHaveTextContent("I am your father, may the force be with you!");
});
