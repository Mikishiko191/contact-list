import create from 'zustand'
import { User } from '../mocks/DTO'

export interface SearchResultState {
   searchResult: User[] | null
   onHandleSearchResult: (users: User[] | null) => void
}

const useSearchResultStore = create<SearchResultState>((set) => ({
   searchResult: null,
   onHandleSearchResult: (searchResult) => set(() => ({ searchResult })),
}))

export { useSearchResultStore }
