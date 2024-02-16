import { ComponentProps } from 'react'

import { Icon } from '@/components/ui/icon/icon'
import { Select, SelectOption } from '@/components/ui/select'
import { Typography } from '@/components/ui/typography'
import { usePagination } from '@/hooks/usePagination'
import clsx from 'clsx'

import s from './pagination.module.scss'

export type PaginationProps = {
  currentPage: number
  onPageChange: (page: number) => void
  pageSize: number
  siblingCount?: number
  totalCount: number
} & ComponentProps<'div'>

export const Pagination = ({
  children,
  className,
  currentPage = 1,
  onPageChange,
  pageSize,
  siblingCount,
  totalCount,
}: PaginationProps) => {
  const paginationRange = usePagination({ currentPage, pageSize, siblingCount, totalCount })

  const isDots = (el: unknown) => el === '...'
  const isActive = (num: number | string) => !isDots(num) && num === currentPage
  const lastPage = Math.ceil(totalCount / pageSize)

  const handleForward = () => onPageChange(currentPage + 1)

  const handleBackward = () => onPageChange(currentPage - 1)

  const handleClick = (page: number | string) => {
    const number = Number(page)

    if (!isNaN(number)) {
      page !== currentPage && onPageChange(number)
    }
  }

  const pages = paginationRange.map((el, idx) => {
    return (
      <a
        className={clsx(s.page, isActive(el) ? s.active : '', isDots(el) ? s.dots : '')}
        href={'javascript:void;'}
        key={idx}
        onClick={() => handleClick(el)}
      >
        <Typography variant={'body2'}>{el}</Typography>
      </a>
    )
  })

  return (
    <div className={clsx(s.container, className)}>
      <div className={s.pages}>
        <button className={s.arrow} disabled={currentPage <= 1} onClick={handleBackward}>
          <Icon height={16} name={'arrow-back'} width={16} />
        </button>
        {pages}
        <button className={s.arrow} disabled={currentPage >= lastPage} onClick={handleForward}>
          <Icon height={16} name={'arrow-forward'} width={16} />
        </button>
      </div>
      {children}
    </div>
  )
}

export type PostsPerPageProps = {
  onChange: (value: string) => void
  options: number[]
}

export const PostsPerPage = ({ onChange, options }: PostsPerPageProps) => {
  return (
    <div className={s.containerPerPage}>
      <Typography variant={'body2'}>Показать</Typography>
      <Select
        className={s.selectPerPage}
        onValueChange={onChange}
        placeholder={options[0].toString()}
      >
        {options.map(opt => (
          <SelectOption key={opt} value={opt.toString()}>
            {opt}
          </SelectOption>
        ))}
      </Select>
      <Typography variant={'body2'}>на странице</Typography>
    </div>
  )
}
