import { ComponentProps } from 'react'

import ProfileImage from '@/assets/Ellipse 1.png'
import LogoImage from '@/assets/Logo.png'
import { Container } from '@/components/container/container'
import { Logo } from '@/components/ui/logo'
import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './header.module.scss'

export const Header = ({ children, className, ...rest }: ComponentProps<'header'>) => {
  return (
    <header className={clsx(s.header, className)} {...rest}>
      <Container>
        <div className={s.container}>
          <Logo alt={'it-incubator'} src={LogoImage} />
          <div className={s.userItems}>
            <Typography className={s.username} variant={'subtitle1'}>
              Username
            </Typography>
            <img alt={'user-image'} src={ProfileImage} />
          </div>
        </div>
      </Container>
    </header>
  )
}
