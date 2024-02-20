import { Meta, StoryObj } from '@storybook/react'

import { Signin } from './'

const meta = {
  component: Signin,
  tags: ['autodocs'],
  title: 'Pages/Signin',
} satisfies Meta<typeof Signin>

export default meta

type Story = StoryObj<typeof meta>

export const SigninPage: Story = {}
