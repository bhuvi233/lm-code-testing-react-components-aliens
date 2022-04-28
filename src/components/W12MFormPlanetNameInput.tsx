import { useState } from "react";

interface PlanetNameInputProps {
    planetName: string;
    onChangePlanetName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PlanetNameInput: React.FC<PlanetNameInputProps> = ({
    planetName,
    onChangePlanetName,
}) => {
    const [errMessage, setErrMessage] = useState<string>("");

    const validateText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const reg = /^[a-zA-Z]*$/i;
        if (
            !reg.test(e.target.value) ||
            e.target.value.length < 4 ||
            e.target.value.length > 15
        )
            setErrMessage(
                "Error: Only alphabets [a-z] of size [5-15] characters"
            );
        else setErrMessage("");
        onChangePlanetName(e);
    };
    return (
        <>
            <label htmlFor="planetName">Planet Name: </label>
            <input
                id="planetName"
                type="text"
                value={planetName}
                onChange={validateText}
                required
            />
            <div>{errMessage}</div>
        </>
    );
};
