import { ProfileHeader } from '@/components/profile'
import { Dropdown } from '@/components/ui/dropdown'
import { Meta, StoryObj } from '@storybook/react'

import ProfileImage from '../../../assets/Ellipse 1.png'

const meta = {
  argTypes: {
    onChange: { action: 'selected:' },
  },
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
  args: {
    dropdownItems: [{ text: 'Learn' }, { text: 'Edit' }, { text: 'Delete' }],
  },
}

export const DropdownWithIcons: Story = {
  args: {
    dropdownItems: [
      { icon: 'eye-outline', text: 'Learn' },
      { icon: 'edit', text: 'Edit' },
      { icon: 'delete', text: 'Delete' },
    ],
  },
}

export const DropdownWithProfile: Story = {
  args: {
    dropdownItems: [
      { icon: 'edit', text: 'My Profile' },
      { icon: 'delete', text: 'Sign Out' },
    ],
    headerItem: (
      <ProfileHeader email={'j&johnson@gmail.com'} imageSrc={ProfileImage} name={'Ivan'} />
    ),
    rootTrigger: <img alt={'open dropdown'} src={ProfileImage} />,
  },
}
