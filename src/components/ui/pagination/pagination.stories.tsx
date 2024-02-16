import { useState } from 'react'

import { Pagination, PostsPerPage } from '@/components/ui/pagination/pagination'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    onPageChange: { action: 'page is changed to:' },
  },
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Component/Pagination',
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof meta>

export const PaginationDefault: Story = {
  args: {
    currentPage: 1,
    pageSize: 4,
    totalCount: 55,
  },
}

export const PaginationInteractive: Story = {
  args: {
    currentPage: 1,
    pageSize: 4,
    totalCount: 55,
  },
  render: ({ pageSize, totalCount }) => {
    const [current, setCurrent] = useState(1)

    return (
      <Pagination
        currentPage={current}
        onPageChange={setCurrent}
        pageSize={pageSize}
        totalCount={totalCount}
      />
    )
  },
}

export const PaginationWithPerPageSelect: Story = {
  args: {
    currentPage: 1,
    pageSize: 4,
    totalCount: 55,
  },
  render: ({ pageSize: postsPerPage, totalCount }) => {
    const [current, setCurrent] = useState(1)
    const [pageSize, setPageSize] = useState(postsPerPage)

    const prePageOptions = [10, 20, 30, 50, 100]

    return (
      <Pagination
        currentPage={current}
        onPageChange={setCurrent}
        pageSize={pageSize}
        totalCount={totalCount}
      >
        <PostsPerPage onChange={value => setPageSize(Number(value))} options={prePageOptions} />
      </Pagination>
    )
  },
}
