import { ToastContainer } from 'react-toastify'

import { Header } from '@/components/layout/header'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <ToastContainer />
      {children}
    </>
  )
}
