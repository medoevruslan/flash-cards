import { useDispatch } from 'react-redux'
import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { DeckList } from '@/pages/deck-list/deck-list'
import { Signin } from '@/pages/signin'
import { appActions } from '@/services/app/app.slice'
import { useMeQuery } from '@/services/auth/signin-api'

const publicRoutes = [
  {
    element: <Signin />,
    path: '/login',
  },
]

const privateRoutes = [
  {
    element: <DeckList />,
    path: '/',
  },
]

const PrivateRoutes = () => {
  const { data, isError, isLoading } = useMeQuery()
  const isAuthenticated = !isError && !isLoading
  const dispatch = useDispatch()

  if (isLoading) {
    return 'loading'
  }

  dispatch(appActions.setUser(data ?? null))

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
])

export const Router = () => {
  return <RouterProvider router={router} />
}
