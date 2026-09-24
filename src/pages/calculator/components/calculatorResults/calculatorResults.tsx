import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { NutritionalValues } from "../calculatorForm/calculatorForm"
import { useEffect, useState, type HTMLAttributes } from "react"
import { CalculatorResultsField } from "./components"
import { cn } from "@/lib/utils"
import Favicon from "@/../public/favicon.svg"
import { Button } from "@/components/ui/button"

function CalculatorResults({calcResults, className, ...props}: 
	{calcResults?: NutritionalValues | null} & HTMLAttributes<HTMLDivElement>){
	const [results, setResults] = useState<NutritionalValues | null>(calcResults?? null)

	useEffect(() => {
		setResults(calcResults?? null)
	}, [calcResults])

	function handleCopyResults() {
		if(!results) return
		const resultsString = `Valores Nutricionais
		TBM: ${results.TBM.toFixed(2)} cal/dia
		GET: ${results.GET.toFixed(2)} cal/dia
		Proteínas por quilo: ${results.gramsProteinToWeightRatio.toFixed(2)} g/kg
		Carboidratos por quilo: ${results.gramsFatToWeightRatio.toFixed(2)} g/kg
		
		Sugestões de Nutrição:
		Proteínas: ${results.gramsProtein.toFixed(2)} g/dia
		Carboidratos: ${results.gramsCarbs.toFixed(2)} g/dia
		Gorduras: ${results.gramsFat.toFixed(2)} g/dia`

		navigator.clipboard.writeText(resultsString)
	}

	function handleClearResults() {
		setResults(null)
	}
	
	return (
		<Card className={cn("w-full", className)} {...props}>
			<CardHeader>
				<CardTitle>Resultados</CardTitle>
				<CardDescription>Valores nutricionais calculados</CardDescription>
			</CardHeader>
			<CardContent className="h-full flex flex-col">
				{ !results &&
					<>
						<div className="flex justify-center items-center h-full w-full gap-2">
							<img src={Favicon} className="animate-bounce w-1/3" />
						</div>
					</>
				}
				{ results &&
					<ul className="flex flex-col gap-8">
						<li>
							<h1 className="text-lg font-semibold">Valores Nutricionais</h1>
							<ul className="flex flex-col gap-2 p-2">
								<CalculatorResultsField label="TBM" value={results.TBM} unit="cal/dia" />
								<CalculatorResultsField label="GET" value={results.GET} unit="cal/dia" />
								<CalculatorResultsField label="Proteínas por quilo" value={results.gramsProteinToWeightRatio} unit="g/kg" />
							<CalculatorResultsField label="Carboidratos por quilo" value={results.gramsFatToWeightRatio} unit="g/kg" />
							</ul>
						</li>

						<li>
							<h1 className="text-lg font-semibold">Sugestões de Nutrição</h1>
							<ul className="flex flex-col gap-2 p-2">
								<CalculatorResultsField label="Proteínas" value={results.gramsProtein} unit="g/dia" />
								<CalculatorResultsField label="Carboidratos" value={results.gramsCarbs} unit="g/dia" />
								<CalculatorResultsField label="Gorduras" value={results.gramsFat} unit="g/dia" />
							</ul>
						</li>
					</ul>
				}
			</CardContent>
			<CardFooter>
				{results &&
					<div className="flex flex-col gap-2 w-full">
						<Button className="w-full" onClick={handleCopyResults}>Copiar Resultado</Button>
						<Button variant="outline" onClick={handleClearResults}>Limpar Resultado</Button>
					</div>
				}
			</CardFooter>
		</Card>
	)
}

export { CalculatorResults }