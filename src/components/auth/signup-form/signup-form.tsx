import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import s from './signup-form.module.scss'

const SignupFormSchema = z
  .object({
    confirmPassword: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(3),
  })
  .refine(({ confirmPassword, password }) => password === confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

export type FormValues = z.infer<typeof SignupFormSchema>

export type Props = {
  onSubmit: (data: FormValues) => void
}

export const SignupForm = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(SignupFormSchema),
  })

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <DevTool control={control} />
      <Card className={s.card}>
        <header className={s.header}>
          <Typography variant={'h1'}>Sign Up</Typography>
        </header>
        <Input
          {...register('email')}
          className={s.email}
          error={errors.email?.message}
          label={'Email'}
        />
        <Input
          {...register('password')}
          className={s.password}
          error={errors.password?.message}
          label={'Password'}
          type={'password'}
        />
        <Input
          {...register('confirmPassword')}
          className={s.password}
          error={errors.confirmPassword?.message}
          label={'Confirm Password'}
          type={'password'}
        />
        <Button className={s.signUp} fullwidth variant={'primary'}>
          <Typography variant={'subtitle2'}>Sign In</Typography>
        </Button>
        <footer className={s.footer}>
          <Typography variant={'body2'}>
            <a className={s.account} href={'#'}>
              Don&apos;t have an account?
            </a>
          </Typography>
          <Typography variant={'subtitle2'}>
            <a className={s.signIn} href={'#'}>
              Sign In
            </a>
          </Typography>
        </footer>
      </Card>
    </form>
  )
}
