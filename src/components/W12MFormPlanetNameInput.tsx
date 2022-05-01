import { useState } from "react";

interface PlanetNameInputProps {
    planetName?: string;
    onChangePlanetName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PlanetNameInput: React.FC<PlanetNameInputProps> = ({
    planetName,
    onChangePlanetName,
}) => {
    const [errMessage, setErrMessage] = useState<string | undefined>("");

    const validateText: (value: string) => string | undefined = (value) => {
        const reg = /^[a-zA-Z0-9]{2,29}$/i;
        if (!reg.test(value))
            return "Error: Only alphanumeric [a-z][0-9] of size [2-29] characters";
    };
    return (
        <>
            <label htmlFor="planetName">Planet Name: </label>
            <input
                id="planetName"
                type="text"
                value={planetName}
                onChange={(e) => {
                    const errorMessage = validateText(e.target.value);
                    setErrMessage(errorMessage);
                    onChangePlanetName(e);
                }}
                required
            />
            <div>{errMessage}</div>
        </>
    );
};
