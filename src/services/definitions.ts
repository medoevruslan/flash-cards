export type ResponseDecks = {
  items: DeckItem[]
  pagination: Pagination
}
export type ItemAuthor = {
  id: string
  name: string
}
export type DeckItem = {
  author: ItemAuthor
  cardsCount: number
  cover: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}
export type Pagination = {
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
  orderBy?: string
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

export type ErrorDataType = {
  errorMessages: {
    field: string
    message: string
  }[]
}

export type CustomerError = {
  data: ErrorDataType
  status: number
}

export type GetCardsArgs = {
  currentPage?: number
  id: string
  itemsPerPage?: number
  orderBy?: string
}

export type Cards = {
  items: Card[]
  pagination: Pagination
}

export type Card = {
  answer: string
  answerImg: string
  answerVideo: string
  created: string
  deckId: string
  grade: number
  id: string
  question: string
  questionImg: string
  questionVideo: string
  shots: number
  updated: string
  userId: string
}
