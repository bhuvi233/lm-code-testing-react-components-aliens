import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import W12MForm from "./W12MForm";

afterEach(() => {
    cleanup();
    jest.clearAllMocks();
});

test("renders form element", () => {
    // we can hold onto the object returned from render()
    // this object has a container property that we can destructure and inspect
    const { container } = render(<W12MForm />);

    // the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
    // for example, the firstChild of our container should be our form element
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toHaveClass("w12MForm");
});

describe("W12MForm Tests", () => {
    test("the form should render all the fields", () => {
        render(<W12MForm />);
        expect(
            screen.getByRole("textbox", { name: /Species Name/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("textbox", { name: /Planet Name/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("textbox", { name: /Number of Beings/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("textbox", { name: /Reason for Sparing/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("option", { name: /Not 4/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /Submit Form/i })
        ).toBeInTheDocument();
    });

    test("submit button calls handler function", async () => {
        const handleSubmitForm = jest.fn();

        render(<W12MForm />);
        const submitButton = screen.getByRole("button", {
            name: /Submit Form/i,
        });
        await userEvent.click(submitButton);
        expect(await waitFor(() => handleSubmitForm)).toHaveBeenCalledTimes(1);
    });
});
