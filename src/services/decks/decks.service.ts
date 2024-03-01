import { baseApi } from '@/services/base-api/base-api'
import { GetDecksArgs, ResponseDecks } from '@/services/definitions'

export const decksApi = baseApi.injectEndpoints({
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
})

export const { useGetDecksQuery } = decksApi
