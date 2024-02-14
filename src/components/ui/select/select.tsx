import React from 'react'

import { Icon } from '@/components/ui/icon'
import { Typography } from '@/components/ui/typography'
import * as SelectRadix from '@radix-ui/react-select'
import { type SelectProps as RadixSelectProps, SelectItemProps } from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './select.module.scss'

export type SelectProps = RadixSelectProps
export const Select = ({ children, disabled, onValueChange }: SelectProps) => {
  return (
    <SelectRadix.Root disabled={disabled} onValueChange={onValueChange}>
      <div className={s.rootContainer}>
        <SelectRadix.Trigger className={clsx(s.container, s.trigger)}>
          <SelectRadix.Value placeholder={'Please select'} />
          <SelectRadix.Icon>
            <Icon className={s.triggerIcon} height={10} name={'chevron-down'} width={10} />
          </SelectRadix.Icon>
        </SelectRadix.Trigger>
        <SelectRadix.Portal>
          <SelectRadix.Content align={'center'} className={clsx(s.container, s.content)}>
            <SelectRadix.Viewport className={s.viewport}>{children}</SelectRadix.Viewport>
            <SelectRadix.Arrow />
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </div>
    </SelectRadix.Root>
  )
}

type OptionProps = {
  children?: React.ReactNode
} & SelectItemProps

export const SelectOption = React.forwardRef<HTMLDivElement, OptionProps>(
  (
    { children, className, ...rest }: OptionProps & Omit<SelectItemProps, keyof OptionProps>,
    forwardedRef
  ) => {
    return (
      <div className={s.optionWrapper}>
        <SelectRadix.Item className={clsx(s.option, className)} {...rest} ref={forwardedRef}>
          <SelectRadix.ItemText>
            <Typography variant={'body1'}>{children}</Typography>
          </SelectRadix.ItemText>
        </SelectRadix.Item>
      </div>
    )
  }
)
