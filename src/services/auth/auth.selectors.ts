import { authSlice } from '@/services/auth/auth.slice'
import { RootState } from '@/services/store'

export const selectIsAuth = (state: RootState) => state[authSlice.reducerPath].isAuth
