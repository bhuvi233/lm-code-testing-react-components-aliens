import { useState } from "react";

interface WhatIsInputProps {
    whatIs: string;
    onChangeWhatIs: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const WhatIsInput: React.FC<WhatIsInputProps> = ({
    whatIs,
    onChangeWhatIs,
}) => {
    const [errMessage, setErrMessage] = useState<string>("");

    const ValidateInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value !== "four") setErrMessage("Error: Try Again");
        else setErrMessage("");
        onChangeWhatIs(e);
    };
    return (
        <>
            <label htmlFor="whatIs">What is 2 + 2 : </label>
            <select value={whatIs} onChange={ValidateInput} required>
                <option value=""></option>
                <option value="four">4</option>
                <option value="notFour">Not 4</option>
            </select>
            <div>{errMessage}</div>
        </>
    );
};
