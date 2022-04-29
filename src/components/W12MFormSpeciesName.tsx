import React, { useState } from "react";

interface SpeciesNameInputProps {
    speciesName: string;
    onChangeSpeciesName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SpeciesNameInput: React.FC<SpeciesNameInputProps> = ({
    speciesName,
    onChangeSpeciesName,
}) => {
    const [errMessage, setErrMessage] = useState<string | undefined>("");

    const validateText: (value: string) => string | undefined = (value) => {
        const reg = /^[a-zA-Z]{3,23}$/;
        if (!reg.test(value))
            return "Error: Only alphabets [a-z] of size [3-23] characters";
    };

    return (
        <>
            <label htmlFor="speciesName">Species Name: </label>
            <input
                id="speciesName"
                type="text"
                value={speciesName}
                onChange={(e) => {
                    const errorMessage = validateText(e.target.value);
                    setErrMessage(errorMessage);
                    onChangeSpeciesName(e);
                }}
                required
            />
            <div>{errMessage}</div>
        </>
    );
};
