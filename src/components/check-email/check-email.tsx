import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon/icon'
import { Typography } from '@/components/ui/typography'

import s from '@/components/check-email/check-email.module.scss'

export const CheckEmail = () => {
  return (
    <Card className={s.card}>
      <header className={s.header}>
        <Typography variant={'h1'}>Check Email</Typography>
      </header>
      <Icon height={96} name={'check-email'} width={96} />
      <Typography className={s.info} variant={'body2'}>
        We’ve sent an Email with instructions to example@mail.com
      </Typography>
      <Button as={'a'} className={s.backSignIn} fullwidth href={'#'} variant={'primary'}>
        <Typography variant={'subtitle2'}>Back to Sign In</Typography>
      </Button>
    </Card>
  )
}
