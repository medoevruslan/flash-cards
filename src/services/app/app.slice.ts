import { User } from '@/services/definitions'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type State = {
  user: User | null
}

export const appSlice = createSlice({
  initialState: {
    user: null,
  } as State,
  name: 'app',
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload
    },
  },
})

export const appActions = appSlice.actions
