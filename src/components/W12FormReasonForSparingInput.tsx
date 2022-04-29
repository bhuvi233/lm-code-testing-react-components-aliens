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
    const [errMessage, setErrMessage] = useState<string | undefined>("");

    const validateText: (value: string) => string | undefined = (value) => {
        const reg = /^.{17,153}$/;
        if (!reg.test(value))
            return "Error: Must be between 17 and 153 characters";
    };
    return (
        <>
            <label htmlFor="reasonForSparing">Reason for sparing: </label>
            <textarea
                id="reasonForSparing"
                placeholder="Characters count 17-153"
                value={reasonForSparing}
                onChange={(e) => {
                    const errorMessage = validateText(e.target.value);
                    setErrMessage(errorMessage);
                    onChangeReasonForSparing(e);
                }}
                required
            />
            <div>{errMessage}</div>
        </>
    );
};
