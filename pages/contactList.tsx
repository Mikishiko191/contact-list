// import React from "react";
// import { useForm } from "react-hook-form";
// import { Input } from "../components/Input/Input";
// import Link from "next/link";

import React from 'react'
import { users, User } from '../mocks/Fake_DATA'
import { MenuIcon, PlusIcon } from '@heroicons/react/outline'
import { toast } from 'react-toastify'

// Components
import { SearchUser } from '../components/SearchUser'
import { UserDescription } from '../components/UserDescription'
import { UserList } from '../components/UserList'
import { MobileSideBar } from '../components/MobileSideBar'
import { Conformational } from '../components/Modals/Conformational'
import { UpdateCreateUser } from '../components/UpdateCreateUser'

// Store
import { useConfirmModalStore } from '../store/confirmModal'
import { useEditCreateStore } from '../store/editCreate'

const ContactList = () => {
   const [sidebarOpen, setSidebarOpen] = React.useState(false)
   const [selectedUser, setUser] = React.useState<User | null>(null)
   const openModal = useConfirmModalStore((state) => state.openConformationalModal)
   const closeModal = useConfirmModalStore((state) => state.closeConformationalModal)
   const { createAditState, onHandleChangeCreateEditState } = useEditCreateStore((state) => state)

   const onHandlePressUser = (person: User) => {
      setUser(person)
      setSidebarOpen(false)
   }

   const onCloseSideBar = () => {
      setSidebarOpen(false)
   }

   const onHandleRemoveUser = () => {
      closeModal()
      toast.success(`User: ${selectedUser?.name} successfully removed`, {
         position: 'top-right',
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
      })
      setUser(null)
   }

   return (
      <div className="relative h-screen flex overflow-hidden bg-white">
         <MobileSideBar
            users={users}
            sideBarOpen={sidebarOpen}
            onCloseSideBar={onCloseSideBar}
            onHandlePressUser={onHandlePressUser}
         />

         {/* Static sidebar for desktop */}
         <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
            <div className="lg:hidden">
               <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
                  <div />
                  <div>
                     <button
                        type="button"
                        className="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600"
                        onClick={() => setSidebarOpen(true)}
                     >
                        <span className="sr-only">Open sidebar</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                     </button>
                  </div>
               </div>
            </div>
            <div className="flex-1 relative z-0 flex overflow-hidden">
               <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
                  {createAditState === 'CREATE' || createAditState === 'EDIT' ? (
                     <UpdateCreateUser />
                  ) : (
                     <UserDescription
                        user={selectedUser}
                        userList={users}
                        onHandleSelectUser={onHandlePressUser}
                        onHandleRemoveUser={openModal}
                     />
                  )}
               </main>

               <aside className="relative hidden xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200">
                  <SearchUser users={users} />

                  <UserList users={users} onHandlePressUser={onHandlePressUser} />

                  <button
                     onClick={() => onHandleChangeCreateEditState('CREATE')}
                     className="absolute bottom-3 right-3 flex align-middle justify-center bg-green-500 text-white pt-2 pb-2 pl-2 pr-2 rounded-md font-medium z-50"
                  >
                     <PlusIcon className="h-6 w-6 text-white mr-1" aria-hidden="true" /> Add contact
                  </button>
               </aside>
            </div>
         </div>
         <Conformational onHandleRemoveUser={onHandleRemoveUser} selectedUser={selectedUser} />
      </div>
   )
}

export default ContactList
