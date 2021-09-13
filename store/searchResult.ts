import create from 'zustand'
import { User } from '../mocks/Fake_DATA'

export interface ModalState {
   searchResult: User[]
   onHandleSearchResult: (users: User[]) => void
}

const useStore = create<ModalState>((set) => ({
   searchResult: [],
   onHandleSearchResult: () => set((state) => ({ searchResult: state.searchResult })),
}))

export { useStore }
