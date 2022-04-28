import { FormEvent, useState } from "react";
import { SpeciesNameInput } from "./W12MFormSpeciesName";
import { PlanetNameInput } from "./W12MFormPlanetNameInput";
import W12MHeader from "./W12MHeader";
import { NumberOfBeingsInput } from "./W12MFormNumberOfBeings";
import { WhatIsInput } from "./W12MFormWhatIsInput";
import { ReasonForSparingInput } from "./W12FormReasonForSparingInput";

const W12MForm = () => {
    const [speciesName, setSpeciesName] = useState<string>("");
    const [planetName, setPlanetName] = useState<string>("");
    const [numberOfBeings, setNumberOfBeings] = useState<string>("");
    const [whatIsOutput, setWhatIsOutput] = useState<string>("");
    const [reasonForSparing, setReasonForSparing] = useState<string>("");
    const [onSubmitMessage, setOnSubmitMessage] = useState<string>("");

    const handleSubmitForm = (e: FormEvent) => {
        e.preventDefault();
        setOnSubmitMessage(`The form is submitted successfully for the species '${speciesName}' in the planet '${planetName}
		for '${numberOfBeings}' beings, under the reason of '${reasonForSparing}'`);
        setSpeciesName("");
        setNumberOfBeings("");
        setPlanetName("");
        setWhatIsOutput("");
        setReasonForSparing("");
    };
    return (
        <section className="w12MForm">
            <W12MHeader />
            <form onSubmit={handleSubmitForm}>
                <p>
                    <SpeciesNameInput
                        speciesName={speciesName}
                        onChangeSpeciesName={(e) =>
                            setSpeciesName(e.target.value)
                        }
                    />
                </p>
                <p>
                    <PlanetNameInput
                        planetName={planetName}
                        onChangePlanetName={(e) =>
                            setPlanetName(e.target.value)
                        }
                    />
                </p>
                <p>
                    <NumberOfBeingsInput
                        numberOfBeings={numberOfBeings}
                        onChangeNumberofBeings={(e) =>
                            setNumberOfBeings(e.target.value)
                        }
                    />
                </p>
                <p>
                    <WhatIsInput
                        whatIs={whatIsOutput}
                        onChangeWhatIs={(e) => setWhatIsOutput(e.target.value)}
                    />
                </p>
                <p>
                    <ReasonForSparingInput
                        reasonForSparing={reasonForSparing}
                        onChangeReasonForSparing={(e) =>
                            setReasonForSparing(e.target.value)
                        }
                    />
                </p>
                <button type="submit" value="submit">
                    Submit Form
                </button>
            </form>
            {onSubmitMessage}
        </section>
    );
};

export default W12MForm;
