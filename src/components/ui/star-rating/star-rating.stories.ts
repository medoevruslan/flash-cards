import { Meta, StoryObj } from '@storybook/react'

import { StarRating } from './'

const meta = {
  component: StarRating,
  tags: ['autodocs'],
  title: 'Component/StarRating',
} satisfies Meta<typeof StarRating>

export default meta

type Story = StoryObj<typeof meta>

export const StarRatingInteractive: Story = {
  args: {
    gap: 0,
    interactive: true,
    stars: 6,
  },
}

export const StarRatingNonStatic: Story = {
  args: {
    defaultGrade: 3,
    gap: 0,
    stars: 6,
  },
}
