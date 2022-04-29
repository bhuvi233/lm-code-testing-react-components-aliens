import { useState } from "react";

interface WhatIsInputProps {
    whatIs: string;
    onChangeWhatIs: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const WhatIsInput: React.FC<WhatIsInputProps> = ({
    whatIs,
    onChangeWhatIs,
}) => {
    const [errMessage, setErrMessage] = useState<string | undefined>("");

    const validateInput: (value: string) => string | undefined = (value) => {
        if (value !== "four") return "Error: Try Again";
    };
    return (
        <>
            <label htmlFor="whatIs">What is 2 + 2 : </label>
            <select
                value={whatIs}
                onChange={(e) => {
                    const errorMessage = validateInput(e.target.value);
                    setErrMessage(errorMessage);
                    onChangeWhatIs(e);
                }}
                required
            >
                <option value=""></option>
                <option value="four">4</option>
                <option value="notFour">Not 4</option>
            </select>
            <div>{errMessage}</div>
        </>
    );
};
