import { TabSwitcher, TabSwitcherProps } from '@/components/ui/tab-switcher'

export type DeckTab = 'All Cards' | 'My Cards'

const tabs = [
  {
    name: 'All Cards',
  },
  {
    name: 'My Cards',
  },
]

type Props = {
  value?: DeckTab
} & Omit<TabSwitcherProps, 'defaultValue' | 'tabs'>

export const TabSwitcherDeck = ({ value, ...props }: Props) => {
  return <TabSwitcher defaultValue={value} {...props} tabs={tabs} />
}
