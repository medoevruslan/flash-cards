import { appSlice } from '@/services/app/app.slice'
import { authApi } from '@/services/auth/auth.service'
import { baseApi } from '@/services/base-api/base-api'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware, authApi.middleware),
  reducer: {
    [appSlice.reducerPath]: appSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
