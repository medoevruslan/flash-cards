import { ComponentPropsWithoutRef } from 'react'

import s from './card.module.scss'

type CardBlockTypes = 'article' | 'div' | 'section' | 'span'

export type CardProps = {
  as?: CardBlockTypes
} & ComponentPropsWithoutRef<CardBlockTypes>

export const Card = (props: CardProps) => {
  const { as: Component = 'div', children, className = '', ...rest } = props

  const finalClassName = s.card + (className ? ' ' + className : '')

  return (
    <Component className={finalClassName} {...rest}>
      {children}
    </Component>
  )
}
