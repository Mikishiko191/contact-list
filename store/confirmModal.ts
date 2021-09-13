import create from 'zustand'

export interface ModalState {
   showConformationalModal: boolean
   closeConformationalModal: () => void
   openConformationalModal: () => void
}

const useConfirmModalStore = create<ModalState>((set) => ({
   showConformationalModal: false,
   openConformationalModal: () => set(() => ({ showConformationalModal: true })),
   closeConformationalModal: () => set(() => ({ showConformationalModal: false })),
}))

export { useConfirmModalStore }
