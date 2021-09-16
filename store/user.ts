import create from 'zustand'
import { User } from '../mocks/DTO'

export interface UserStore {
   userState: User[]
   userIsLoading: boolean
   userErrorWhileFetch: boolean
   onHandleGetUser: (users: User[]) => void
   setUserIsLoading: (userIsLoading: boolean) => void
   setUserErrorWhileFetch: (userErrorWhileFetch: boolean) => void
}

const useUserStore = create<UserStore>((set) => ({
   userState: [],
   userIsLoading: false,
   userErrorWhileFetch: false,
   onHandleGetUser: (userState) => set(() => ({ userState })),
   setUserIsLoading: (userIsLoading) => set(() => ({ userIsLoading })),
   setUserErrorWhileFetch: (userErrorWhileFetch) => set(() => ({ userErrorWhileFetch })),
}))

export { useUserStore }
