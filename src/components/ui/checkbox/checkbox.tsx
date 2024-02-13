import { useId } from 'react'

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
          <svg
            fill={'none'}
            height={'18'}
            viewBox={'0 0 18 18'}
            width={'18'}
            xmlns={'http://www.w3.org/2000/svg'}
          >
            <path
              d={
                'M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0ZM7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z'
              }
              fill={'currentColor'}
            />
          </svg>
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
