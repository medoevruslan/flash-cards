import { SigninForm } from '@/components/auth'
import { Header } from '@/components/layout/header'

import s from './signin.module.scss'

export const Signin = () => {
  return (
    <div>
      <Header />
      <section className={s.container}>
        <SigninForm onSubmit={() => {}} />
      </section>
    </div>
  )
}
