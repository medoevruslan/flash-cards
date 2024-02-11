import * as Tabs from '@radix-ui/react-tabs'

import s from './tab-switcher.module.scss'

type TabSwitcherProps = {
  tabs: { content: string; disabled?: boolean; name: string }[]
}

export const TabSwitcher = ({ tabs = [] }: TabSwitcherProps) => {
  return (
    <Tabs.Root defaultValue={tabs[0].name + 0}>
      <Tabs.List className={s.tabsContainer}>
        {tabs.map((t, idx) => (
          <Tabs.Trigger
            className={s.tab}
            disabled={t?.disabled}
            key={t.name + idx}
            value={t.name + idx}
          >
            {t.name + idx}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {tabs.map((t, idx) => (
        <Tabs.Content key={t.name + idx} value={t.name + idx}>
          Content for: {t.name + idx}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
