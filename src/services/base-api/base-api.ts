import { baseQueryWithReauth } from '@/services/auth/reauth'
import { GetDecksArgs, ResponseDecks } from '@/services/definitions'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { createApi } from '@reduxjs/toolkit/query/react'

export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.flashcards.andrii.es',
  credentials: 'include',
})

export const baseApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: build => {
    return {
      getDecks: build.query<ResponseDecks, GetDecksArgs | void>({
        query: arg => ({
          params: arg ?? undefined,
          url: 'v2/decks',
        }),
      }),
    }
  },
  reducerPath: 'baseApi',
  tagTypes: ['me'],
})

export const { useGetDecksQuery } = baseApi
