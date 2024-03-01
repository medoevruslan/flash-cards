import { ComponentProps } from 'react'
import { useSelector } from 'react-redux'

import LogoImage from '@/assets/Logo.png'
import { Container } from '@/components/container/container'
import { Profile } from '@/components/profile'
import { Button } from '@/components/ui/button'
import { Dropdown, DropdownItem, DropdownItemSeparator } from '@/components/ui/dropdown'
import { Icon } from '@/components/ui/icon/icon'
import { Logo } from '@/components/ui/logo'
import { Typography } from '@/components/ui/typography'
import { selectUser } from '@/services/app/app.selectors'
import { useLogoutMutation } from '@/services/auth/signin-api'
import clsx from 'clsx'

import s from './header.module.scss'

export const Header = ({ children, className, ...rest }: ComponentProps<'header'>) => {
  const user = useSelector(selectUser)
  const [logout] = useLogoutMutation()

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
              <Dropdown
                headerItem={
                  <Profile email={user.email || '@email'} imageSrc={user.avatar} name={user.name} />
                }
                rootTrigger={
                  <img
                    alt={'open dropdown'}
                    aria-label={'open dropdown'}
                    role={'button'}
                    src={user.avatar}
                    width={'36px'}
                  />
                }
              >
                <DropdownItem>
                  <a href={'#'}>
                    <Icon height={20} name={'person-outline'} width={20} />
                    My Profile
                  </a>
                </DropdownItem>
                <DropdownItemSeparator />
                <DropdownItem onSelect={() => logout()}>
                  <Icon height={20} name={'log-out'} width={20} />
                  Logout
                </DropdownItem>
              </Dropdown>
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
