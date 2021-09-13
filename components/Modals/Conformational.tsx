import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { User } from '../../mocks/Fake_DATA'

// Store
import { useConfirmModalStore } from '../../store/confirmModal'

interface ConformationalProps {
   selectedUser: User | null
   onHandleRemoveUser: () => void
}

const Conformational = (props: ConformationalProps) => {
   const show = useConfirmModalStore((state) => state.showConformationalModal)
   const closeModal = useConfirmModalStore((state) => state.closeConformationalModal)

   const { onHandleRemoveUser, selectedUser } = props
   return (
      <Transition appear show={show} as={React.Fragment}>
         <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            <div className="min-h-screen px-4 text-center">
               <Transition.Child
                  as={React.Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
               >
                  <Dialog.Overlay className="fixed inset-0" />
               </Transition.Child>

               {/* This element is to trick the browser into centering the modal contents. */}
               <span className="inline-block h-screen align-middle" aria-hidden="true">
                  &#8203;
               </span>
               <Transition.Child
                  as={React.Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
               >
                  <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                     <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        Are you sure?
                     </Dialog.Title>
                     <div className="mt-2">
                        <p className="text-sm text-gray-500 flex">
                           Deleting user: <p className="font-bold pl-1 pr-1 text-blue-900">{selectedUser?.name}</p> from
                           contact list?
                        </p>
                     </div>

                     <div className="mt-4">
                        <button
                           type="button"
                           className="mr-5 inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-400 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                           onClick={() => onHandleRemoveUser()}
                        >
                           Yes, delete user
                        </button>
                        <button
                           type="button"
                           className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                           onClick={closeModal}
                        >
                           No, i changed my mind
                        </button>
                     </div>
                  </div>
               </Transition.Child>
            </div>
         </Dialog>
      </Transition>
   )
}

export { Conformational }
