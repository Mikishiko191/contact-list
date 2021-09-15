import create from 'zustand'

import { User } from '../mocks/DTO'

export interface SelectUserState {
   selectedUserState: User | null
   onHandleChangeUserState: (user: User | null) => void
}

const useSelectUserStore = create<SelectUserState>((set) => ({
   selectedUserState: null,
   onHandleChangeUserState: (user) => set(() => ({ selectedUserState: user })),
}))

export { useSelectUserStore }
