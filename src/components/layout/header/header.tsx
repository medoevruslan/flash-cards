import { ComponentProps } from 'react'

import clsx from 'clsx'

import s from './header.module.scss'

export const Header = ({ children, className, ...rest }: ComponentProps<'header'>) => {
  return (
    <header className={clsx(s.header, className)} {...rest}>
      {children}
    </header>
  )
}
