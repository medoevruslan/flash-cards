import { Container } from '@/components/container/container'
import { TableDeck } from '@/components/table-deck'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TabSwitcher } from '@/components/ui/tab-switcher'
import { Typography } from '@/components/ui/typography'
import { useGetDecksQuery } from '@/services/base-api'

import s from './deck-list.module.scss'

export const DeckList = () => {
  const { data, isLoading } = useGetDecksQuery()

  if (isLoading) {
    return 'loading...'
  }

  return (
    <Container>
      <section>
        <div className={s.header}>
          <Typography variant={'h1'}>Decks list</Typography>
          <Button variant={'primary'}>Add New Deck</Button>
        </div>
        <div>
          <Input type={'search'} />
          <TabSwitcher tabs={[{ name: 'My Cards' }, { name: 'All Cards' }]} />
        </div>
        <TableDeck decks={data?.items || []} />
      </section>
    </Container>
  )
}
