import { useState } from 'react'

import ReactImage from '@/assets/React-image.png'
import { Button } from '@/components/ui/button'
import { CheckboxInput } from '@/components/ui/checkbox'
import { Icon } from '@/components/ui/icon/icon'
import { Input } from '@/components/ui/input'
import { Modal } from '@/components/ui/modal/modal'
import { Select, SelectOption } from '@/components/ui/select'
import { Typography } from '@/components/ui/typography'
import { Meta, StoryObj } from '@storybook/react'

import s from './modal.module.scss'

const meta = {
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Component/Modal',
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

export const ModalDefault: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)} variant={'outlined'}>
          Open modal
        </Button>
        <Modal onClose={() => setOpen(false)} open={open} title={'Title'}>
          <Typography style={{ marginBottom: '40px' }} variant={'body1'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamdsa
          </Typography>
          <Select className={s.select}>
            <SelectOption value={'opt1'}>opt1</SelectOption>
            <SelectOption value={'opt2'}>opt2</SelectOption>
            <SelectOption value={'opt3'}>opt3</SelectOption>
          </Select>
          <Input label={'input'} placeholder={'Your input'} style={{ width: '100%' }} />
          <Input label={'input'} placeholder={'Your input'} style={{ width: '100%' }} />
          <Input label={'input'} placeholder={'Your input'} style={{ width: '100%' }} />
          <CheckboxInput label={'Check-box'} style={{ marginTop: '30px' }} />
        </Modal>
      </>
    )
  },
}

export const ModalQuestionAnswer: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)} variant={'outlined'}>
          Open modal
        </Button>
        <Modal onClose={() => setOpen(false)} open={open} title={'Title'}>
          <Typography variant={'subtitle2'}>Question</Typography>
          <Input
            label={'Question'}
            placeholder={'Your input'}
            style={{ marginBottom: '12px', width: '100%' }}
          />
          <img
            alt={'question'}
            src={ReactImage}
            style={{ display: 'block', maxWidth: '100%', objectFit: 'cover' }}
          />
          <Button fullwidth style={{ margin: '24px 0' }} variant={'secondary'}>
            <Icon
              height={16}
              name={'image'}
              style={{ display: 'inline-block', marginRight: '5px', verticalAlign: 'middle' }}
              width={16}
            />
            <Typography
              style={{ display: 'inline-block', verticalAlign: 'middle' }}
              variant={'subtitle2'}
            >
              Change cover
            </Typography>
          </Button>
          <Typography variant={'subtitle2'}>Answer</Typography>
          <Input
            label={'Answer'}
            placeholder={'Your input'}
            style={{ marginBottom: '12px', width: '100%' }}
          />
          <img
            alt={'answer'}
            src={ReactImage}
            style={{ display: 'block', maxWidth: '100%', objectFit: 'cover' }}
          />
          <Button fullwidth style={{ margin: '24px 0' }} variant={'secondary'}>
            <Icon
              height={16}
              name={'image'}
              style={{ display: 'inline-block', marginRight: '5px', verticalAlign: 'middle' }}
              width={16}
            />
            <Typography
              style={{ display: 'inline-block', verticalAlign: 'middle' }}
              variant={'subtitle2'}
            >
              Change cover
            </Typography>
          </Button>
          <CheckboxInput label={'Check-box'} style={{ marginTop: '30px' }} />
        </Modal>
      </>
    )
  },
}

export const ModalWithButtons: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)} variant={'outlined'}>
          Open modal
        </Button>
        <Modal
          onClose={() => setOpen(false)}
          open={open}
          style={{ width: '500px' }}
          title={'Title'}
        >
          <Select className={s.select}>
            <SelectOption value={'opt1'}>opt1</SelectOption>
            <SelectOption value={'opt2'}>opt2</SelectOption>
            <SelectOption value={'opt3'}>opt3</SelectOption>
          </Select>
          <Input label={'input'} placeholder={'Your input'} style={{ width: '100%' }} />
          <Input label={'input'} placeholder={'Your input'} style={{ width: '100%' }} />
          <Input label={'input'} placeholder={'Your input'} style={{ width: '100%' }} />
          <CheckboxInput label={'Check-box'} style={{ marginTop: '30px' }} />
          <footer
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '45px 0 36px',
            }}
          >
            <Button variant={'secondary'}>Button secondary</Button>
            <Button variant={'primary'}>Button primary</Button>
          </footer>
        </Modal>
      </>
    )
  },
}
