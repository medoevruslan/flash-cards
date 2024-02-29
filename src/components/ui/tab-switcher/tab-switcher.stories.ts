import { TabSwitcher } from '@/components/ui/tab-switcher/tab-switcher'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    onChange: { action: 'tab changed' },
  },
  component: TabSwitcher,
  tags: ['autodocs'],
  title: 'Component/Tab Switcher',
} satisfies Meta<typeof TabSwitcher>

export default meta

type Story = StoryObj<typeof meta>

export const DeafaultTabSwitcher: Story = {
  args: {
    tabs: Array.from({ length: 4 }, (_, idx) => ({ content: '', name: 'Switch' + idx })),
  },
}

export const DeafaultTabDisabled: Story = {
  args: {
    tabs: Array.from({ length: 4 }, (_, idx) => ({
      content: '',
      disabled: idx === 3,
      name: 'Switch' + idx,
    })),
  },
}
