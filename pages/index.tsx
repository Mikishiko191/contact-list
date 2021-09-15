import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useSWRConfig } from 'swr'

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
import { useSelectUserStore } from '../store/selectUser'
import { useUserStore } from '../store/user'
import { useSearchResultStore } from '../store/searchResult'

// Mocks
import { url } from '../mocks/handlers'
import { User } from '../mocks/Fake_DATA'

const Home: NextPage = () => {
   const { mutate } = useSWRConfig()

   const [sidebarOpen, setSidebarOpen] = React.useState(false)
   const openModal = useConfirmModalStore((state) => state.openConformationalModal)
   const closeModal = useConfirmModalStore((state) => state.closeConformationalModal)
   const { createAditState, onHandleChangeCreateEditState } = useEditCreateStore((state) => state)
   const { selectedUserState, onHandleChangeUserState } = useSelectUserStore((state) => state)
   const { searchResult } = useSearchResultStore((state) => state)
   const { userState, userIsLoading, userErrorWhileFetch, onHandleGetUser, setUserIsLoading, setUserErrorWhileFetch } =
      useUserStore((state) => state)

   React.useEffect(() => {
      const fetchData = async () => {
         setUserIsLoading(true)
         const result = await fetch(url)
            .then((response) => {
               setUserErrorWhileFetch(false)
               return response.json()
            })
            .catch(() => setUserErrorWhileFetch(true))
         onHandleGetUser(result)
         setUserIsLoading(false)
      }
      fetchData()
   }, [])

   if (userErrorWhileFetch) return <div>failed to load</div>
   if (userIsLoading) return <div>loading...</div>

   const onHandlePressUser = (user: User) => {
      onHandleChangeUserState(user)
      setSidebarOpen(false)
      onHandleChangeCreateEditState(null)
   }

   const onCloseSideBar = () => {
      setSidebarOpen(false)
   }

   const onHandleRemoveUser = () => {
      mutate(url, async () => {
         await fetch(url, {
            method: 'DELETE',
            body: selectedUserState?.id,
         })
            .then((res) => res.json())
            .then((resData) => {
               toast.success(`User: ${selectedUserState?.name} successfully removed`, {
                  position: 'top-right',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
               })
               onHandleGetUser(resData)
               onHandleChangeUserState(null)
               closeModal()
            })
            .catch(() => {
               toast.error(`Uups something went wrong. Please try again `, {
                  position: 'top-right',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
               })
            })
      })
   }

   const isUserSearching = !!searchResult ? searchResult : userState

   return (
      <div className="relative h-screen flex overflow-hidden bg-white">
         <Head>
            <title>Contact list</title>
            <meta name="description" content="Find &amp; your favorite contact" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <MobileSideBar
            users={isUserSearching}
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
                        user={selectedUserState}
                        userList={userState}
                        onHandleSelectUser={onHandlePressUser}
                        onHandleRemoveUser={openModal}
                     />
                  )}
               </main>

               <aside className="relative hidden xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200">
                  <SearchUser users={isUserSearching} />

                  <UserList users={isUserSearching} onHandlePressUser={onHandlePressUser} />

                  <button
                     onClick={() => onHandleChangeCreateEditState('CREATE')}
                     className="absolute bottom-3 right-3 flex align-middle justify-center bg-green-500 text-white pt-2 pb-2 pl-2 pr-2 rounded-md font-medium z-50"
                  >
                     <PlusIcon className="h-6 w-6 text-white mr-1" aria-hidden="true" /> Add contact
                  </button>
               </aside>
            </div>
         </div>
         <Conformational onHandleRemoveUser={onHandleRemoveUser} selectedUser={selectedUserState} />
      </div>
   )
}

export default Home
