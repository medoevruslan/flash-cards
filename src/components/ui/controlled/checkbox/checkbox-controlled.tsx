import { UseControllerProps, useController } from 'react-hook-form'

import { CheckboxInput, CheckboxInputProps } from '@/components/ui/checkbox'

import { SigninFormValues } from '../../../auth/signin-form'

export type CheckboxControlledProps<T extends SigninFormValues> = UseControllerProps<T> &
  Omit<CheckboxInputProps, 'checked' | 'id' | 'onChange' | 'value'>

export const CheckboxControlled = <T extends SigninFormValues>({
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
