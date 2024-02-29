import { authApi } from '@/services/auth/signin-api'
import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  extraReducers: builder => {
    builder.addMatcher(authApi.endpoints?.me.matchRejected, state => {
      state.isAuth = false
    }),
      builder.addMatcher(authApi.endpoints?.me.matchFulfilled, state => {
        state.isAuth = true
      })
  },
  initialState: {
    isAuth: false,
  },
  name: 'auth',
  reducers: {},
})
