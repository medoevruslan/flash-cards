import { SignupForm } from '@/components/auth'

import s from './signup.module.scss'

export const Signup = () => {
  return (
    <section className={s.container}>
      <SignupForm onSubmit={() => {}} />
    </section>
  )
}
