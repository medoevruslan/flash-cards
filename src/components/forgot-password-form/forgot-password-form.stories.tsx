import { Meta, StoryObj } from '@storybook/react'

import { ForgotPasswordForm } from './'

const meta = {
  component: ForgotPasswordForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Auth/ForgotPasswordForm',
} satisfies Meta<typeof ForgotPasswordForm>

export default meta

type Story = StoryObj<typeof meta>

export const ForgotPasswordFormDefault: Story = {}
