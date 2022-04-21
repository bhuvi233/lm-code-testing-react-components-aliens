interface PlanetNameInputProps{
    planetName : string;
    onChangePlanetName : (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PlanetNameInput : React.FC<PlanetNameInputProps> = ({planetName, onChangePlanetName}) => {
    return (
        <>
            <label htmlFor='planetName'>Planet Name: </label>
            <input id='planetName' type='text' value={planetName} onChange={onChangePlanetName} />
        </>
    );
};