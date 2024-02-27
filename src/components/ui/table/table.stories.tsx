import SampleImage from '@/assets/table-image-sample.png'
import { Icon } from '@/components/ui/icon/icon'
import { StarRating } from '@/components/ui/star-rating'
import { Typography } from '@/components/ui/typography'
import { Meta, StoryObj } from '@storybook/react'

import s from './table.module.scss'

import { Table } from './'

const meta = {
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Component/Table',
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof meta>

const cols: string[] = Array.from({ length: 6 }, (_, idx) => 'Name' + (idx + 1))

export const TableDefault: Story = {
  render: () => {
    const { Body, Cell, Head, HeadCell, Root, Row } = Table

    return (
      <Root>
        <Head>
          <Row>
            {cols.map(col => (
              <HeadCell key={col}>
                <Typography variant={'subtitle2'}>{col}</Typography>
              </HeadCell>
            ))}
          </Row>
        </Head>
        <Body>
          <Row>
            <Cell style={{ alignItems: 'center', display: 'flex', gap: '10px' }}>
              <img alt={'avatar'} src={SampleImage} />
              <Typography variant={'body2'}>Name</Typography>
            </Cell>
            <Cell>
              <Typography variant={'body2'}>Name</Typography>
            </Cell>
            <Cell>
              <Typography variant={'body2'}>Name</Typography>
            </Cell>
            <Cell>
              <Typography variant={'body2'}>Name</Typography>
            </Cell>
            <Cell>
              <StarRating
                onChange={value => ({
                  action: 'stars rated: ' + value,
                })}
                stars={5}
              />
            </Cell>
            <Cell>
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
            </Cell>
          </Row>
        </Body>
      </Root>
    )
  },
}
