import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { WhatIsInput } from "./W12MFormWhatIsInput";

afterEach(() => {
    cleanup();
    jest.clearAllMocks();
});

describe("Species Name Tests", () => {
    const onChange = jest.fn();
    const WhatIsInputProps = {
        whatIs: "4",
        onChangeWhatIs: onChange,
    };

    test("Select Option label should be present", () => {
        render(<WhatIsInput {...WhatIsInputProps} />);
        const WhatIsInputSelect = screen.getByText(/What is 2 \+ 2 :/i);
        expect(WhatIsInputSelect).toBeInTheDocument();
    });

    test("should display the correct number of options", () => {
        render(<WhatIsInput {...WhatIsInputProps} />);
        const WhatIsInputOptions = screen.getAllByRole("option");
        expect(WhatIsInputOptions.length).toBe(3);
    });

    test("check whether props value is received correctly", () => {
        render(<WhatIsInput {...WhatIsInputProps} />);
        const whatIsOutputOption = screen.getByRole("option", {
            name: /^4$/i,
        }) as HTMLOptionElement;
        expect(whatIsOutputOption.selected).toBe(true);
    });

    test("onChange is triggered on selecting an option", async () => {
        render(<WhatIsInput {...WhatIsInputProps} />);

        await userEvent.selectOptions(
            screen.getByTestId("select") as HTMLSelectElement,
            screen.getByTestId("option-not-4") as HTMLOptionElement
        );
        expect(onChange).toHaveBeenCalledTimes(1);
    });

    test("onChange should pass through correct values", async () => {
        const WhatIsInputProps = {
            onChangeWhatIs: onChange,
        };
        render(<WhatIsInput {...WhatIsInputProps} />);
        const WhatIsInputSelect = screen.getByTestId(
            "select"
        ) as HTMLSelectElement;
        await userEvent.selectOptions(WhatIsInputSelect, "Not 4");

        expect(screen.getByTestId("select") as HTMLSelectElement).toHaveValue(
            "Not 4"
        );
        expect(
            (screen.getByTestId("default-option") as HTMLOptionElement).selected
        ).toBe(false);
        expect(
            (screen.getByTestId("option-4") as HTMLOptionElement).selected
        ).toBe(false);
        expect(
            (screen.getByTestId("option-not-4") as HTMLOptionElement).selected
        ).toBe(true);
    });

    test("no error message for valid input", async () => {
        const WhatIsInputProps = {
            onChangeWhatIs: onChange,
        };
        render(<WhatIsInput {...WhatIsInputProps} />);
        const WhatIsInputSelect = screen.getByTestId(
            "select"
        ) as HTMLSelectElement;
        await userEvent.selectOptions(WhatIsInputSelect, "4");
        expect(screen.getByTestId("select") as HTMLSelectElement).toHaveValue(
            "4"
        );
        expect(screen.queryByText("Error: Try Again")).not.toBeInTheDocument();
    });

    test("error message should appear for invalid input", async () => {
        const WhatIsInputProps = {
            onChangeWhatIs: onChange,
        };
        render(<WhatIsInput {...WhatIsInputProps} />);
        const WhatIsInputSelect = screen.getByTestId(
            "select"
        ) as HTMLSelectElement;
        await userEvent.selectOptions(WhatIsInputSelect, "Not 4");
        expect(screen.getByTestId("select") as HTMLSelectElement).toHaveValue(
            "Not 4"
        );
        expect(screen.queryByText("Error: Try Again")).toBeInTheDocument();
    });
});
