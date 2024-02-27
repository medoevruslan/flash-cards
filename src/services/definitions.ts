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
