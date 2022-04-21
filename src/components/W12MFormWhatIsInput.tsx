interface WhatIsInputProps{
    whatIs : string;
    onChangeWhatIs : (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const WhatIsInput : React.FC<WhatIsInputProps> = ({whatIs, onChangeWhatIs}) => {
    return (
        <>
            <label htmlFor='whatIs'>What is 2 + 2 : </label>
            <select value={whatIs} onChange={onChangeWhatIs} >
                <option value="four">4</option>
                <option value="notFour">Not 4</option>
                </select>
        </>
    );
};