import { Signup } from '@/pages/signup'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Signup,
  tags: ['autodocs'],
  title: 'Pages/SignUp',
} satisfies Meta<typeof Signup>

export default meta

type Story = StoryObj<typeof meta>

export const SignupPage: Story = {}
