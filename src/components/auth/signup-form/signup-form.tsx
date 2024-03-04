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

export type SignupFormValues = z.infer<typeof SignupFormSchema>
export type RequestSignupFormValues = Omit<SignupFormValues, 'confirmPassword'>

export type Props = {
  onSubmit: (data: RequestSignupFormValues) => void
}

export const SignupForm = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<SignupFormValues>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(SignupFormSchema),
  })

  const handleOnSubmit = (data: SignupFormValues) => {
    onSubmit({ email: data.email, password: data.password })
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(handleOnSubmit)}>
      <DevTool control={control} />
      <Card className={s.card}>
        <header className={s.header}>
          <Typography variant={'h1'}>Sign Up</Typography>
        </header>
        <Input
          {...register('email')}
          className={s.email}
          error={errors.email?.message}
          id={'email'}
          label={'Email'}
        />
        <Input
          {...register('password')}
          autoComplete={'off'}
          className={s.password}
          error={errors.password?.message}
          id={'password'}
          label={'Password'}
          type={'password'}
        />
        <Input
          {...register('confirmPassword')}
          autoComplete={'off'}
          className={s.password}
          error={errors.confirmPassword?.message}
          id={'confirm-password'}
          label={'Confirm Password'}
          type={'password'}
        />
        <Button className={s.signUp} fullwidth variant={'primary'}>
          Sign Up
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
