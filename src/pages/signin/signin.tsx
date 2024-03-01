import { useNavigate } from 'react-router-dom'

import { SigninForm } from '@/components/auth'
import { FormValues } from '@/components/auth/signin-form'
import { useLoginMutation } from '@/services/auth/auth.service'

import s from './signin.module.scss'

export const Signin = () => {
  const [login] = useLoginMutation()

  const navigate = useNavigate()

  const handleSignin = async (data: FormValues) => {
    try {
      await login(data).unwrap()
      navigate('/', { replace: true })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <section className={s.container}>
      <SigninForm onSubmit={handleSignin} />
    </section>
  )
}
