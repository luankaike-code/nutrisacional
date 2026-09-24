import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { NutritionalValues } from "../calculatorForm/calculatorForm"
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

function CalculatorResults({calcResults, className, ...props}: 
	{calcResults?: NutritionalValues | null} & HTMLAttributes<HTMLDivElement>){
	return (
		<Card className={cn("w-full", className)} {...props}>
			<CardHeader>
				<CardTitle>Resultados</CardTitle>
				<CardDescription>Valores nutricionais calculados</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-2">
				{ !calcResults &&
					<>
					</>
				}
				{ calcResults &&
					<>
						<div className="flex justify-between">
							<span>Taxa Basal Metabólica (TBM):</span>
							<span>{calcResults.TBM.toFixed(2)} cal/dia</span>
						</div>
						<div className="flex justify-between">
							<span>Gasto Energético Total (GET):</span>
							<span>{calcResults.GET.toFixed(2)} cal/dia</span>
						</div>
					</>
				}
			</CardContent>
		</Card>
	)
}

export { CalculatorResults }