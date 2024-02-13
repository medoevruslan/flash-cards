import { Typography } from '@/components/ui/typography'

import s from './profile-header.module.scss'

type Props = {
  className?: string
  email?: string
  imageSrc?: string
  name: string
}

export const ProfileHeader = ({ className = '', email, imageSrc, name }: Props) => {
  return (
    <div className={s.profileContainer + (className ? ' ' + className : '')}>
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
