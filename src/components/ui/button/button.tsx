import React, { ComponentPropsWithoutRef, ElementType } from 'react'

import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: React.ReactNode
  className?: string
  fullwidth?: boolean
  variant: 'outlined' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const {
    as: Component = 'button',
    children,
    className = '',
    fullwidth,
    variant = 'primary',
    ...rest
  } = props

  return (
    <Component
      className={clsx(s.button, s[variant], fullwidth && s.fullWidth, className)}
      {...rest}
    >
      <Typography className={s.buttonChild} variant={'subtitle2'}>
        {children}
      </Typography>
    </Component>
  )
}
