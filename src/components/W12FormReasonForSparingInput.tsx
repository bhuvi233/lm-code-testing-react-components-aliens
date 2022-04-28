import { useState } from "react";

interface ReasonForSparingInputProps {
    reasonForSparing: string;
    onChangeReasonForSparing: (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
}

export const ReasonForSparingInput: React.FC<ReasonForSparingInputProps> = ({
    reasonForSparing,
    onChangeReasonForSparing,
}) => {
    const [errMessage, setErrMessage] = useState<string>("");

    const validateText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.value.length > 100)
            setErrMessage("Error: Max 100 characters");
        else setErrMessage("");
        onChangeReasonForSparing(e);
    };
    return (
        <>
            <label htmlFor="reasonForSparing">Reason for sparing: </label>
            <textarea
                id="reasonForSparing"
                placeholder="Characters count 20-100"
                value={reasonForSparing}
                onChange={validateText}
                required
            />
            <div>{errMessage}</div>
        </>
    );
};
