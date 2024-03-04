import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { DeckList } from '@/pages/deck-list/deck-list'
import { Signin } from '@/pages/signin'
import { Signup } from '@/pages/signup'
import { appActions } from '@/services/app/app.slice'
import { useMeQuery } from '@/services/auth/auth.service'

const PrivateRoutes = () => {
  const { data, isError, isLoading } = useMeQuery()
  const isAuthenticated = !isError && !isLoading
  const dispatch = useDispatch()

  useEffect(() => {
    const user = !isError && data ? data : null

    dispatch(appActions.setUser(user))
  }, [data, isLoading, isError])

  if (isLoading) {
    return 'loading'
  }

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

const RedirectToMainWhenUserSignedIn = () => {
  const { isError, isLoading } = useMeQuery()

  const shouldNavigateToMain = !isError && !isLoading

  if (isLoading) {
    return 'loading'
  }

  return shouldNavigateToMain ? <Navigate to={'/'} /> : <Outlet />
}

//@ts-ignore
const publicRoutes = []
const privateRoutes = [
  {
    element: <DeckList />,
    path: '/',
  },
]

const signInCheck = {
  children: [
    {
      element: <Signin />,
      path: '/login',
    },
    {
      element: <Signup />,
      path: '/signup',
    },
  ],
  element: <RedirectToMainWhenUserSignedIn />,
}

const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  signInCheck,
  //@ts-ignore
  ...publicRoutes,
])

export const Router = () => {
  return <RouterProvider router={router} />
}
