import { Typography } from '@/components/ui/typography'
import * as RadioGroupRadix from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

export type RadioGroupProps = {
  items: { label?: string; value: string }[]
} & RadioGroupRadix.RadioGroupProps
export const RadioGroup = ({
  defaultValue,
  disabled,
  items,
  name,
  onValueChange,
  orientation = 'horizontal',
}: RadioGroupProps) => {
  if (!items.length) {
    return
  }

  return (
    <RadioGroupRadix.Root
      className={s[orientation]}
      defaultValue={defaultValue}
      disabled={disabled}
      name={name}
      onValueChange={onValueChange}
      orientation={orientation}
    >
      {items.map(it => (
        <div className={s.itemContainer} key={it.value}>
          <RadioGroupRadix.Item className={s.item} id={it.value + it.label} value={it.value}>
            <RadioGroupRadix.Indicator className={s.indicator} />
          </RadioGroupRadix.Item>
          {it.label && (
            <label className={s.label} htmlFor={it.value + it.label}>
              <Typography variant={'body2'}>{it.label}</Typography>
            </label>
          )}
        </div>
      ))}
    </RadioGroupRadix.Root>
  )
}
