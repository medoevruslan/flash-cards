import { ComponentProps } from 'react'

import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './table.module.scss'

export type RootProps = ComponentProps<'table'>
const Root = ({ children, className, ...props }: RootProps) => (
  <table className={clsx(s.root, className)} {...props}>
    {children}
  </table>
)

export type THeadProps = ComponentProps<'thead'>
const Head = ({ children, className, ...props }: THeadProps) => (
  <thead className={clsx(s.head, className)} {...props}>
    {children}
  </thead>
)

export type THeadCellProps = ComponentProps<'th'>
const HeadCell = ({ children, className, ...props }: THeadCellProps) => (
  <th className={clsx(s.cell, s.thCell, className)} {...props}>
    {children}
  </th>
)

export type TBodyProps = ComponentProps<'tbody'>
const Body = ({ children, className, ...props }: TBodyProps) => (
  <tbody className={clsx(s.tBody, className)} {...props}>
    {children}
  </tbody>
)

export type TCellProps = ComponentProps<'td'>
const Cell = ({ children, className, ...props }: TCellProps) => (
  <td className={clsx(s.cell, className)} {...props}>
    {children}
  </td>
)

export type TRowProps = ComponentProps<'tr'>
const Row = ({ children, className, ...props }: TRowProps) => (
  <tr className={clsx(s.row, className)} {...props}>
    {children}
  </tr>
)

export type MobileTableProps = ComponentProps<'div'>

export type HeaderProps = ComponentProps<'div'>

const Header = ({ children, className, ...props }: HeaderProps) => {
  return (
    <div className={clsx(s.mobileRow, s.head, className)} {...props}>
      <Typography variant={'subtitle2'}>Name</Typography>{' '}
    </div>
  )
}

export type MobileRowProps = ComponentProps<'div'>
const MobileRow = ({ children, className, ...props }: MobileRowProps) => {
  return (
    <div className={clsx(s.mobileRow, className)} {...props}>
      {children}
    </div>
  )
}

export type FooterProps = ComponentProps<'div'>
const Footer = ({ children, className, ...props }: FooterProps) => {
  return (
    <div className={clsx(s.head, s.mobileRow)} {...props}>
      {children}
    </div>
  )
}

export type MobileRootProps = ComponentProps<'div'>
const MobileRoot = ({ children, className, ...props }: MobileRootProps) => {
  return (
    <div className={clsx(s.mobile, className)} {...props}>
      {children}
    </div>
  )
}

export const Table = {
  Body,
  Cell,
  Head,
  HeadCell,
  Mobile: {
    Footer,
    Header,
    Root: MobileRoot,
    Row: MobileRow,
  },
  Root,
  Row,
}
