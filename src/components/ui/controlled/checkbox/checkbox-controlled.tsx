import { UseControllerProps, useController } from 'react-hook-form'

import { FormValues } from '@/components/login-form'
import { CheckboxInput, CheckboxInputProps } from '@/components/ui/checkbox'

export type CheckboxControlledProps<T extends FormValues> = UseControllerProps<T> &
  Omit<CheckboxInputProps, 'checked' | 'id' | 'onChange' | 'value'>

export const CheckboxControlled = <T extends FormValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...checkboxProps
}: CheckboxControlledProps<T>) => {
  const {
    field: { onChange, value },
  } = useController({ control, defaultValue, name, rules, shouldUnregister })

  return (
    <CheckboxInput
      checked={value}
      defaultValue={defaultValue}
      id={name}
      onCheckedChange={onChange}
      {...checkboxProps}
    />
  )
}
