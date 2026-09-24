function CalculatorResultsField({label, value, unit}: {label: string, value: number, unit: string}){
	return (
		<li className="flex justify-between border-b border-b-green-200">
			<span>{label}</span>
			<span>{value.toFixed(2)} {unit}</span>
		</li>
	)
}

export { CalculatorResultsField }