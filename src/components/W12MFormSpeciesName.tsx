import React, { useState } from "react";

interface SpeciesNameInputProps {
    speciesName: string;
    onChangeSpeciesName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SpeciesNameInput: React.FC<SpeciesNameInputProps> = ({
    speciesName,
    onChangeSpeciesName,
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
        onChangeSpeciesName(e);
    };

    return (
        <>
            <label htmlFor="speciesName">Species Name: </label>
            <input
                id="speciesName"
                type="text"
                value={speciesName}
                onChange={validateText}
                required
            />
            <div>{errMessage}</div>
        </>
    );
};
