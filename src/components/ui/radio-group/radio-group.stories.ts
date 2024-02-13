import { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './'

const meta = {
  argTypes: {
    onValueChange: { action: 'value changed' },
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
  },
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Component/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta

type Story = StoryObj<typeof meta>

export const RadioGroupDefault: Story = {
  args: {
    items: [
      { label: 'RadioGroup1', value: 'RadioGroup1' },
      { label: 'RadioGroup2', value: 'RadioGroup2' },
      { label: 'RadioGroup3', value: 'RadioGroup3' },
    ],
  },
}
