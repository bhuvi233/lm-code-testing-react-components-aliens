import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SpeciesNameInput } from "./W12MFormSpeciesName";
// import "@testing-library/jest-dom/extend-expect";
// import "@testing-library/jest-dom";

afterEach(() => {
    cleanup();
    jest.clearAllMocks();
});

describe("Species Name Tests", () => {
    const onChange = jest.fn();
    const speciesNameProps = {
        speciesName: "humans",
        onChangeSpeciesName: onChange,
    };

    test("Species Name label should be present", () => {
        render(<SpeciesNameInput {...speciesNameProps} />);
        const speciesNameLabel = screen.getByLabelText(/Species Name/i);
        expect(speciesNameLabel).toBeInTheDocument();
    });

    test("check whether props value is received correctly", () => {
        render(<SpeciesNameInput {...speciesNameProps} />);
        const speciesNameValues = screen.getByDisplayValue("humans");
        expect(speciesNameValues).toBeInTheDocument();
    });

    test("onChange should pass through correct values", async () => {
        render(<SpeciesNameInput {...speciesNameProps} />);
        const speciesNameTextbox = screen.getByLabelText(
            /Species Name/i
        ) as HTMLInputElement;
        await userEvent.type(speciesNameTextbox, "human");
        expect(onChange).toHaveBeenCalledTimes(5);
    });

    test("input field passes onChange the correct parameters", async () => {
        const mockOnChangeSpeciesName = jest.fn();
        const speciesNameProps = {
            onChangeSpeciesName: mockOnChangeSpeciesName,
        };
        render(<SpeciesNameInput {...speciesNameProps} />);
        const speciesNameInput: HTMLInputElement = screen.getByPlaceholderText(
            /Enter a species name/i
        ) as HTMLInputElement;
        await userEvent.type(speciesNameInput, "man");
        expect(speciesNameInput.value).toBe("man");
    });

    test("no error message for valid input", async () => {
        render(<SpeciesNameInput {...speciesNameProps} />);
        const speciesNameTextbox = screen.getByLabelText(/Species Name/i);
        await userEvent.type(speciesNameTextbox, "birds");
        expect(
            screen.queryByText(
                "Error: Only alphabets [a-z] of size [3-23] characters"
            )
        ).not.toBeInTheDocument();
    });

    test("error message should appear for invalid input", async () => {
        const mockOnChangeSpeciesName = jest.fn();
        const speciesNameProps = {
            onChangeSpeciesName: mockOnChangeSpeciesName,
        };
        render(<SpeciesNameInput {...speciesNameProps} />);
        const speciesNameInput =
            screen.getByPlaceholderText(/Enter a species name/i);
        await userEvent.type(speciesNameInput, "d");
        expect(
            screen.queryByText(
                "Error: Only alphabets [a-z] of size [3-23] characters"
            )
        ).toBeInTheDocument();
    });
});
