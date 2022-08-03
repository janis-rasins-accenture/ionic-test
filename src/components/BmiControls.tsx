import { IonButton, IonCol, IonIcon, IonRow } from "@ionic/react"
import { calculatorOutline, refreshOutline } from "ionicons/icons"
import React from "react"

const BmiControls: React.FC<{
	calculateBmi: () => void
	resetInputs: () => void
}> = (props) => {
	const handleResetInputs = () => {
		props.resetInputs()
	}
	const handleCalculateBmi = () => {
		props.calculateBmi()
	}
	return (
		<IonRow>
			<IonCol size='12' class='ion-text-right'>
				<IonButton fill='outline' color='danger' onClick={handleResetInputs}>
					<IonIcon slot='start' icon={refreshOutline} /> Reset
				</IonButton>
				<IonButton onClick={handleCalculateBmi}>
					<IonIcon slot='start' icon={calculatorOutline} />
					Calculate
				</IonButton>
			</IonCol>
		</IonRow>
	)
}

export default BmiControls
