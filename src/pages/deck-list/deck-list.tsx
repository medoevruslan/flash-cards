import { useState } from 'react'

import { Container } from '@/components/container/container'
import { TableDeck } from '@/components/table-deck'
import { DeckTab } from '@/components/table-deck/tab-switcher-deck/tab-switcher-deck'
import { TableNav } from '@/components/table-deck/table-nav/table-nav'
import { Button } from '@/components/ui/button'
import { Pagination, PostsPerPage } from '@/components/ui/pagination'
import { Typography } from '@/components/ui/typography'
import { useGetDecksQuery } from '@/services/base-api/base-api'
import { useDebounce } from 'use-debounce'

import s from './deck-list.module.scss'

const initialFilters = {
  cardsType: 'All Cards' as const,
  minMaxCards: [0, 50],
  searchDefault: '',
}

const postsOnPage = ['10', '20', '30', '50', '100'] as const

export const DeckList = () => {
  const [searchCards, setSearchCards] = useState(initialFilters.searchDefault)
  const [minMaxCards, setMinMaxCards] = useState(initialFilters.minMaxCards)
  const [selectedTab, setSelectedTab] = useState<DeckTab>(initialFilters.cardsType)
  const [postsPerPage, setPostsPerPage] = useState<(typeof postsOnPage)[number]>('10')
  const [page, setPage] = useState(1)

  const { data, isLoading } = useGetDecksQuery({
    currentPage: page,
    itemsPerPage: Number(postsPerPage),
    maxCardsCount: useDebounce(minMaxCards[1], 700)[0],
    minCardsCount: useDebounce(minMaxCards[0], 700)[0],
    name: useDebounce(searchCards, 700)[0],
  })

  const handleClearFilters = () => {
    setSearchCards(initialFilters.searchDefault)
    setMinMaxCards(initialFilters.minMaxCards)
    setSelectedTab(initialFilters.cardsType)
  }

  const handleChangePostsPerPage = handleChangeWithPageReset(setPage, setPostsPerPage)
  const handleSearchCards = handleChangeWithPageReset(setPage, setSearchCards)
  const handleMinMaxCards = handleChangeWithPageReset(setPage, setMinMaxCards)
  const handleSelectTab = handleChangeWithPageReset(setPage, setSelectedTab)

  if (isLoading) {
    return 'loading...'
  }

  const decks = data?.items || []
  const totalPages = data?.pagination.totalPages || 0

  return (
    <Container>
      <section className={s.wrapper}>
        <div className={s.header}>
          <Typography variant={'h1'}>Decks list</Typography>
          <Button variant={'primary'}>Add New Deck</Button>
        </div>
        <TableNav
          minMaxCards={minMaxCards}
          onClearFilters={handleClearFilters}
          onSearchChange={handleSearchCards}
          onSliderChange={handleMinMaxCards}
          onTabsChange={value => handleSelectTab(value as DeckTab)}
          search={searchCards}
          selectedTab={selectedTab}
        />
        <TableDeck className={s.table} decks={decks} />
        <Pagination
          currentPage={page}
          onPageChange={setPage}
          pageSize={Number(postsPerPage)}
          totalCount={totalPages}
        >
          <PostsPerPage onChange={handleChangePostsPerPage} options={postsOnPage} />
        </Pagination>
      </section>
    </Container>
  )
}

const handleChangeWithPageReset = <T,>(
  pageReset: (page: number) => void,
  callback: (...args: T[]) => void
) => {
  return (...args: T[]) => {
    pageReset(1)
    callback(...args)
  }
}
