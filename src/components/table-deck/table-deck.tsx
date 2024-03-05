import { Link } from 'react-router-dom'

import ImagePlaceholder from '@/assets/image-placeholder.png'
import { Table } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { DeckItem } from '@/services/definitions'
import clsx from 'clsx'

import s from './table-deck.module.scss'

import { DecksActions } from './table-actions/decks-actions'

type Props = {
  className?: string
  decks: DeckItem[]
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
                <Link to={`/decks/${deck.id}?deck-name=${encodeURIComponent(deck.author.name)}`}>
                  <div className={s.deckName}>
                    <img
                      alt={`cover image for ${deck.name}`}
                      className={s.deckCover}
                      src={deck.cover ?? ImagePlaceholder}
                    />
                    {deck.name}
                  </div>
                </Link>
              </Table.Cell>
              <Table.Cell>{deck.cardsCount ?? 0}</Table.Cell>
              <Table.Cell>{new Date(deck.updated).toLocaleDateString('ru-Ru')}</Table.Cell>
              <Table.Cell>{deck.author.name ?? ''}</Table.Cell>
              <Table.Cell>
                <DecksActions />
              </Table.Cell>
            </Table.Row>
          ))}
      </Table.Body>
    </Table.Root>
  )
}
