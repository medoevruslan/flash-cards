import { Meta, StoryObj } from '@storybook/react'

import { Slider } from './'

const meta = {
  component: Slider,
  tags: ['autodocs'],
  title: 'Component/Slider',
} satisfies Meta<typeof Slider>

export default meta

type Story = StoryObj<typeof meta>

export const SliderDefault: Story = {
  args: {},
}
