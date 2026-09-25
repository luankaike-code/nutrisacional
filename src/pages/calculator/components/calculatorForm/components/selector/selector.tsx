import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from "@/components/ui/select"

type SelectDataItem = {
  label: string
  value: number | string
}

type SelectDataGroup = {
  type: "group"
  title: string
  content: SelectDataItem[]
}

type SelectDataSeparator = {
  type: "separator"
}

type SelectData = SelectDataSeparator | SelectDataGroup

function Selector({selectDatas, placeholder = "Selecione um valor", value, onChange,}: 
	{ selectDatas: SelectData[], placeholder?: string, value?: any, onChange?: (val: string) => void }) {
  return (
    <Select value={value !== undefined ? String(value) : null} onValueChange={(val, _) => val && onChange && onChange(val)}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {selectDatas.map((selectData, idx) => (
          <span key={idx}>
            {selectData.type === "group" && (
              <SelectGroup>
                <SelectLabel>{selectData.title}</SelectLabel>
                {selectData.content.map((item) => (
                  <SelectItem key={item.label} value={String(item.value)}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            )}
            {selectData.type === "separator" && <SelectSeparator />}
          </span>
        ))}
      </SelectContent>
    </Select>
  )
}

export { Selector, type SelectData, type SelectDataItem, type SelectDataGroup, type SelectDataSeparator }