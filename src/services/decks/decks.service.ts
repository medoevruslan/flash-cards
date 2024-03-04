import { baseApi } from '@/services/base-api/base-api'
import { Cards, DeckItem, GetCardsArgs, GetDecksArgs, ResponseDecks } from '@/services/definitions'

export const decksApi = baseApi.injectEndpoints({
  endpoints: build => {
    return {
      getDeckById: build.query<DeckItem, { id: string }>({
        query: ({ id }) => ({
          url: `v1/decks/${id}`,
        }),
      }),
      getDeckCards: build.query<Cards, GetCardsArgs>({
        query: ({ id, ...args }) => ({
          params: args,
          url: `/v1/decks/${id}/cards`,
        }),
      }),
      getDecks: build.query<ResponseDecks, GetDecksArgs | void>({
        query: arg => ({
          params: arg ?? undefined,
          url: 'v2/decks',
        }),
      }),
    }
  },
})

export const { useGetDeckByIdQuery, useGetDeckCardsQuery, useGetDecksQuery } = decksApi
