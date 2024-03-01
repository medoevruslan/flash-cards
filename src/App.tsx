import { Provider } from 'react-redux'

import { Layout } from '@/components/layout/layout'
import { Router } from '@/router'
import { store } from '@/services/store'

export function App() {
  console.log('main page')

  return (
    <Provider store={store}>
      <Layout>
        <Router />
      </Layout>
    </Provider>
  )
}
