import React from 'react'

import { Icon } from '@/components/ui/icon/icon'
import { Typography } from '@/components/ui/typography'
import * as SelectRadix from '@radix-ui/react-select'
import { type SelectProps as RadixSelectProps, SelectItemProps } from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './select.module.scss'

export type SelectProps = {
  className?: string
  placeholder?: string
  style?: React.CSSProperties
} & RadixSelectProps
export const Select = ({
  children,
  className,
  defaultValue,
  disabled,
  onValueChange,
  placeholder,
  style,
}: SelectProps) => {
  return (
    <SelectRadix.Root disabled={disabled} onValueChange={onValueChange}>
      <SelectRadix.Trigger className={clsx(s.container, s.trigger, className)} style={style}>
        <SelectRadix.Value placeholder={placeholder || defaultValue || 'Select'} />
        <SelectRadix.Icon>
          <Icon className={s.triggerIcon} height={10} name={'chevron-down'} width={10} />
        </SelectRadix.Icon>
      </SelectRadix.Trigger>
      <SelectRadix.Portal>
        <SelectRadix.Content
          className={clsx(s.content)}
          position={'popper'}
          sideOffset={-6}
          style={style}
        >
          <SelectRadix.Viewport className={s.viewport}>{children}</SelectRadix.Viewport>
          <SelectRadix.Arrow />
        </SelectRadix.Content>
      </SelectRadix.Portal>
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
      <SelectRadix.Item className={clsx(s.option, className)} {...rest} ref={forwardedRef}>
        <SelectRadix.ItemText>
          <Typography variant={'body1'}>{children}</Typography>
        </SelectRadix.ItemText>
      </SelectRadix.Item>
    )
  }
)
