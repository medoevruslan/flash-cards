import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import s from './forgot-password-form.module.scss'

const ForgotPasswordFormSchema = z.object({
  email: z.string().email(),
})

export type FormValues = z.infer<typeof ForgotPasswordFormSchema>

export type Props = {
  onSubmit: (data: FormValues) => void
}

export const ForgotPasswordForm = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(ForgotPasswordFormSchema),
  })

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <DevTool control={control} />
      <Card className={s.card}>
        <header className={s.header}>
          <Typography variant={'h1'}>Forgot your password?</Typography>
        </header>
        <Input
          {...register('email')}
          className={s.email}
          error={errors.email?.message}
          label={'Email'}
        />
        <Typography style={{ color: 'var(--color-light-900)' }} variant={'body2'}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button className={s.signUp} fullwidth variant={'primary'}>
          <Typography variant={'subtitle2'}>Send Instructions</Typography>
        </Button>
        <footer className={s.footer}>
          <Typography variant={'body2'}>
            <a className={s.didRemember} href={'#'}>
              Did you remember your password?
            </a>
          </Typography>
          <Typography variant={'subtitle2'}>
            <a className={s.tryLogging} href={'#'}>
              Try logging in
            </a>
          </Typography>
        </footer>
      </Card>
    </form>
  )
}
