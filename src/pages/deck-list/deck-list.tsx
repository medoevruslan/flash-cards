import { ChangeEvent, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { Container } from '@/components/container/container'
import { TableDeck } from '@/components/table-deck'
import { DeckTab } from '@/components/table-deck/tab-switcher-deck/tab-switcher-deck'
import { TableNav } from '@/components/table-deck/table-nav/table-nav'
import { Button } from '@/components/ui/button'
import { CheckboxControlled } from '@/components/ui/controlled/checkbox/checkbox-controlled'
import { Icon } from '@/components/ui/icon'
import { Input } from '@/components/ui/input'
import { Modal } from '@/components/ui/modal'
import { Pagination, PostsPerPage } from '@/components/ui/pagination'
import { Typography } from '@/components/ui/typography'
import { useCreateDeckMutation, useGetDecksQuery } from '@/services/decks/decks.service'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDebounce } from 'use-debounce'
import z from 'zod'

import s from './deck-list.module.scss'

const initialFilters = {
  cardsType: 'All Cards' as const,
  minMaxCards: [0, 50],
  searchDefault: '',
}

const postsOnPage = ['10', '20', '30', '50', '100'] as const

const addNewDeckSchema = z.object({
  deckName: z.string().trim().min(1),
  isPrivate: z.boolean().default(false),
})

export type NewDeckFormValues = z.infer<typeof addNewDeckSchema>

export const DeckList = () => {
  const [searchCards, setSearchCards] = useState(initialFilters.searchDefault)
  const [minMaxCards, setMinMaxCards] = useState(initialFilters.minMaxCards)
  const [selectedTab, setSelectedTab] = useState<DeckTab>(initialFilters.cardsType)
  const [postsPerPage, setPostsPerPage] = useState<(typeof postsOnPage)[number]>('10')
  const [page, setPage] = useState(1)
  const [isAddNewDeckShown, setIsAddNewDeckShown] = useState(false)

  const inputFileRef = useRef<HTMLInputElement>(null)

  const { data, isLoading } = useGetDecksQuery({
    currentPage: page,
    itemsPerPage: Number(postsPerPage),
    maxCardsCount: useDebounce(minMaxCards[1], 700)[0],
    minCardsCount: useDebounce(minMaxCards[0], 700)[0],
    name: useDebounce(searchCards, 700)[0],
  })

  const [createNewDeck] = useCreateDeckMutation()

  const handleClearFilters = () => {
    setSearchCards(initialFilters.searchDefault)
    setMinMaxCards(initialFilters.minMaxCards)
    setSelectedTab(initialFilters.cardsType)
  }

  const handleChangePostsPerPage = handleChangeWithPageReset(setPage, setPostsPerPage)
  const handleSearchCards = handleChangeWithPageReset(setPage, setSearchCards)
  const handleMinMaxCards = handleChangeWithPageReset(setPage, setMinMaxCards)
  const handleSelectTab = handleChangeWithPageReset(setPage, setSelectedTab)

  const decks = data?.items || []
  const totalPages = data?.pagination.totalPages || 0

  const closeModal = () => {
    setIsAddNewDeckShown(false)
    reset()
  }

  const loadFile = () => {
    inputFileRef.current?.click()
  }

  const checkFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const maxSize = 5 * 128 * 1024 // File size should not be more than 500kb

      if (e.target.files[0].size > maxSize) {
        e.target.value = ''
        toast.warn('File size should not be more than 500kb')
      }
    }
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<NewDeckFormValues>({
    defaultValues: {
      deckName: '',
      isPrivate: false,
    },
    resolver: zodResolver(addNewDeckSchema),
  })

  const onSubmit = (data: NewDeckFormValues) => {
    const formData = new FormData()

    const cover = inputFileRef.current?.files?.[0] ?? ''

    formData.set('name', data.deckName)
    formData.set('isPrivate', String(data.isPrivate))
    formData.set('cover', cover)
    createNewDeck(formData)
    closeModal()
  }

  if (isLoading) {
    return 'loading...'
  }

  return (
    <Container>
      <section className={s.wrapper}>
        <div className={s.header}>
          <Typography variant={'h1'}>Decks list</Typography>
          <Button
            onClick={() => {
              setIsAddNewDeckShown(true)
            }}
            variant={'primary'}
          >
            Add New Deck
          </Button>
        </div>
        <TableNav
          minMaxCards={minMaxCards}
          onClearFilters={handleClearFilters}
          onSearchChange={handleSearchCards}
          onSliderChange={handleMinMaxCards}
          onTabsChange={value => handleSelectTab(value as DeckTab)}
          search={searchCards}
          selectedTab={selectedTab}
        />
        <TableDeck className={s.table} decks={decks} />
        <Pagination currentPage={page} onPageChange={setPage} totalCount={totalPages}>
          <PostsPerPage onChange={handleChangePostsPerPage} options={postsOnPage} />
        </Pagination>
      </section>
      <Modal onClose={closeModal} open={isAddNewDeckShown} title={'Add New Deck'}>
        <form className={s.addNewDeckForm} onSubmit={handleSubmit(onSubmit)}>
          <DevTool control={control} />
          <Input
            {...register('deckName')}
            className={s.inputNewDeckName}
            error={errors.deckName?.message}
            id={'deckName'}
            label={'Name Pack'}
          />
          <input
            accept={'image/jpeg, image/png, image/jpg'}
            id={'fileInput'}
            onChange={checkFile}
            ref={inputFileRef}
            style={{ display: 'none' }}
            type={'file'}
          />
          <Button
            className={s.uploadImageBtn}
            fullwidth
            onClick={loadFile}
            type={'button'}
            variant={'secondary'}
          >
            <Icon height={15} name={'image'} style={{ marginRight: '5px' }} width={15} />
            Upload Image
          </Button>
          <CheckboxControlled
            className={s.checkbox}
            control={control}
            label={'Private pack'}
            name={'isPrivate'}
          />
          <div className={s.modalButtons}>
            <Button onClick={closeModal} variant={'secondary'}>
              Cancel
            </Button>
            <Button type={'submit'} variant={'primary'}>
              Add New Pack
            </Button>
          </div>
        </form>
      </Modal>
    </Container>
  )
}

export const handleChangeWithPageReset = <T,>(
  pageReset: (page: number) => void,
  callback: (...args: T[]) => void
) => {
  return (...args: T[]) => {
    pageReset(1)
    callback(...args)
  }
}
