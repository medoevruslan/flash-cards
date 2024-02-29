import {
  DeckTab,
  TabSwitcherDeck,
} from '@/components/table-deck/tab-switcher-deck/tab-switcher-deck'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from '@/pages/deck-list/deck-list.module.scss'

type Props = {
  className?: string
  minMaxCards?: number[]
  onClearFilters?: () => void
  onSearch?: () => void
  onSearchChange?: (value: string) => void
  onSliderChange?: (value: number[]) => void
  onTabsChange?: (value: string) => void
  search?: string
  selectedTab?: DeckTab
}

export const TableNav = ({
  className,
  minMaxCards,
  onClearFilters,
  onSearchChange,
  onSliderChange,
  onTabsChange,
  search,
  selectedTab,
}: Props) => {
  return (
    <div className={clsx(s.tableNav, className)}>
      <Input
        className={s.search}
        clearInput={() => onSearchChange?.('')}
        onChangeText={onSearchChange}
        type={'search'}
        value={search}
      />
      <div>
        <Typography variant={'body2'}>Show decks cards</Typography>
        <TabSwitcherDeck className={s.tabs} onChange={onTabsChange} value={selectedTab} />
      </div>
      <div>
        <Typography variant={'body2'}>Number of cards</Typography>
        <Slider onChange={onSliderChange} values={minMaxCards} />
      </div>
      <Button onClick={onClearFilters} variant={'secondary'}>
        Clear Filter
      </Button>
    </div>
  )
}
