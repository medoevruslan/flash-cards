import { Profile } from '@/components/profile'
import { Dropdown, DropdownItem } from '@/components/ui/dropdown'
import { Icon } from '@/components/ui/icon/icon'
import { Meta, StoryObj } from '@storybook/react'

import s from '@/components/ui/dropdown/dropdown.module.scss'

import ProfileImage from '../../../assets/Ellipse 1.png'

const meta = {
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Component/Dropdown',
} satisfies Meta<typeof Dropdown>

export default meta

type Story = StoryObj<typeof meta>

export const DropdownWithoutIcons: Story = {
  render: () => {
    return (
      <Dropdown>
        <DropdownItem>
          <a href={'javascript:void;'}>Learn</a>
        </DropdownItem>
        <div className={s.separator} />
        <DropdownItem>
          <a href={'javascript:void;'}>Edit</a>
        </DropdownItem>
        <div className={s.separator} />
        <DropdownItem>
          <a href={'javascript:void;'}>Delete</a>
        </DropdownItem>
      </Dropdown>
    )
  },
}

export const DropdownWithIcons: Story = {
  render: () => {
    return (
      <Dropdown>
        <DropdownItem>
          <a href={'javascript:void;'}>
            <Icon height={20} name={'eye-outline'} width={20} />
            Learn
          </a>
        </DropdownItem>
        <div className={s.separator} />
        <DropdownItem>
          <a href={'javascript:void;'}>
            <Icon height={20} name={'edit'} width={20} />
            Edit
          </a>
        </DropdownItem>
        <div className={s.separator} />
        <DropdownItem>
          <a href={'javascript:void;'}>
            <Icon height={20} name={'delete'} width={20} />
            Delete
          </a>
        </DropdownItem>
      </Dropdown>
    )
  },
}

export const DropdownWithProfile: Story = {
  args: {
    headerItem: <Profile email={'j&johnson@gmail.com'} imageSrc={ProfileImage} name={'Ivan'} />,
    rootTrigger: (
      <img
        alt={'open dropdown'}
        aria-label={'open dropdown'}
        role={'button'}
        src={ProfileImage}
        width={'36px'}
      />
    ),
  },
  render: args => {
    return (
      <Dropdown {...args}>
        <DropdownItem>
          <a href={'javascript:void;'}>
            <Icon height={20} name={'edit'} width={20} />
            Edit
          </a>
        </DropdownItem>
        <div className={s.separator} />
        <DropdownItem>
          <a href={'javascript:void;'}>
            <Icon height={20} name={'delete'} width={20} />
            Delete
          </a>
        </DropdownItem>
      </Dropdown>
    )
  },
}
