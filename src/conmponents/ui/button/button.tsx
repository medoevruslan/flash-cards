import React, { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './button.module.scss'

export type Props<T extends ElementType = 'button'> = {
  as?: T
  children: React.ReactNode
  className?: string
  fullwidth?: boolean
  variant: 'outlined' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
  props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>
) => {
  const {
    as: Component = 'button',
    className = '',
    fullwidth,
    variant = 'primary',
    ...rest
  } = props

  return (
    <Component
      className={`${s.button} ${s[variant]} ${fullwidth ? s.fullWidth : ''} ${className}`}
      {...rest}
    ></Component>
  )
}
