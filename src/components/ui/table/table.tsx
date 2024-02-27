import { ComponentProps, ElementRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from './table.module.scss'

export type RootProps = ComponentProps<'table'>
const Root = ({ children, className, ...props }: RootProps) => (
  <table className={clsx(s.root, className)} {...props}>
    {children}
  </table>
)

export type THeadProps = ComponentProps<'thead'>
const Head = forwardRef<ElementRef<'thead'>, THeadProps>(
  ({ children, className, ...props }, ref) => (
    <thead className={clsx(s.head, className)} ref={ref} {...props}>
      {children}
    </thead>
  )
)

export type THeadCellProps = ComponentProps<'th'>
const HeadCell = forwardRef<ElementRef<'th'>, THeadCellProps>(
  ({ children, className, ...props }, ref) => (
    <th className={clsx(s.cell, s.thCell, className)} ref={ref} {...props}>
      {children}
    </th>
  )
)

export type TBodyProps = ComponentProps<'tbody'>
const Body = forwardRef<ElementRef<'tbody'>, TBodyProps>(
  ({ children, className, ...props }, ref) => (
    <tbody className={clsx(s.tBody, className)} ref={ref} {...props}>
      {children}
    </tbody>
  )
)

export type TCellProps = ComponentProps<'td'>
const Cell = forwardRef<ElementRef<'td'>, TCellProps>(({ children, className, ...props }, ref) => (
  <td className={clsx(s.cell, className)} ref={ref} {...props}>
    {children}
  </td>
))

export type TRowProps = ComponentProps<'tr'>
const Row = forwardRef<ElementRef<'tr'>, TRowProps>(({ children, className, ...props }, ref) => (
  <tr className={clsx(s.row, className)} ref={ref} {...props}>
    {children}
  </tr>
))

export const Table = {
  Body,
  Cell,
  Head,
  HeadCell,
  Root,
  Row,
}
