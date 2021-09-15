import create from 'zustand'
import { User } from '../mocks/DTO'

export interface UserStore {
   userState: User[]
   lettersInUserNames: string[]
   userIsLoading: boolean
   userErrorWhileFetch: boolean
   onHandleGetUser: (users: User[]) => void
   setUserIsLoading: (userIsLoading: boolean) => void
   setUserErrorWhileFetch: (userErrorWhileFetch: boolean) => void
   setLettersInUserNames: (lettersInUserNames: string[]) => void
}

const useUserStore = create<UserStore>((set) => ({
   userState: [],
   lettersInUserNames: [],
   userIsLoading: false,
   userErrorWhileFetch: false,
   onHandleGetUser: (userState) => set(() => ({ userState })),
   setUserIsLoading: (userIsLoading) => set(() => ({ userIsLoading })),
   setUserErrorWhileFetch: (userErrorWhileFetch) => set(() => ({ userErrorWhileFetch })),
   setLettersInUserNames: (lettersInUserNames) => set(() => ({ lettersInUserNames })),
}))

export { useUserStore }
