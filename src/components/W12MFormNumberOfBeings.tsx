import { ChangeEvent, useState } from "react";

interface NumberOfBeingsInputProps {
    numberOfBeings: string;
    onChangeNumberofBeings: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NumberOfBeingsInput: React.FC<NumberOfBeingsInputProps> = ({
    numberOfBeings,
    onChangeNumberofBeings,
}) => {
    const [errMessage, setErrMessage] = useState<string>("");

    const validateText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const reg = /^\d*$/i;
        if (!reg.test(e.target.value))
            setErrMessage("Error: Text should contain only numbers 0-9");
        else setErrMessage("");
        onChangeNumberofBeings(e);
    };
    return (
        <>
            <label htmlFor="numberOfBeings">Number of beings: </label>
            <input
                id="numberOfBeings"
                type="text"
                value={numberOfBeings}
                onChange={validateText}
                required
            />
            <div>{errMessage}</div>
        </>
    );
};
