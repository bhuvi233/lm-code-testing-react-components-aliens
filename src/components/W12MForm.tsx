import { FormEvent, useState } from 'react';
import { SpeciesNameInput } from './W12MFormSpeciesName';
import { PlanetNameInput } from './W12MFormPlanetNameInput';
import W12MHeader from './W12MHeader';
import { NumberOfBeingsInput } from './W12MFormNumberOfBeings';
import { WhatIsInput } from './W12MFormWhatIsInput';
import { ReasonForSparingInput } from './W12FormReasonForSparingInput';

const W12MForm = () => {
	const [speciesName, setSpeciesName] = useState<string>("");
	const [planetName, setPlanetName] = useState<string>("");
	const [numberOfBeings, setNumberOfBeings] = useState<string>("");
	const [whatIsOutput, setWhatIsOutput] = useState<string>("");
	const [reasonForSparing, setReasonForSparing] = useState<string>("");

	const handleSubmitForm = (e : FormEvent) => {
		e.preventDefault();
		console.log(`Species Name = ${speciesName}`);
		console.log(`Planet Name = ${planetName}`);
		console.log(`Number Of beings = ${numberOfBeings}`);
		console.log(`What is output = ${whatIsOutput}`);
		console.log(`Reason for sparing = ${reasonForSparing}`);
	}
	return (
		<section className='w12MForm'>
			<W12MHeader />
			<form onSubmit={handleSubmitForm}>
				<p>
					<SpeciesNameInput speciesName = {speciesName} onChangeSpeciesName = {e => setSpeciesName(e.target.value)} />
				</p>
				<p>
					<PlanetNameInput planetName = {planetName} onChangePlanetName = {e => setPlanetName(e.target.value)}/>
				</p>
				<p>
					<NumberOfBeingsInput numberOfBeings = {numberOfBeings} onChangeNumberofBeings= {e => setNumberOfBeings(e.target.value)}/>
				</p>
				<p>
					<WhatIsInput whatIs = {whatIsOutput} onChangeWhatIs = {e => setWhatIsOutput(e.target.value)}/>
				</p>
				<p>
					<ReasonForSparingInput reasonForSparing = {reasonForSparing} onChangeReasonForSparing = {e => setReasonForSparing(e.target.value)} />
				</p>
				<button type ="submit" value="submit">Submit Form</button>
			</form>
		</section>
	);
};

export default W12MForm;
