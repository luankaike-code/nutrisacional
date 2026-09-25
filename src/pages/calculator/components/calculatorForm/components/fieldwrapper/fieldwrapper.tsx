import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import type { PropsWithChildren } from "react"

function FieldWrapper({id, label, description, error, children,}: 
	{ id: string, label: string, description?: string, error?: string
} & PropsWithChildren) {
  return (
    <Field>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      {children}
      {description && <FieldDescription>{description}</FieldDescription>}
      {error && <p className="text-xs text-rose-500 mt-1">{error}</p>}
    </Field>
  )
}

export { FieldWrapper }