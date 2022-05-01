import { useState } from "react";

interface WhatIsInputProps {
    whatIs?: string;
    onChangeWhatIs: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const WhatIsInput: React.FC<WhatIsInputProps> = ({
    whatIs,
    onChangeWhatIs,
}) => {
    const [errMessage, setErrMessage] = useState<string | undefined>("");

    const validateInput: (value: string) => string | undefined = (value) => {
        if (value !== "4") return "Error: Try Again";
    };
    return (
        <>
            <label htmlFor="whatIs">What is 2 + 2 : </label>
            <select
                data-testid="select"
                value={whatIs}
                onChange={(e) => {
                    const errorMessage = validateInput(e.target.value);
                    setErrMessage(errorMessage);
                    onChangeWhatIs(e);
                }}
                required
            >
                <option data-testid="default-option" value=""></option>
                <option data-testid="option-4" value="4">
                    4
                </option>
                <option data-testid="option-not-4" value="Not 4">
                    Not 4
                </option>
            </select>
            <div>{errMessage}</div>
        </>
    );
};
