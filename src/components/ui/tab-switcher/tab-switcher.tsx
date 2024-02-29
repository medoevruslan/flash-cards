import { Typography } from '@/components/ui/typography'
import * as Tabs from '@radix-ui/react-tabs'
import clsx from 'clsx'

import s from './tab-switcher.module.scss'

type Tab = {
  content?: string
  disabled?: boolean
  name: string
}

export type TabSwitcherProps = {
  className?: string
  defaultValue?: string
  label?: string
  onChange?: (value: Tab['name']) => void
  tabs: Tab[]
}

export const TabSwitcher = ({
  className,
  defaultValue,
  label,
  onChange,
  tabs = [],
}: TabSwitcherProps) => {
  return (
    <div className={clsx(className)}>
      {label && (
        <Typography className={s.label} variant={'body2'}>
          {label}
        </Typography>
      )}
      <Tabs.Root
        className={s.root}
        defaultValue={defaultValue ?? tabs[0]?.name}
        onValueChange={onChange}
        value={defaultValue}
      >
        <Tabs.List className={s.tabsContainer}>
          {tabs.map(t => (
            <Tabs.Trigger className={s.tab} disabled={t?.disabled} key={t.name} value={t.name}>
              {t.name}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {tabs.map((t, idx) => (
          <Tabs.Content key={t.name + idx} value={t.name + idx}>
            {t?.content}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  )
}
