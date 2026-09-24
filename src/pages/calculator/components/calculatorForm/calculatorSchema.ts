import type { SelectDataItem } from "./components"
import { z } from "zod"

const activityRate: SelectDataItem[] = [
  { label: "Sedentário", value: 1.2 },
  { label: "Leve", value: 1.375 },
  { label: "Médio", value: 1.55 },
  { label: "Alto", value: 1.725 },
  { label: "Muito Alto", value: 1.9 },
]

const genders: SelectDataItem[] = [
	{ label: "Masculino", value: "male" },
	{ label: "Feminino", value: "female" },
]

const calculatorSchema = z.object({
  age: z.coerce
    .number({ error: "Informe um número válido" })
    .min(1, "Idade deve ser maior que 0")
    .max(120, "Idade inválida"),
  height: z.coerce
    .number({ error: "Informe um número válido" })
    .positive("Altura deve ser maior que 0"),
  weight: z.coerce
    .number({ error: "Informe um número válido" })
    .positive("Peso deve ser maior que 0"),
	gender: z.coerce
		.string({ error: "Selecione um gênero" })
		.refine((val) => genders.some((g) => g.value === val), {
			message: "Gênero inválido",
		}),
  caloricBalance: z.coerce
    .number({ error: "Selecione o balanço calórico" }),
  activityRate: z.coerce
    .number({ error: "Selecione a taxa de atividade" }),
})

type CalculatorFormData = z.infer<typeof calculatorSchema>

export { calculatorSchema, type CalculatorFormData, activityRate, genders }

