import create from 'zustand'

import { User } from '../mocks/DTO'

export interface ModalState {
   userState: User | null
   createAditState: 'CREATE' | 'EDIT' | null
   onHandleChangeUserState: (user: User | null) => void
   onHandleResetEditCreateState: () => void
   onHandleChangeCreateEditState: (state: 'CREATE' | 'EDIT' | null) => void
}

const useEditCreateStore = create<ModalState>((set) => ({
   userState: null,
   createAditState: null,
   onHandleChangeUserState: (user) => set(() => ({ userState: user })),
   onHandleResetEditCreateState: () => set(() => ({ userState: null })),
   onHandleChangeCreateEditState: (state) => set(() => ({ createAditState: state })),
}))

export { useEditCreateStore }
