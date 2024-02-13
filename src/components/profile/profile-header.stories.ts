import { ProfileHeader } from '@/components/profile'
import { Meta, StoryObj } from '@storybook/react'

import ProfileImage from '../../assets/Ellipse 1.png'

const meta = {
  component: ProfileHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Component/ProfileHeader',
} satisfies Meta<typeof ProfileHeader>

export default meta

type Story = StoryObj<typeof meta>

export const ProfileHeaderDefault: Story = {
  args: {
    email: 'j&johnson@gmail.com',
    imageSrc: ProfileImage,
    name: 'Ivan',
  },
}
