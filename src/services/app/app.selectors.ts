import { appSlice } from '@/services/app/app.slice'
import { RootState } from '@/services/store'

export const selectUser = (state: RootState) => state[appSlice.reducerPath].user
