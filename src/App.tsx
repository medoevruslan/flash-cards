import { Provider } from 'react-redux'

import { Header } from '@/components/layout/header'
import { Router } from '@/router'
import { store } from '@/services/store'

export function App() {
  return (
    <Provider store={store}>
      <Header />
      <Router />
    </Provider>
  )
}
