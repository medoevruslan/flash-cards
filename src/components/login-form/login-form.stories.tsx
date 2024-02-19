import { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from './'

const meta = {
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Auth/LoginForm',
} satisfies Meta<typeof LoginForm>

export default meta

type Story = StoryObj<typeof meta>

export const LoginFormDefault: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
}
