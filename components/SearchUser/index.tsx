import { SearchIcon, XIcon } from '@heroicons/react/solid'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'

// DTO
import { User } from '../../mocks/DTO'

// Store
import { useSearchResultStore } from '../../store/searchResult'
import { useUserStore } from '../../store/user'

interface SearchUserProps {
   users: User[]
}

type Inputs = {
   search: string
}

const SearchUser = (props: SearchUserProps) => {
   const { users } = props
   const {
      register,
      handleSubmit,
      watch,
      reset,
      // formState: { errors },
   } = useForm<Inputs>()

   const watchFields = watch('search')

   const { onHandleSearchResult } = useSearchResultStore((state) => state)
   const { userState } = useUserStore((state) => state)

   const onSubmit: SubmitHandler<Inputs> = (data) => {
      let searchValue = data.search.toLowerCase()

      let filteredUsers = []

      filteredUsers = users.filter((data) => {
         const nameWithLastName = `${data.name.toLowerCase()} ${data.lastName.toLowerCase()}`
         return nameWithLastName.search(searchValue) != -1
      })

      if (!!filteredUsers.length) {
         toast.success(`You successfully found ${filteredUsers.length} user${filteredUsers.length > 1 ? 's' : ''}`, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
         })
      }

      onHandleSearchResult(filteredUsers)
   }

   const onHandleClearSearch = () => {
      onHandleSearchResult(null)
      reset()
   }

   return (
      <div className="px-6 pt-3 pb-4">
         <h2 className="text-lg font-medium text-gray-900">Directory</h2>
         <p className="mt-1 text-sm text-gray-600">
            Search directory of {userState.length} user{userState.length > 0 ? 's' : ''} by name or last name
         </p>
         <form
            className="mt-3 flex space-x-4 sm:flex-column md:flex-column lg:flex-row"
            onSubmit={handleSubmit(onSubmit)}
         >
            <div className="min-w-0 flex-1">
               <label htmlFor="search" className="sr-only">
                  Search
               </label>
               <div className="relative rounded-md shadow-sm">
                  <div className="absolute z-50 inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                     <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  {!!watchFields?.length && (
                     <button
                        type="button"
                        onClick={onHandleClearSearch}
                        className="absolute cursor-pointer z-20 inset-y-0 right-3 pl-3 flex items-center"
                     >
                        <XIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                     </button>
                  )}
                  <input
                     className="relative z-0 pl-10 pr-10 bg-gray-200 focus:ring-pink-500 focus:border-pink-500 appearance-none border-2 border-gray-200 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white "
                     type="text"
                     placeholder="Search"
                     {...register('search', { required: true })}
                  ></input>
               </div>
            </div>
            <button
               className="inline-flex justify-center px-3.5 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
               type="submit"
            >
               <span>Search</span>
            </button>
         </form>
      </div>
   )
}

export { SearchUser }
