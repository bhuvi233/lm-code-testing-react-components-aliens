import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import W12MForm from "./W12MForm";
// import { configure } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// configure({ adapter: new Adapter() });

afterEach(() => {
    cleanup();
    jest.clearAllMocks();
});

test("renders form element", () => {
    const mockOnSubmit = jest.fn();
    // we can hold onto the object returned from render()
    // this object has a container property that we can destructure and inspect
    const { container } = render(<W12MForm onSubmit={mockOnSubmit} />);

    // the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
    // for example, the firstChild of our container should be our form element
    expect(container.firstChild).toHaveClass("w12MForm");
});

describe("W12MForm Tests", () => {
    test("the form should render all the fields", () => {
        const mockOnSubmit = jest.fn();
        render(<W12MForm onSubmit={mockOnSubmit} />);
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
        const mockOnSubmit = jest.fn();

        render(<W12MForm onSubmit={mockOnSubmit} />);
        const submitButton = screen.getByRole("button", {
            name: /Submit Form/i,
        });
        await userEvent.click(submitButton);
        expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    });
});
