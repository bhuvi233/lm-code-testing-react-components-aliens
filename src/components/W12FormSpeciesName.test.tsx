import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SpeciesNameInput, SpeciesNameInputProps } from "./W12MFormSpeciesName";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

describe("Species Name Tests", () => {
    const onChange = jest.fn();
    const speciesNameProps: SpeciesNameInputProps = {
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
        render(<SpeciesNameInput {...speciesNameProps} />);
        const speciesNameTextbox =
            screen.getByPlaceholderText(/Enter Species Name/i);
        await userEvent.type(speciesNameTextbox, "man");
        await waitFor(() => {
            expect(speciesNameTextbox).toHaveValue("man");
        });

        //expect(await waitFor(() => speciesNameTextbox)).toHaveValue("man");
        //await waitFor(() => {
        //expect(screen.getByText("man")).toBeTruthy();
        //});
    });

    test("no error message for valid input", async () => {
        render(<SpeciesNameInput {...speciesNameProps} />);
        const speciesNameTextbox: HTMLInputElement = screen.getByLabelText(
            /Species Name/i
        ) as HTMLInputElement;
        await userEvent.type(speciesNameTextbox, "birds");
        expect(
            screen.queryByText(
                "Error: Only alphabets [a-z] of size [3-23] characters"
            )
        ).not.toBeInTheDocument();
    });

    test("error message should appear for invalid input", async () => {
        render(<SpeciesNameInput {...speciesNameProps} />);
        const speciesNameTextbox: HTMLInputElement = screen.getByLabelText(
            /Species Name/i
        ) as HTMLInputElement;
        await userEvent.type(speciesNameTextbox, "b");
        await waitFor(() => {
            expect(
                screen.getByText(
                    "Error: Only alphabets [a-z] of size [3-23] characters"
                )
            ).toBeInTheDocument();
        });
    });
});
