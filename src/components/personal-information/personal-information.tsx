import { ChangeEvent, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon/icon'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './personal-information.module.scss'

type Props = {
  className?: string
  email?: string
  imageSrc?: string
  name: string
  onImageChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onLogout?: () => void
  onNameChange?: (value: string) => void
}

export const PersonalInformation = ({
  className,
  email,
  imageSrc,
  name,
  onImageChange,
  onLogout,
  onNameChange,
}: Props) => {
  const [nameEdit, setNameEdit] = useState(false)

  const handleNameEdit = () => {
    setNameEdit(true)
  }

  return (
    <Card className={s.infoWraper}>
      <div className={clsx(s.container, className)}>
        <Typography variant={'h1'}>Personal Information</Typography>
        <div className={s.imageWrapper}>
          <img alt={email || 'user-profile'} src={imageSrc} />
          <label className={s.iconWrapper}>
            <Icon height={16} name={'edit'} width={16} />
            <input accept={'image/png, image/jpeg'} onChange={onImageChange} type={'file'} />
          </label>
        </div>
        <Typography className={s.name} variant={'h2'}>
          {nameEdit ? (
            <Input
              autoFocus
              onBlur={() => setNameEdit(false)}
              onChangeText={onNameChange}
              value={name}
            />
          ) : (
            name
          )}
          <Icon height={16} name={'edit'} onClick={handleNameEdit} width={16} />
        </Typography>
        {email && (
          <Typography className={s.email} variant={'body2'}>
            {email}
          </Typography>
        )}
        <Button className={s.logOut} onClick={onLogout} variant={'secondary'}>
          <Icon height={16} name={'log-out'} width={16} />
          <Typography variant={'subtitle2'}> Logout</Typography>
        </Button>
      </div>
    </Card>
  )
}
