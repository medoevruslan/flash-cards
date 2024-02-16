import { SVGProps } from 'react'

import s from './icon.module.scss'

import spriteHref from '../../../assets/icons/sprite.svg'

type Props = {
  name: string
}
export const Icon = ({ name, ...props }: Props & SVGProps<SVGSVGElement>) => {
  return (
    <svg className={s.iconFlex} {...props}>
      <use href={`${spriteHref}#${name}`} />
    </svg>
  )
}
