import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { Container } from '@/components/container/container'
import { TableDeckCards } from '@/components/table-deck/table-deck-cards/table-deck-cards'
import { Pagination, PostsPerPage } from '@/components/ui/pagination'
import { handleChangeWithPageReset } from '@/pages/deck-list'
import { useGetDeckCardsQuery } from '@/services/decks/decks.service'

const postsOnPage = ['10', '20', '30', '50', '100'] as const

export const DeckSingle = () => {
  const params = useParams<{ id: string }>()
  const [page, setPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState<(typeof postsOnPage)[number]>('10')

  const { data, isError, isLoading } = useGetDeckCardsQuery({
    currentPage: page,
    id: params.id || '',
    itemsPerPage: Number(postsPerPage),
  })

  const handleChangePostsPerPage = handleChangeWithPageReset(setPage, setPostsPerPage)

  if (isLoading) {
    return 'Loading...'
  }

  const cards = data?.items || []
  const totalPages = data?.pagination.totalPages || 0

  return (
    data?.items.length && (
      <Container>
        <Link to={'/'}>Back to Deck List</Link>
        <TableDeckCards cards={cards} />
        <Pagination
          currentPage={page}
          onPageChange={setPage}
          postsPerPage={Number(postsPerPage)}
          totalCount={totalPages}
        >
          <PostsPerPage onChange={handleChangePostsPerPage} options={postsOnPage} />
        </Pagination>
      </Container>
    )
  )
}
