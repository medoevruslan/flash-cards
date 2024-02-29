import ImagePlaceholder from '@/assets/image-placeholder.png'
import { Table } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { ResponseDecks } from '@/services/definitions'
import clsx from 'clsx'

import s from './table-deck.module.scss'

import { TableActions } from './table-actions/table-actions'

type Props = {
  className?: string
  decks: Pick<ResponseDecks, 'items'>['items']
}

export const TableDeck = ({ className, decks }: Props) => {
  return (
    <Table.Root className={clsx(s.table, className)}>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>
            <Typography variant={'subtitle2'}>Name</Typography>
          </Table.HeadCell>
          <Table.HeadCell>
            <Typography variant={'subtitle2'}>Cards</Typography>
          </Table.HeadCell>
          <Table.HeadCell>
            <Typography variant={'subtitle2'}>Last Updated</Typography>
          </Table.HeadCell>
          <Table.HeadCell>
            <Typography variant={'subtitle2'}>Created by</Typography>
          </Table.HeadCell>
          <Table.HeadCell />
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {decks &&
          decks.map(deck => (
            <Table.Row key={deck.id + deck.userId}>
              <Table.Cell>
                <div className={s.deckName}>
                  <img
                    alt={`cover image for ${deck.name}`}
                    className={s.deckCover}
                    src={deck.cover ?? ImagePlaceholder}
                  />
                  {deck.name}
                </div>
              </Table.Cell>
              <Table.Cell>{deck.cardsCount ?? 0}</Table.Cell>
              <Table.Cell>{new Date(deck.updated).toLocaleDateString('ru-Ru')}</Table.Cell>
              <Table.Cell>{deck.author.name ?? ''}</Table.Cell>
              <Table.Cell>
                <TableActions />
              </Table.Cell>
            </Table.Row>
          ))}
      </Table.Body>
    </Table.Root>
  )
}
