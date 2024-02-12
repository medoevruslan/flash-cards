import * as SliderRadix from '@radix-ui/react-slider'

import s from './slider.module.scss'

type SliderProps = {
  onChange?: (values: number[]) => void
  values?: number[]
}

export const Slider = ({ onChange, values = [0, 50] }: SliderProps) => {
  const handleChangeValue = (value: number[]) => {
    onChange?.(value)
  }

  return (
    <div style={{ alignItems: 'center', display: 'flex', gap: '12px' }}>
      <div className={s.valueBox}>{values[0]}</div>
      <SliderRadix.Root
        className={s.SliderRoot}
        defaultValue={values}
        max={100}
        onValueChange={handleChangeValue}
        step={1}
      >
        <SliderRadix.Track className={s.SliderTrack}>
          <SliderRadix.Range className={s.SliderRange} />
        </SliderRadix.Track>
        <SliderRadix.Thumb aria-label={'Volume'} className={s.SliderThumb} />
        <SliderRadix.Thumb aria-label={'Volume'} className={s.SliderThumb} />
      </SliderRadix.Root>
      <div className={s.valueBox}>{values[1]}</div>
    </div>
  )
}
