import ImagePlaceholder from '@/assets/image-placeholder.png'
import { Icon } from '@/components/ui/icon/icon'
import { Table } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { ResponseDecks } from '@/services/definitions'

import s2 from './table-deck.module.scss'
import s from '@/components/ui/table/table.module.scss'

type Props = {
  decks: Pick<ResponseDecks, 'items'>['items']
}

export const TableDeck = ({ decks }: Props) => {
  return (
    <Table.Root>
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
          <Table.HeadCell>
            <Icon
              className={s.actionIcon}
              height={15}
              name={'play-circle-icon'}
              style={{ marginRight: '10px' }}
              width={15}
            />
            <Icon
              className={s.actionIcon}
              height={15}
              name={'edit'}
              style={{ marginRight: '10px' }}
              width={15}
            />
            <Icon className={s.actionIcon} height={15} name={'delete'} width={15} />
          </Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {decks &&
          decks.map(deck => (
            <Table.Row key={deck.id + deck.userId}>
              <Table.Cell>
                <div className={s2.deckName}>
                  <img
                    alt={`cover image for ${deck.name}`}
                    className={s2.deckCover}
                    src={deck.cover ?? ImagePlaceholder}
                  />
                  {deck.name}
                </div>
              </Table.Cell>
              <Table.Cell>{deck.cardsCount ?? 0}</Table.Cell>
              <Table.Cell>
                {new Date(deck.updated).toLocaleString('ru-Ru', {
                  day: 'numeric',
                  month: 'numeric',
                  year: 'numeric',
                })}
              </Table.Cell>
              <Table.Cell>{deck.author.name ?? ''}</Table.Cell>
            </Table.Row>
          ))}
      </Table.Body>
    </Table.Root>
  )
}
