import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { NutritionalValues } from "../calculatorForm/calculatorForm"
import type { HTMLAttributes } from "react"
import { CalculatorResultsField } from "./components"
import { cn } from "@/lib/utils"
import Favicon from "@/../public/favicon.svg"

function CalculatorResults({calcResults, className, ...props}: 
	{calcResults?: NutritionalValues | null} & HTMLAttributes<HTMLDivElement>){
	return (
		<Card className={cn("w-full", className)} {...props}>
			<CardHeader>
				<CardTitle>Resultados</CardTitle>
				<CardDescription>Valores nutricionais calculados</CardDescription>
			</CardHeader>
			<CardContent className="h-full flex flex-col">
				{ !calcResults &&
					<>
						<div className="flex justify-center items-center h-full w-full gap-2">
							<img src={Favicon} className="animate-bounce w-1/3" />
						</div>
					</>
				}
				{ calcResults &&
					<ul className="flex flex-col gap-8">
						<li>
							<h1 className="text-lg font-semibold">Valores Nutricionais</h1>
							<ul className="flex flex-col gap-2 p-2">
								<CalculatorResultsField label="TBM" value={calcResults.TBM} unit="cal/dia" />
								<CalculatorResultsField label="GET" value={calcResults.GET} unit="cal/dia" />
								<CalculatorResultsField label="Proteínas por quilo" value={calcResults.gramsProteinToWeightRatio} unit="g/kg" />
							<CalculatorResultsField label="Carboidratos por quilo" value={calcResults.gramsFatToWeightRatio} unit="g/kg" />
							</ul>
						</li>

						<li>
							<h1 className="text-lg font-semibold">Sugestões de Nutrição</h1>
							<ul className="flex flex-col gap-2 p-2">
								<CalculatorResultsField label="Proteínas" value={calcResults.gramsProtein} unit="g/dia" />
								<CalculatorResultsField label="Carboidratos" value={calcResults.gramsCarbs} unit="g/dia" />
								<CalculatorResultsField label="Gorduras" value={calcResults.gramsFat} unit="g/dia" />
							</ul>
						</li>
					</ul>
				}
			</CardContent>
		</Card>
	)
}

export { CalculatorResults }