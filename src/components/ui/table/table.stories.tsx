import SampleImage from '@/assets/table-image-sample.png'
import { Icon } from '@/components/ui/icon/icon'
import { StarRating } from '@/components/ui/star-rating'
import { Typography } from '@/components/ui/typography'
import { Meta, StoryObj } from '@storybook/react'

import s from './table.module.scss'

import { Table } from './'

const meta = {
  tags: ['autodocs'],
  title: 'Component/Table',
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof meta>

const cols: string[] = Array.from({ length: 6 }, (_, idx) => 'Name' + (idx + 1))

export const TableDefault: Story = {
  render: () => {
    return (
      <Table.Root>
        <Table.Head>
          <Table.Row>
            {cols.map(col => (
              <Table.HeadCell key={col}>
                <Typography variant={'subtitle2'}>{col}</Typography>
              </Table.HeadCell>
            ))}
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell style={{ alignItems: 'center', display: 'flex', gap: '10px' }}>
              <img alt={'avatar'} src={SampleImage} />
              <Typography variant={'body2'}>Name</Typography>
            </Table.Cell>
            <Table.Cell>
              <Typography variant={'body2'}>Name</Typography>
            </Table.Cell>
            <Table.Cell>
              <Typography variant={'body2'}>Name</Typography>
            </Table.Cell>
            <Table.Cell>
              <Typography variant={'body2'}>Name</Typography>
            </Table.Cell>
            <Table.Cell>
              <StarRating
                onChange={value => ({
                  action: 'stars rated: ' + value,
                })}
                stars={5}
              />
            </Table.Cell>
            <Table.Cell>
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
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    )
  },
}

export const TableMobile: Story = {
  render: () => (
    <Table.Mobile.Root>
      <Table.Mobile.Header>Name</Table.Mobile.Header>
      <Table.Mobile.Row>
        <Typography variant={'body2'}>Name</Typography>
      </Table.Mobile.Row>
      <Table.Mobile.Row>
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
      </Table.Mobile.Row>
      <Table.Mobile.Row>
        <StarRating stars={5} />
      </Table.Mobile.Row>
      <Table.Mobile.Row className={s.profileInfo}>
        <img alt={'avatar'} src={SampleImage} />
        <Typography variant={'body2'}>Name</Typography>
      </Table.Mobile.Row>
      <Table.Mobile.Footer
        style={{ alignItems: 'center', cursor: 'pointer', display: 'flex', gap: '10px' }}
      >
        <Typography variant={'subtitle2'}>Name</Typography>
        <Icon className={s.iconSort} height={3} name={'chevron-up'} width={10} />
      </Table.Mobile.Footer>
    </Table.Mobile.Root>
  ),
}
