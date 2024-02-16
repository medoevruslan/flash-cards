import React from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdown.module.scss'

import { Icon } from '../icon/icon'

type DropdownItem = {
  icon?: string
  text: string
}

export type DropdownProps = {
  className?: string
  dropdownItems: DropdownItem[]
  headerItem?: React.ReactNode
  onChange?: (value: string) => void
  rootTrigger?: React.ReactNode
}

export const Dropdown = ({
  className = '',
  dropdownItems,
  headerItem,
  onChange,
  rootTrigger = <Icon height={'24'} name={'more'} viewBox={'0 0 24 24'} width={'24'} />,
}: DropdownProps) => {
  const finalClassName = s.content + (className ? ' ' + className : '')

  const handleSelectItem = (event: Event, value: string) => {
    event.preventDefault()
    onChange && onChange(value)
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={s.rootTrigger}>{rootTrigger}</DropdownMenu.Trigger>
      <DropdownMenu.Separator />
      <DropdownMenu.Portal>
        <DropdownMenu.Content align={'end'} className={finalClassName}>
          {headerItem && (
            <>
              <DropdownMenu.Item className={s.headerItem}>{headerItem}</DropdownMenu.Item>
              <DropdownMenu.Separator className={s.separator} />
            </>
          )}
          {dropdownItems.map((i, idx) => {
            const lastElem = dropdownItems.length - 1

            return (
              <>
                <DropdownMenu.Item
                  className={s.item}
                  key={i.text}
                  onSelect={event => handleSelectItem(event, i.text)}
                >
                  {i?.icon && <Icon height={20} name={i.icon} width={20} />}
                  {i.text}
                </DropdownMenu.Item>
                {idx < lastElem && <DropdownMenu.Separator className={s.separator} />}
              </>
            )
          })}
          <DropdownMenu.Arrow className={s.contentArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
