import { useState } from 'react'

import ProfileImage from '@/assets/Ellipse 1.png'
import { Meta, StoryObj } from '@storybook/react'

import { PersonalInformation } from './'

const meta = {
  argTypes: {
    onImageChange: { action: 'image changed' },
    onLogout: { action: 'logout is clicked' },
  },
  component: PersonalInformation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Auth/PersonalInformation',
} satisfies Meta<typeof PersonalInformation>

export default meta

type Story = StoryObj<typeof meta>

export const PersonalInformationDefault: Story = {
  args: {
    email: 'j&johnson@gmail.com',
    imageSrc: ProfileImage,
    name: 'Ivan',
  },

  render: ({ email, imageSrc, name, onImageChange, onLogout }) => {
    const [userName, setUserName] = useState(name)

    return (
      <PersonalInformation
        email={email}
        imageSrc={imageSrc}
        name={userName}
        onImageChange={onImageChange}
        onLogout={onLogout}
        onNameChange={setUserName}
      />
    )
  },
}
