import { SigninForm } from '@/components/auth'

import s from './signin.module.scss'

export const Signin = () => {
  return (
    <section className={s.container}>
      <SigninForm onSubmit={() => {}} />
    </section>
  )
}
