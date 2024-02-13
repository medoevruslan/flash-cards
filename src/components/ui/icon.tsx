import { SVGProps } from 'react'

import spriteHref from '../../assets/icons/sprite.svg'

type Props = {
  name: string
}
export const Icon = ({ name, ...props }: Props & SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props}>
      <use href={`${spriteHref}#${name}`} />
    </svg>
  )
}
