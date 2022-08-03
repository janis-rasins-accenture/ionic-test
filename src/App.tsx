import {
	IonAlert,
	IonApp,
	IonCol,
	IonContent,
	IonGrid,
	IonHeader,
	IonInput,
	IonItem,
	IonLabel,
	IonRow,
	IonTitle,
	IonToolbar,
	setupIonicReact,
} from "@ionic/react"

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css"

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css"
import "@ionic/react/css/structure.css"
import "@ionic/react/css/typography.css"

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css"
import "@ionic/react/css/float-elements.css"
import "@ionic/react/css/text-alignment.css"
import "@ionic/react/css/text-transformation.css"
import "@ionic/react/css/flex-utils.css"
import "@ionic/react/css/display.css"

/* Theme variables */
import "./theme/variables.css"
import React from "react"
import BmiControls from "./components/BmiControls"
import BmiResult from "./components/BmiResult"
import InputControl from "./components/InputControl"

setupIonicReact()

const App: React.FC = () => {
	const [calculatedBmi, setCalculatedBmi] = React.useState<number>()
	const [error, setError] = React.useState<string>("")
	const [calcUnits, setCalcUnit] = React.useState<"m/kg" | "ft/lbs">("m/kg")

	const weightInputRef = React.useRef<HTMLIonInputElement>(null)
	const heightInputRef = React.useRef<HTMLIonInputElement>(null)

	const calculateBmi = () => {
		const enteredHeight = heightInputRef.current!.value
		const enteredWeight = weightInputRef.current!.value

		if (
			!enteredHeight ||
			!enteredWeight ||
			+enteredHeight <= 0 ||
			+enteredWeight <= 0
		) {
			setError("Please enter a valid input number!")
			return
		}

		const weightConversionFactor = calcUnits === "ft/lbs" ? 2.2 : 1
		const heightConversionFactor = calcUnits === "ft/lbs" ? 3.28 : 1

		const weight = +enteredWeight * weightConversionFactor
		const height = +enteredHeight * heightConversionFactor
		const bmi = weight / (height * height)
		setCalculatedBmi(bmi)
	}

	const resetInputs = () => {
		heightInputRef.current!.value = undefined
		weightInputRef.current!.value = undefined
	}

	const clearError = () => {
		setError("")
	}

	return (
		<React.Fragment>
			<IonAlert
				isOpen={!!error}
				onDidDismiss={clearError}
				header='Alert'
				message={error}
				buttons={[{ text: "Okay", handler: clearError }]}
			/>
			<IonApp>
				<IonHeader>
					<IonToolbar color='primary'>
						<IonTitle>BMI calculator</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent className='ion-padding'>
					<IonGrid>
						<IonRow>
							<IonCol>
								<InputControl
									selectedValue={calcUnits}
									setCalcUnit={setCalcUnit}
								/>
							</IonCol>
						</IonRow>
						<IonRow>
							<IonCol size='12'>
								<IonItem>
									<IonLabel position='floating'>
										Your height ({calcUnits === "m/kg" ? "m" : "ft"})
									</IonLabel>
									<IonInput
										inputmode='decimal'
										type='number'
										ref={heightInputRef}
									></IonInput>
								</IonItem>
							</IonCol>
							<IonCol size='12'>
								<IonItem>
									<IonLabel position='floating'>
										Your weight ({calcUnits === "m/kg" ? "kg" : "lbs"})
									</IonLabel>
									<IonInput
										inputmode='numeric'
										type='number'
										ref={weightInputRef}
									></IonInput>
								</IonItem>
							</IonCol>
						</IonRow>
						<BmiControls
							calculateBmi={calculateBmi}
							resetInputs={resetInputs}
						/>

						{calculatedBmi && <BmiResult calculatedBmi={calculatedBmi} />}
					</IonGrid>
				</IonContent>
			</IonApp>
		</React.Fragment>
	)
}

export default App
