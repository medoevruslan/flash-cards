import React, { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import s from './logo.module.scss'

export type LogoProps = {
  alt: string
  src: string
} & Omit<ComponentPropsWithoutRef<'img'>, 'alt' | 'src'>
export const Logo = React.forwardRef<HTMLImageElement, LogoProps>(
  ({ alt, src, ...props }: LogoProps, ref) => {
    return (
      <img alt={alt} className={clsx(s.logo, props.className)} ref={ref} src={src} {...props} />
    )
  }
)
