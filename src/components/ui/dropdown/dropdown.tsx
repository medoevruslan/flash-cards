import React from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Item as RadixDropDownItem } from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import s from './dropdown.module.scss'

import { Icon } from '../icon/icon'

export type DropdownProps = {
  children?: React.ReactNode
  className?: string
  headerItem?: React.ReactNode
  rootTrigger?: React.ReactNode
}

export const Dropdown = ({
  children,
  className,
  headerItem,
  rootTrigger = <Icon height={'24'} name={'more'} viewBox={'0 0 24 24'} width={'24'} />,
}: DropdownProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={s.rootTrigger}>{rootTrigger}</DropdownMenu.Trigger>
      <DropdownMenu.Separator />
      <DropdownMenu.Portal>
        <DropdownMenu.Content align={'end'} className={clsx(s.content, className)}>
          {headerItem && (
            <>
              <DropdownMenu.Item className={s.headerItem}>{headerItem}</DropdownMenu.Item>
              <DropdownMenu.Separator className={s.separator} />
            </>
          )}
          {children}
          <DropdownMenu.Arrow className={s.contentArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

type DropdownItemProps = {
  children?: React.ReactNode
} & React.ComponentProps<typeof RadixDropDownItem>

export const DropdownItem = ({ children, ...props }: DropdownItemProps) => (
  <DropdownMenu.Item {...props} className={clsx(s.item, props?.className)}>
    {children}
  </DropdownMenu.Item>
)

export const DropdownItemSeparator = () => <div className={s.separator} />
