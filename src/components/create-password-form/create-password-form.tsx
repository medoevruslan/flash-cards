import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import s from './create-password-form.module.scss'

const CreateNewPasswordFormSchema = z.object({
  password: z.string().min(3),
})

export type FormValues = z.infer<typeof CreateNewPasswordFormSchema>

export type Props = {
  onSubmit: (data: FormValues) => void
}

export const CreateNewPasswordForm = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues: {
      password: '',
    },
    resolver: zodResolver(CreateNewPasswordFormSchema),
  })

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <DevTool control={control} />
      <Card className={s.card}>
        <header className={s.header}>
          <Typography variant={'h1'}>Create new password</Typography>
        </header>
        <Input
          {...register('password')}
          className={s.password}
          error={errors.password?.message}
          label={'Password'}
          type={'password'}
        />
        <Typography style={{ color: 'var(--color-light-900)' }} variant={'body2'}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button className={s.createNewPassword} fullwidth variant={'primary'}>
          <Typography variant={'subtitle2'}>Create New Password</Typography>
        </Button>
      </Card>
    </form>
  )
}
