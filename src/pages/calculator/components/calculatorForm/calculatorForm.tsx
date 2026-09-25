import { FieldGroup } from "@/components/ui/field"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FieldWrapper, Selector, type SelectData } from "./components"
import { activityRate, genders, type CalculatorFormData, calculatorSchema } from "./calculatorSchema"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller } from "react-hook-form"
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import { Link } from "@/components"

const caloricBalanceData: SelectData[] = [
	{
    type: "group",
    title: "Nulo",
    content: [
      { label: "0 cal", value: 0 },
    ],
  },
  {
    type: "group",
    title: "Déficit",
    content: [
      { label: "-100 cal", value: -100 },
      { label: "-200 cal", value: -200 },
      { label: "-300 cal", value: -300 },
      { label: "-400 cal", value: -400 },
      { label: "-500 cal", value: -500 },
    ],
  },
  { type: "separator" },
  {
    type: "group",
    title: "Superávit",
    content: [
      { label: "100 cal", value: 100 },
      { label: "200 cal", value: 200 },
      { label: "300 cal", value: 300 },
      { label: "400 cal", value: 400 },
      { label: "500 cal", value: 500 },
    ],
  },
]

const activityRateData: SelectData[] = [
  {
    type: "group",
    title: "Nível de Atividade Física",
    content: activityRate,
  },
]

const genderData: SelectData[] = [
	{
		type: "group",
		title: "Gênero",
		content: genders
	}
]

type NutritionalValues = {
  TBM: number
  GET: number
  gramsProtein: number
  gramsFat: number
  gramsCarbs: number
  gramsProteinToWeightRatio: number
  gramsFatToWeightRatio: number
}

function CalculatorForm({onCalculate, className, ...props}: 
	{onCalculate?: (results: NutritionalValues) => void} & HTMLAttributes<HTMLDivElement>) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      age: undefined,
      height: undefined,
      weight: undefined,
      caloricBalance: undefined,
      activityRate: undefined,
      gender: undefined,
    },
  })

	function calcNutritionalValues(data: CalculatorFormData): NutritionalValues {
		const { age, height, weight, caloricBalance, activityRate, gender } = data

		const genderFactor = gender === "Mas." ? 5 : -161
		const TBM = (10 * weight) + (6.25 * height) - (5 * age) + genderFactor
		const GET = TBM * activityRate + caloricBalance
		
		const gramsProteinToWeightRatio = activityRate * 1.2
		const gramsFatToWeightRatio = activityRate * 0.8

		const gramsProtein = weight * gramsProteinToWeightRatio
		const gramsFat = weight * gramsFatToWeightRatio
		
		const caloriesProtein = gramsProtein * 4
		const caloriesFat = gramsFat * 9

		const gramsCarbs = (GET - caloriesProtein - caloriesFat) / 4

		return {
			TBM,
			GET,
			gramsProtein,
			gramsFat,
			gramsCarbs,
			gramsProteinToWeightRatio,
			gramsFatToWeightRatio
		}
	}
	
  function onSubmit(data: CalculatorFormData) {
    console.log("Valores do formulário:", data)
    const nutritionalValues = calcNutritionalValues(data)
    console.log("Valores nutricionais calculados:", nutritionalValues)
    onCalculate?.(nutritionalValues)
  }

return (
    <Card className={cn("w-1/2 rounded-lg self-center", className)} {...props}>
      <CardHeader>
        <CardTitle>Calculadora Nutricional</CardTitle>
        <CardDescription>
          Preencha os campos e descubra os seus valores nutricionais
        </CardDescription>
        <CardAction>
          <Link href="/doc">
            Leia mais
          </Link>
        </CardAction>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <FieldGroup>
            <FieldWrapper id="gender" label="Gênero" error={errors.gender?.message}>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <Selector
                    selectDatas={genderData}
                    value={field.value ? field.value : undefined}
                    onChange={field.onChange}
                  />
                )}
              />
            </FieldWrapper>

            <FieldWrapper id="age" label="Idade" error={errors.age?.message}>
              <Controller
                name="age"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
										value={field.value ? Number(field.value) : undefined}
                    id="age"
                    type="number"
                    placeholder="Ex: 25"
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                )}
              />
            </FieldWrapper>

            <FieldWrapper id="height" label="Altura (cm)" error={errors.height?.message}>
              <Controller
                name="height"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
										value={field.value ? Number(field.value) : undefined}
                    id="height"
                    type="number"
                    placeholder="Ex: 175"
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                )}
              />
            </FieldWrapper>

            <FieldWrapper id="weight" label="Peso (kg)" error={errors.weight?.message}>
              <Controller
                name="weight"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
										value={field.value ? Number(field.value) : undefined}
                    id="weight"
                    type="number"
                    step="0.1"
                    placeholder="Ex: 70.5"
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                )}
              />
            </FieldWrapper>

            <FieldWrapper
              id="caloric-balance"
              label="Balanço Calórico"
              description="Escolha um déficit para emagrecer ou superávit para ganhar massa"
              error={errors.caloricBalance?.message}
            >
              <Controller
                name="caloricBalance"
                control={control}
                render={({ field }) => (
                  <Selector
                    selectDatas={caloricBalanceData}
                    value={field.value ? Number(field.value) : undefined}
                    onChange={field.onChange}
                  />
                )}
              />
            </FieldWrapper>

            <FieldWrapper
              id="activity-rate"
              label="Taxa de Atividade"
              description="Nível diário de movimentação e treinos"
              error={errors.activityRate?.message}
            >
              <Controller
                name="activityRate"
                control={control}
                render={({ field }) => (
                  <Selector
                    selectDatas={activityRateData}
                    value={field.value ? Number(field.value) : undefined}
                    onChange={field.onChange}
                  />
                )}
              />
            </FieldWrapper>
          </FieldGroup>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full text-center">
            Calcular
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

export { CalculatorForm, type NutritionalValues }