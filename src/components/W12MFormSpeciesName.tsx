import React, { useState } from "react";

export interface SpeciesNameInputProps {
    speciesName: string;
    onChangeSpeciesName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SpeciesNameInput: React.FC<SpeciesNameInputProps> = ({
    speciesName,
    onChangeSpeciesName,
}) => {
    const [errMessage, setErrMessage] = useState<string | undefined>("");

    const validateText = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeSpeciesName(e);
        const reg = /^[a-zA-Z]{3,23}$/;
        if (!reg.test(e.target.value))
            setErrMessage(
                "Error: Only alphabets [a-z] of size [3-23] characters"
            );
        else setErrMessage("");
    };

    return (
        <>
            <label htmlFor="speciesName">Species Name: </label>
            <input
                id="speciesName"
                type="text"
                placeholder="Enter Species Name"
                value={speciesName}
                onChange={validateText}
                required
            />
            <div>{errMessage}</div>
        </>
    );
};
