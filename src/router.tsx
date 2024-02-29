import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { DeckList } from '@/pages/deck-list/deck-list'
import { Signin } from '@/pages/signin'

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
  const isAuthenticated = true

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
