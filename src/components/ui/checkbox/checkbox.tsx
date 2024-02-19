import { useId } from 'react'

import { Icon } from '@/components/ui/icon/icon'
import * as Checkbox from '@radix-ui/react-checkbox'
import { type CheckboxProps } from '@radix-ui/react-checkbox'
import clsx from 'clsx'

import s from './checkbox.module.scss'

export type CheckboxInputProps = {
  checked?: boolean | string
  className?: string
  defaultValue?: boolean
  disabled?: boolean
  label?: string
} & Omit<CheckboxProps, 'checked' | 'defaultValue'>

export const CheckboxInput = ({
  className,
  defaultValue,
  disabled,
  label,
  onCheckedChange,
  style,
}: CheckboxInputProps) => {
  const id = useId()

  return (
    <div className={clsx(s.checkboxWrapper, className)} style={style}>
      <Checkbox.Root
        className={s.checkboxRoot}
        defaultChecked={defaultValue}
        disabled={disabled}
        id={id}
        onCheckedChange={onCheckedChange}
      >
        <Checkbox.Indicator className={'CheckboxIndicator'}>
          <Icon
            fill={'none'}
            height={'18'}
            name={'checkbox'}
            style={{ display: 'block' }}
            viewBox={'0 0 18 18'}
            width={'18'}
          />
        </Checkbox.Indicator>
      </Checkbox.Root>
      {label && (
        <label className={s.label} htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  )
}
