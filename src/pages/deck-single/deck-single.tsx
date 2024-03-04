import { useState } from 'react'
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom'

import { Container } from '@/components/container/container'
import { TableDeckCards } from '@/components/table-deck/table-deck-cards/table-deck-cards'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/icon'
import { Input } from '@/components/ui/input'
import { Pagination, PostsPerPage } from '@/components/ui/pagination'
import { Typography } from '@/components/ui/typography'
import { handleChangeWithPageReset } from '@/pages/deck-list'
import { useGetDeckCardsQuery } from '@/services/decks/decks.service'
import { capitilizeFirst } from '@/utils/string-utils'
import { useDebounce } from 'use-debounce'

import s from './deck-single.module.scss'

const postsOnPage = ['10', '20', '30', '50', '100'] as const

export const DeckSingle = () => {
  const [searchCards, setSearchCards] = useState('')
  const params = useParams<{ id: string }>()
  const [page, setPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState<(typeof postsOnPage)[number]>('10')

  const [searchParams] = useSearchParams()

  const userDeckName = capitilizeFirst(searchParams.get('deck-name') || 'friend')

  const [searchDebounced] = useDebounce(searchCards, 700)

  const { data, isError, isLoading } = useGetDeckCardsQuery({
    answer: searchDebounced,
    currentPage: page,
    id: params.id || '',
    itemsPerPage: Number(postsPerPage),
    question: searchDebounced,
  })

  const handleChangePostsPerPage = handleChangeWithPageReset(setPage, setPostsPerPage)

  if (isLoading) {
    return 'Loading...'
  }

  const cards = data?.items || []
  const totalPages = data?.pagination.totalPages || 0

  return (
    <Container>
      <section className={s.wrapper}>
        <Link to={'/'}>
          <Icon height={10} name={'arrow-back-long'} width={16} />
          <Typography variant={'body2'}>Back to Deck List</Typography>
        </Link>
        <div className={s.header}>
          <Typography variant={'h1'}>{`${userDeckName}'s Deck`}</Typography>
          <Button variant={'primary'}>Add New Deck</Button>
        </div>
        <Input
          className={s.search}
          onChangeText={setSearchCards}
          type={'search'}
          value={searchCards}
        />
        {cards.length ? (
          <>
            <TableDeckCards cards={cards} className={s.table} />
            <Pagination
              currentPage={page}
              onPageChange={setPage}
              postsPerPage={Number(postsPerPage)}
              totalCount={totalPages}
            >
              <PostsPerPage onChange={handleChangePostsPerPage} options={postsOnPage} />
            </Pagination>
          </>
        ) : (
          ''
        )}
      </section>
    </Container>
  )
}
