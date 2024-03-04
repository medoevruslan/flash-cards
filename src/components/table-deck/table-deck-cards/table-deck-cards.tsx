import ImagePlaceholder from '@/assets/image-placeholder.png'
import { CardsActions } from '@/components/table-deck/table-actions/cards-actions'
import { StarRating } from '@/components/ui/star-rating'
import { Table } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { Card } from '@/services/definitions'
import clsx from 'clsx'

import s from './table-deck-cards.module.scss'

type Props = {
  cards: Card[]
  className?: string
}

export const TableDeckCards = ({ cards, className }: Props) => {
  return (
    <Table.Root className={clsx(s.table, className)}>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>
            <Typography variant={'subtitle2'}>Question</Typography>
          </Table.HeadCell>
          <Table.HeadCell>
            <Typography variant={'subtitle2'}>Answer</Typography>
          </Table.HeadCell>
          <Table.HeadCell>
            <Typography variant={'subtitle2'}>Last Updated</Typography>
          </Table.HeadCell>
          <Table.HeadCell>
            <Typography variant={'subtitle2'}>Grade</Typography>
          </Table.HeadCell>
          <Table.HeadCell />
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {cards &&
          cards.map(card => (
            <Table.Row key={card.id + card.userId}>
              <Table.Cell>
                <div className={s.cardName}>
                  <img
                    alt={`cover image for ${card.question}`}
                    className={s.cardCover}
                    src={card.questionImg ?? ImagePlaceholder}
                  />
                  <p className={s.cardText}>{card.question}</p>
                </div>
              </Table.Cell>
              <Table.Cell>
                <div className={s.cardName}>
                  <img
                    alt={`cover image for ${card.answer}`}
                    className={s.cardCover}
                    src={card.answerImg ?? ImagePlaceholder}
                  />
                  <p className={s.cardText}>{card.answer}</p>
                </div>
              </Table.Cell>
              <Table.Cell>{new Date(card.updated).toLocaleDateString('ru-Ru')}</Table.Cell>
              <Table.Cell>
                <StarRating defaultGrade={card.grade} stars={5} />
              </Table.Cell>
              <Table.Cell>
                <CardsActions />
              </Table.Cell>
            </Table.Row>
          ))}
      </Table.Body>
    </Table.Root>
  )
}
