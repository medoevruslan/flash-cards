import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './profile.module.scss'

type Props = {
  className?: string
  email?: string
  imageSrc?: string
  name: string
}

export const Profile = ({ className = '', email, imageSrc, name }: Props) => {
  return (
    <div className={clsx(s.profileContainer, className)}>
      <img alt={email || name} src={imageSrc} />
      <div className={s.textInfo}>
        <Typography variant={'subtitle2'}>{name}</Typography>
        {email && (
          <Typography className={s.email} variant={'caption'}>
            {email}
          </Typography>
        )}
      </div>
    </div>
  )
}
