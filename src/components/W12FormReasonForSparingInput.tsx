interface ReasonForSparingInputProps{
    reasonForSparing : string;
    onChangeReasonForSparing : (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const ReasonForSparingInput : React.FC<ReasonForSparingInputProps> = ({reasonForSparing, onChangeReasonForSparing}) => {
    return (
        <>
            <label htmlFor='reasonForSparing'>Reason for sparing: </label>
            <textarea id='reasonForSparing' value={reasonForSparing} onChange={onChangeReasonForSparing} />
        </>
    );
};