import React, { ComponentPropsWithoutRef, ElementType } from 'react'

import clsx from 'clsx'

import s from './typography.module.scss'

const variantMapping = {
  body1: 'p',
  body2: 'p',
  caption: 'p',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  link1: 'a',
  link2: 'a',
  overline: 'p',
  subtitle1: 'h6',
  subtitle2: 'h6',
} as const

type Props<T extends ElementType> = {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  variant:
    | 'body1'
    | 'body2'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'link1'
    | 'link2'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
} & ComponentPropsWithoutRef<T>
export const Typography = <T extends ElementType>(
  props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>
) => {
  const { children, className = '', style, variant, ...rest } = props
  const Component = variantMapping[variant]

  return (
    <Component className={clsx(s[variant], className)} style={style} {...rest}>
      {children}
    </Component>
  )
}
