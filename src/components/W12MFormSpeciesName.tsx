interface SpeciesNameInputProps{
    speciesName : string;
    onChangeSpeciesName : (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SpeciesNameInput : React.FC<SpeciesNameInputProps> = ({speciesName, onChangeSpeciesName}) => {
    return (
        <>
            <label htmlFor='speciesName'>Species Name: </label>
            <input id='speciesName' type='text' value={speciesName} onChange={onChangeSpeciesName} />
        </>
    );
};