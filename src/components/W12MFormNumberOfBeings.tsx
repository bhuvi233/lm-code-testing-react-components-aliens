import { ChangeEvent, useState } from "react";

interface NumberOfBeingsInputProps {
    numberOfBeings: string;
    onChangeNumberofBeings: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NumberOfBeingsInput: React.FC<NumberOfBeingsInputProps> = ({
    numberOfBeings,
    onChangeNumberofBeings,
}) => {
    const [errMessage, setErrMessage] = useState<string | undefined>("");

    const validateText: (value: string) => string | undefined = (value) => {
        const reg = /^[1-9]{1}[0-9]{9,}$/;
        if (!reg.test(value)) return "Error: Miinimum of 1000000000";
    };
    return (
        <>
            <label htmlFor="numberOfBeings">Number of beings: </label>
            <input
                id="numberOfBeings"
                type="text"
                value={numberOfBeings}
                onChange={(e) => {
                    const errorMessage = validateText(e.target.value);
                    setErrMessage(errorMessage);
                    onChangeNumberofBeings(e);
                }}
                required
            />
            <div>{errMessage}</div>
        </>
    );
};
