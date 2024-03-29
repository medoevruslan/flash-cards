import { Meta, StoryObj } from '@storybook/react'

import { CreateNewPasswordForm } from './'

const meta = {
  component: CreateNewPasswordForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Auth/CreateNewPasswordForm',
} satisfies Meta<typeof CreateNewPasswordForm>

export default meta

type Story = StoryObj<typeof meta>

export const CreateNewPasswordFormDefault: Story = {}
