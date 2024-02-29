export type ResponseDecks = {
  items: ResponseDecksItems[]
  pagination: ResponseDecksPagination
}
export type ResponseDecksItemsAuthor = {
  id: string
  name: string
}
export type ResponseDecksItems = {
  author: ResponseDecksItemsAuthor
  cardsCount: number
  cover: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}
export type ResponseDecksPagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

export type GetDecksArgs = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  userId?: string
}

export type User = {
  avatar: string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}
