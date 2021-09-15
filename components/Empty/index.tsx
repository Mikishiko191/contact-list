import { PlusIcon } from '@heroicons/react/solid'
import { User } from '../../mocks/DTO'

interface EmptyProps {
   users: User[]
   onHandleSelectUser: (user: User) => void
}

const Empty = (props: EmptyProps) => {
   const { users, onHandleSelectUser } = props
   return (
      <div className="max-w-md h-full mx-auto sm:max-w-3xl flex justify-center flex-col">
         <div>
            <div className="text-center">
               <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth={2}
                     d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
               </svg>
               <h2 className="mt-2 text-lg font-medium text-gray-900">Please, select user</h2>
               <p className="mt-1 text-sm text-gray-500">You haven’t selected any user.</p>
            </div>
         </div>
         <div className="mt-10">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Fast user select</h3>
            <ul role="list" className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
               {users.map((person) => (
                  <li key={person.id}>
                     <button
                        type="button"
                        className="group p-2 w-full flex items-center justify-between rounded-full border border-gray-300 shadow-sm space-x-3 text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => onHandleSelectUser(person)}
                     >
                        <span className="min-w-0 flex-1 flex items-center space-x-3">
                           <span className="block flex-shrink-0">
                              <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
                           </span>
                           <span className="block min-w-0 flex-1">
                              <span className="block text-sm font-medium text-gray-900 truncate">{person.name}</span>
                              <span className="block text-sm font-medium text-gray-500 truncate">{person.role}</span>
                           </span>
                        </span>
                        <span className="flex-shrink-0 h-10 w-10 inline-flex items-center justify-center">
                           <PlusIcon className="h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                        </span>
                     </button>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   )
}

export { Empty }
