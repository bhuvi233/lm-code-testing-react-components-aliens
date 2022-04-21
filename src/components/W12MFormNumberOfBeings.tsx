interface NumberOfBeingsInputProps{
    numberOfBeings : string;
    onChangeNumberofBeings : (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NumberOfBeingsInput : React.FC<NumberOfBeingsInputProps> = ({numberOfBeings, onChangeNumberofBeings}) => {
    return (
        <>
            <label htmlFor='numberOfBeings'>Number of beings: </label>
            <input id='numberOfBeings' type='text' value={numberOfBeings} onChange={onChangeNumberofBeings} />
        </>
    );
};