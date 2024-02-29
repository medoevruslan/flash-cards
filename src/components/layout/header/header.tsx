import { ComponentProps } from 'react'
import { useSelector } from 'react-redux'

import LogoImage from '@/assets/Logo.png'
import { Container } from '@/components/container/container'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'
import { Typography } from '@/components/ui/typography'
import { selectUser } from '@/services/app/app.selectors'
import clsx from 'clsx'

import s from './header.module.scss'

export const Header = ({ children, className, ...rest }: ComponentProps<'header'>) => {
  const user = useSelector(selectUser)

  return (
    <header className={clsx(s.header, className)} {...rest}>
      <Container>
        <div className={s.container}>
          <Logo alt={'it-incubator'} src={LogoImage} />
          {user ? (
            <div className={s.userItems}>
              <Typography className={s.username} variant={'subtitle1'}>
                {user.name ?? 'user'}
              </Typography>
              {user.avatar && <img alt={'user-image'} src={user.avatar} />}
            </div>
          ) : (
            <Button as={'a'} href={'/login'} variant={'primary'}>
              Sign In
            </Button>
          )}
        </div>
      </Container>
    </header>
  )
}
