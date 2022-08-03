import React from "react"
import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react"

const InputControl: React.FC<{
	selectedValue: "m/kg" | "ft/lbs"
	setCalcUnit: (value: "m/kg" | "ft/lbs") => void
}> = (props) => {
	const handleSetCalcUnit = (event: CustomEvent) => {
		props.setCalcUnit(event.detail.value)
	}

	return (
		<IonSegment value={props.selectedValue} onIonChange={handleSetCalcUnit}>
			<IonSegmentButton value='m/kg'>
				<IonLabel>m/kg</IonLabel>
			</IonSegmentButton>
			<IonSegmentButton value='ft/lbs'>
				<IonLabel>ft/lbs</IonLabel>
			</IonSegmentButton>
		</IonSegment>
	)
}

export default InputControl
