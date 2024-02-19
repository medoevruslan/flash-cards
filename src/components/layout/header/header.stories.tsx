import ProfileImage from '@/assets/Ellipse 1.png'
import LogoImage from '@/assets/Logo.png'
import { Container } from '@/components/container/container'
import { Header } from '@/components/layout/header/header'
import { Logo } from '@/components/ui/logo'
import { Typography } from '@/components/ui/typography'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Header,
  parameters: {
    layout: 'full',
  },
  tags: ['autodocs'],
  title: 'Component/Header',
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const HeaderDefault: Story = {
  render: () => {
    return (
      <Header>
        <Container
          style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}
        >
          <Logo alt={'it-incubator'} src={LogoImage} />
          <div style={{ alignItems: 'center', cursor: 'pointer', display: 'flex', gap: '5px' }}>
            <Typography variant={'subtitle1'}>Username</Typography>
            <img
              alt={'user-image'}
              src={ProfileImage}
              style={{ display: 'block', objectFit: 'cover', width: '100%' }}
            />
          </div>
        </Container>
      </Header>
    )
  },
}
