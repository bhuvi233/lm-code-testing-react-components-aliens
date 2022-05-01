import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PlanetNameInput } from "./W12MFormPlanetNameInput";

afterEach(() => {
    cleanup();
    jest.clearAllMocks();
});

describe("Planet Name Tests", () => {
    const onChange = jest.fn();
    const planetNameProps = {
        planetName: "earth",
        onChangePlanetName: onChange,
    };

    test("Planet Name label should be present", () => {
        render(<PlanetNameInput {...planetNameProps} />);
        const planetNameLabel = screen.getByLabelText(/Planet Name/i);
        expect(planetNameLabel).toBeInTheDocument();
    });

    test("check whether props value is received correctly", () => {
        render(<PlanetNameInput {...planetNameProps} />);
        const planetNameLabel = screen.getByDisplayValue("earth");
        expect(planetNameLabel).toBeInTheDocument();
    });

    test("onChange should pass through correct values", async () => {
        render(<PlanetNameInput {...planetNameProps} />);
        const planetNameTextbox = screen.getByLabelText(/Planet Name/i);
        await userEvent.type(planetNameTextbox, "earth");
        expect(onChange).toHaveBeenCalledTimes(5);
    });

    test("input field passes onChange the correct parameters", async () => {
        const planetNameProps = {
            onChangePlanetName: onChange,
        };
        render(<PlanetNameInput {...planetNameProps} />);
        const planetNameTextbox: HTMLInputElement = screen.getByLabelText(
            /Planet Name/i
        ) as HTMLInputElement;
        await userEvent.type(planetNameTextbox, "mars");
        expect(planetNameTextbox.value).toBe("mars");
    });

    test("no error message for valid input", async () => {
        render(<PlanetNameInput {...planetNameProps} />);
        const planetNameTextbox = screen.getByLabelText(/Planet Name/i);
        await userEvent.type(planetNameTextbox, "birds");
        expect(
            screen.queryByText(
                "Error: Only alphanumeric [a-z][0-9] of size [2-29] characters"
            )
        ).not.toBeInTheDocument();
    });

    test("error message should appear for invalid input", async () => {
        const planetNameProps = {
            onChangePlanetName: onChange,
        };
        render(<PlanetNameInput {...planetNameProps} />);
        const planetNameTextbox = screen.getByLabelText(/Planet Name/i);
        await userEvent.type(planetNameTextbox, "d");
        expect(
            screen.queryByText(
                "Error: Only alphanumeric [a-z][0-9] of size [2-29] characters"
            )
        ).toBeInTheDocument();
    });
});
