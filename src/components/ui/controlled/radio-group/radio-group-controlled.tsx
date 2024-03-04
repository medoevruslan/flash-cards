import { UseControllerProps, useController } from 'react-hook-form'

import { SigninFormValues } from '@/components/auth/signin-form'
import { RadioGroup, RadioGroupProps } from '@/components/ui/radio-group'

export type RadioGroupControlledProps<T extends SigninFormValues> = UseControllerProps<T> &
  RadioGroupProps

export const RadioGroupControlled = <T extends SigninFormValues>({
  control,
  defaultValue,
  disabled,
  name,
  rules,
  shouldUnregister,
  ...radioGroupProps
}: RadioGroupControlledProps<T>) => {
  const {
    field: { onChange },
  } = useController({ control, defaultValue, disabled, name, rules, shouldUnregister })

  return (
    <RadioGroup
      defaultValue={defaultValue}
      disabled={disabled}
      id={name}
      onValueChange={onChange}
      {...radioGroupProps}
    />
  )
}
