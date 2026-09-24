import { useState } from "react"
import { CalculatorForm, CalculatorResults } from "./components"
import type { NutritionalValues } from "./components/calculatorForm/calculatorForm"

function Calculator() {
	const [nutritionalValues, setNutritionalValues] = useState<NutritionalValues | null>(null)
  return (
		<section className="self-center flex flex-col md:flex-row gap-4 my-12">
			<CalculatorForm className="min-w-xl" onCalculate={setNutritionalValues} />
			<CalculatorResults  className="min-w-xl dark" calcResults={nutritionalValues} />
		</section>
  )
}

export { Calculator }