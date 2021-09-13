import { toast } from 'react-toastify'
import { useEditCreateStore } from '../../store/editCreate'

const user = {
   name: 'Debbie Lewis',
   handle: 'deblewis',
   email: 'debbielewis@example.com',
   imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80',
}

const UpdateCreateUser = () => {
   const { onHandleChangeCreateEditState, createAditState } = useEditCreateStore((state) => state)

   const onHandleSaveForm = () => {
      console.log('save')
      // resetState()
      onHandleChangeCreateEditState(null)

      toast.success(`User successfully saved`, {
         position: 'top-right',
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
      })
   }
   return (
      <>
         <form className="divide-y divide-gray-200 lg:col-span-9" action="#" method="POST">
            {/* Profile section */}
            <div className="py-6 px-4 sm:p-6 lg:pb-8">
               <div className="mt-6 flex flex-col lg:flex-row">
                  <div className="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0 pr-6">
                     <p className="text-sm font-medium text-gray-700" aria-hidden="true">
                        Photo
                     </p>
                     <div className="mt-1 lg:hidden">
                        <div className="flex items-center">
                           <div
                              className="flex-shrink-0 inline-block rounded-full overflow-hidden h-12 w-12"
                              aria-hidden="true"
                           >
                              <img className="rounded-full h-full w-full" src={user.imageUrl} alt="" />
                           </div>
                           <div className="ml-5 rounded-md shadow-sm">
                              <div className="group relative border border-gray-300 rounded-md py-2 px-3 flex items-center justify-center hover:bg-gray-50 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-sky-500">
                                 <label
                                    htmlFor="mobile-user-photo"
                                    className="relative text-sm leading-4 font-medium text-gray-700 pointer-events-none"
                                 >
                                    <span>Change</span>
                                    <span className="sr-only">user photo</span>
                                 </label>
                                 <input
                                    id="mobile-user-photo"
                                    name="user-photo"
                                    type="file"
                                    className="absolute w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                                 />
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="hidden relative rounded-full overflow-hidden lg:block">
                        <img className="relative rounded-full w-40 h-40" src={user.imageUrl} alt="" />
                        <label
                           htmlFor="desktop-user-photo"
                           className="absolute inset-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center text-sm font-medium text-white opacity-0 hover:opacity-100 focus-within:opacity-100"
                        >
                           <span>Change</span>
                           <span className="sr-only"> user photo</span>
                           <input
                              type="file"
                              id="desktop-user-photo"
                              name="user-photo"
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                           />
                        </label>
                     </div>
                  </div>
                  <div className="flex-grow space-y-6 align-middle justify-center flex flex-col">
                     <h2 className="text-lg leading-3 font-medium text-gray-900">
                        {createAditState === 'CREATE' && 'Create'} {createAditState === 'EDIT' && 'Edit'} user contact
                     </h2>
                     <p className="mt-1 text-sm text-gray-500">
                        This information will be displayed publicly so be careful what you share.
                     </p>
                  </div>
               </div>

               <div className="mt-6 grid grid-cols-12 gap-6">
                  <div className="col-span-12 sm:col-span-6">
                     <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        First name
                     </label>
                     <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                     />
                  </div>

                  <div className="col-span-12 sm:col-span-6">
                     <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Last name
                     </label>
                     <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                     />
                  </div>

                  <div className="col-span-12 sm:col-span-6">
                     <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                     </label>
                     <input
                        type="text"
                        name="email"
                        id="email"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                     />
                  </div>

                  <div className="col-span-12 sm:col-span-6">
                     <label htmlFor="groupe" className="block text-sm font-medium text-gray-700">
                        Groupe
                     </label>
                     <select
                        id="groupe"
                        name="groupe"
                        autoComplete="groupe"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                     >
                        <option>Family</option>
                        <option>Friends</option>
                        <option>School</option>
                        <option>Work</option>
                     </select>
                  </div>
               </div>
            </div>
         </form>
         <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
            <button
               type="button"
               className="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
               onClick={() => onHandleChangeCreateEditState(null)}
            >
               Cancel
            </button>
            <button
               onClick={onHandleSaveForm}
               type="submit"
               className="ml-5 bg-blue-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
               Save
            </button>
         </div>
      </>
   )
}

export { UpdateCreateUser }
