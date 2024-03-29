import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CheckboxControlled } from '@/components/ui/controlled/checkbox/checkbox-controlled'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import s from './signin-form.module.scss'

const SigninFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().default(false),
})

export type SigninFormValues = z.infer<typeof SigninFormSchema>

export type Props = {
  onSubmit: (data: SigninFormValues) => void
}

export const SigninForm = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<SigninFormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(SigninFormSchema),
  })

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <DevTool control={control} />
      <Card className={s.card}>
        <header className={s.header}>
          <Typography variant={'h1'}>Sign In</Typography>
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
          className={s.password}
          error={errors.password?.message}
          id={'password'}
          label={'Password'}
          type={'password'}
        />
        <CheckboxControlled control={control} label={'Remember me'} name={'rememberMe'} />
        <Typography className={s.forgot} variant={'body2'}>
          <a href={'#'}>Forgot password?</a>
        </Typography>
        <Button className={s.signIn} fullwidth variant={'primary'}>
          Sign In
        </Button>
        <footer className={s.footer}>
          <Typography variant={'body2'}>
            <a className={s.account} href={'#'}>
              Don&apos;t have an account?{' '}
            </a>
          </Typography>
          <Typography variant={'subtitle2'}>
            <a className={s.signUp} href={'/signup'}>
              Sign Up
            </a>
          </Typography>
        </footer>
      </Card>
    </form>
  )
}
