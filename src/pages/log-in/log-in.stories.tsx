import { Meta, StoryObj } from '@storybook/react'

import { LogIn } from './'

const meta = {
  component: LogIn,
  tags: ['autodocs'],
  title: 'Pages/Login',
} satisfies Meta<typeof LogIn>

export default meta

type Story = StoryObj<typeof meta>

export const LoginPage: Story = {}
