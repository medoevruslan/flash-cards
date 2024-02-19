import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CheckboxControlled } from '@/components/ui/controlled/checkbox/checkbox-controlled'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import s from './login-form.module.scss'

const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().default(false),
})

export type Props = {
  onSubmit: () => void
}

export type FormValues = z.infer<typeof LoginFormSchema>

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(LoginFormSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DevTool control={control} />
      <Card className={s.card}>
        <header>
          <Typography variant={'h1'}>Sign In</Typography>
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
        <CheckboxControlled
          control={control}
          defaultValue={false}
          label={'Remember me'}
          name={'rememberMe'}
        />
        <Typography className={s.forgot} variant={'body2'}>
          <a href={'#'}>Forgot password?</a>
        </Typography>
        <Button className={s.signIn} fullwidth variant={'primary'}>
          <Typography variant={'subtitle2'}>Sign In</Typography>
        </Button>
        <footer>
          <Typography variant={'body2'}>
            <a className={s.account} href={'#'}>
              Don&apos;t have an account?{' '}
            </a>
          </Typography>
          <Typography variant={'subtitle2'}>
            <a className={s.signUp} href={'#'}>
              Sign Up
            </a>
          </Typography>
        </footer>
      </Card>
    </form>
  )
}
