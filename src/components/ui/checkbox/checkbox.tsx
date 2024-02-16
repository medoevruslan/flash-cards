import { useId } from 'react'

import { Icon } from '@/components/ui/icon/icon'
import * as Checkbox from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

type CheckboxProps = {
  disabled?: boolean
  label?: string
  onCheckedChange?: (checked: 'indeterminate' | boolean) => void
}

export const CheckboxInput = ({ disabled, label, onCheckedChange }: CheckboxProps) => {
  const id = useId()

  return (
    <div style={{ alignItems: 'center', display: 'flex', gap: '8px' }}>
      <Checkbox.Root
        className={s.CheckboxRoot}
        defaultChecked
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
        <label className={s.Label} htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  )
}
