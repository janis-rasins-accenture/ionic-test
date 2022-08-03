import React from "react"
import { IonCard, IonCardContent, IonCol, IonRow } from "@ionic/react"

const BmiResult: React.FC<{ calculatedBmi: number }> = (props) => {
	return (
		<IonRow>
			<IonCol>
				<IonCard>
					<IonCardContent className='ion-text-center'>
						<h2>Your Body-Mass-Index</h2>
						<h3>{props.calculatedBmi.toFixed(2)}</h3>
					</IonCardContent>
				</IonCard>
			</IonCol>
		</IonRow>
	)
}

export default BmiResult
