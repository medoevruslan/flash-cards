import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon/icon'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import z from 'zod'

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
  const [editName, setEditName] = useState(false)

  const handleNameEdit = () => {
    setEditName(true)
  }

  const handleSaveName = (data: FormValues) => {
    onNameChange?.(data.username)
    setEditName(false)
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
        {editName ? (
          <EditName name={name} onSubmit={handleSaveName} />
        ) : (
          <>
            <Typography className={s.name} variant={'h2'}>
              {name}
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
          </>
        )}
      </div>
    </Card>
  )
}

const FormValuesSchema = z.object({
  username: z.string().min(1, 'username must contains at least 1 character'),
})

type FormValues = z.infer<typeof FormValuesSchema>

const EditName = ({ name, onSubmit }: { name: string; onSubmit: (data: FormValues) => void }) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues: {
      username: name,
    },
    resolver: zodResolver(FormValuesSchema),
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
      <Input
        autoFocus
        className={s.nameInput}
        label={'Nickname'}
        {...register('username')}
        error={errors.username?.message}
      />
      <Button fullwidth type={'submit'} variant={'primary'}>
        Save Changes
      </Button>
    </form>
  )
}
