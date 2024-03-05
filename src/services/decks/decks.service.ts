import { baseApi } from '@/services/base-api/base-api'
import { Cards, DeckItem, GetCardsArgs, GetDecksArgs, ResponseDecks } from '@/services/definitions'

export const decksApi = baseApi.injectEndpoints({
  endpoints: build => {
    return {
      createDeck: build.mutation<DeckItem, FormData>({
        invalidatesTags: ['GetDecks'],
        query: body => ({
          body,
          method: 'POST',
          url: 'v1/decks',
        }),
      }),
      getDeckById: build.query<DeckItem, { id: string }>({
        query: ({ id }) => ({
          url: `v1/decks/${id}`,
        }),
      }),
      getDeckCards: build.query<Cards, GetCardsArgs>({
        providesTags: ['GetDeckCards'],
        query: ({ id, ...args }) => ({
          params: args,
          url: `/v1/decks/${id}/cards`,
        }),
      }),
      getDecks: build.query<ResponseDecks, GetDecksArgs | void>({
        providesTags: ['GetDecks'],
        query: arg => ({
          params: arg ?? undefined,
          url: 'v2/decks',
        }),
      }),
    }
  },
})

export const {
  useCreateDeckMutation,
  useGetDeckByIdQuery,
  useGetDeckCardsQuery,
  useGetDecksQuery,
} = decksApi
