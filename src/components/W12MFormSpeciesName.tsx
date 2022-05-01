import { useState } from "react";
//import ErrorMessage from '../ErrorMessage/ErrorMessage';

interface SpeciesNameProps {
    speciesName?: string;
    onChangeSpeciesName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SpeciesNameInput: React.FC<SpeciesNameProps> = ({
    speciesName,
    onChangeSpeciesName,
}) => {
    const [errorMessage, setErrorMessage] = useState<string | undefined>("");

    const validate: (value: string) => string | undefined = (value) => {
        const regex = /^[a-zA-Z]{3,23}$/;
        if (regex.test(value) === false) {
            return "Error: Only alphabets [a-z] of size [3-23] characters";
        }
    };

    return (
        <>
            <label htmlFor="speciesName">Species Name</label>
            <input
                id="speciesName"
                type="text"
                placeholder="Enter a species name"
                value={speciesName}
                onChange={(e) => {
                    const errorMessage = validate(e.target.value);
                    setErrorMessage(errorMessage);
                    onChangeSpeciesName(e);
                }}
            />
            <div>{errorMessage}</div>
        </>
    );
};
