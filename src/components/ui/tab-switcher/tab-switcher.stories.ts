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
    tabs: new Array(4).fill({ content: '', name: 'Switch' }),
  },
}

export const DeafaultTabDisabled: Story = {
  args: {
    tabs: new Array(4)
      .fill({ content: '', name: 'Switch' })
      .map((t, idx) => (idx === 3 ? { ...t, disabled: true } : t)),
  },
}
