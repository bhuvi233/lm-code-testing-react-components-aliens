import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NumberOfBeingsInput } from "./W12MFormNumberOfBeings";

afterEach(() => {
    cleanup();
    jest.clearAllMocks();
});

describe("Species Name Tests", () => {
    const onChange = jest.fn();
    const NumberOfBeingsInputProps = {
        numberOfBeings: "1000000001",
        onChangeNumberofBeings: onChange,
    };

    test("Species Name label should be present", () => {
        render(<NumberOfBeingsInput {...NumberOfBeingsInputProps} />);
        const numberOfBeingsTextbox =
            screen.getByLabelText(/Number of beings/i);
        expect(numberOfBeingsTextbox).toBeInTheDocument();
    });

    test("check whether props value is received correctly", () => {
        render(<NumberOfBeingsInput {...NumberOfBeingsInputProps} />);
        const numberOfBeingsTextbox = screen.getByDisplayValue("1000000001");
        expect(numberOfBeingsTextbox).toBeInTheDocument();
    });

    test("onChange should pass through correct values", async () => {
        render(<NumberOfBeingsInput {...NumberOfBeingsInputProps} />);
        const numberOfBeingsTextbox = screen.getByLabelText(
            /Number of beings/i
        ) as HTMLInputElement;
        await userEvent.type(numberOfBeingsTextbox, "1000000001");
        expect(onChange).toHaveBeenCalledTimes(10);
    });

    test("input field passes onChange the correct parameters", async () => {
        const NumberOfBeingsInputProps = {
            onChangeNumberofBeings: onChange,
        };
        render(<NumberOfBeingsInput {...NumberOfBeingsInputProps} />);
        const numberOfBeingsTextbox: HTMLInputElement = screen.getByLabelText(
            /Number of beings/i
        ) as HTMLInputElement;
        await userEvent.type(numberOfBeingsTextbox, "234545");
        expect(numberOfBeingsTextbox.value).toBe("234545");
    });

    test("no error message for valid input", async () => {
        const NumberOfBeingsInputProps = {
            onChangeNumberofBeings: onChange,
        };
        render(<NumberOfBeingsInput {...NumberOfBeingsInputProps} />);
        const numberOfBeingsTextbox =
            screen.getByLabelText(/Number of beings/i);
        await userEvent.type(numberOfBeingsTextbox, "1000000005");
        expect(
            screen.queryByText("Error: Miinimum of 1000000000")
        ).not.toBeInTheDocument();
    });

    test("error message should appear for invalid input", async () => {
        const NumberOfBeingsInputProps = {
            onChangeNumberofBeings: onChange,
        };
        render(<NumberOfBeingsInput {...NumberOfBeingsInputProps} />);
        const numberOfBeingsTextbox =
            screen.getByLabelText(/Number of beings/i);
        await userEvent.type(numberOfBeingsTextbox, "452546");
        expect(
            screen.queryByText("Error: Miinimum of 1000000000")
        ).toBeInTheDocument();
    });
});
