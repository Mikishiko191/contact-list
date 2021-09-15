import { TrashIcon, PencilIcon } from '@heroicons/react/solid'
import Image from 'next/image'

// DTO
import { User } from '../../mocks/DTO'

// Components
import { Empty } from '../Empty'

// Store
import { useEditCreateStore } from '../../store/editCreate'

interface UserDescriptionProps {
   user: User | null
   userList: User[]
   onHandleSelectUser: (user: User) => void
   onHandleRemoveUser: (user: User) => void
}

type StringKeys<objType extends {}> = Array<Extract<keyof objType, string>>

const UserDescription = (props: UserDescriptionProps) => {
   const { user, userList, onHandleSelectUser, onHandleRemoveUser } = props
   const { onHandleChangeCreateEditState, onHandleChangeUserState } = useEditCreateStore((state) => state)

   return (
      <article className="pb-12 h-full">
         {user ? (
            <>
               <div>
                  <div className="relative z-auto w-full h-32 lg:h-48">
                     <Image src={user.coverImageUrl} alt="Profile background image" objectFit="cover" layout="fill" />
                  </div>

                  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                        <div className="relative flex h-24 w-24 z-auto sm:h-32 sm:w-32 rounded-full ring-4 ring-white">
                           <Image
                              className="rounded-full"
                              src={user.imageUrl}
                              alt="profile image"
                              objectFit="cover"
                              layout="fill"
                           />
                        </div>
                        <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                           <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                              <h1 className="text-2xl font-bold text-gray-900 truncate">
                                 {user.name} {user.lastName}
                              </h1>
                           </div>
                           <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                              <button
                                 type="button"
                                 className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                 onClick={() => (onHandleChangeUserState(user), onHandleChangeCreateEditState('EDIT'))}
                              >
                                 <PencilIcon
                                    className="-ml-1 mr-2 h-5 w-5 text-white hover:text-gray-700"
                                    aria-hidden="true"
                                 />
                                 <span>Edit</span>
                              </button>
                              <button
                                 type="button"
                                 className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                 onClick={() => onHandleRemoveUser(user)}
                              >
                                 <TrashIcon
                                    className="-ml-1 mr-2 h-5 w-5 text-white hover:text-gray-700"
                                    aria-hidden="true"
                                 />
                                 <span>Remove</span>
                              </button>
                           </div>
                        </div>
                     </div>
                     <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                        <h1 className="text-2xl font-bold text-gray-900 truncate">
                           {user.name} {user.lastName}
                        </h1>
                     </div>
                  </div>
               </div>

               {/* Description list */}
               <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                     {(Object.keys(user.fields) as StringKeys<typeof user.fields>).map((field) => (
                        <div key={field} className="sm:col-span-1">
                           <dt className="text-sm font-medium text-gray-500 capitalize">{field}</dt>
                           <dd className="mt-1 text-sm text-gray-900">{user.fields[field]}</dd>
                        </div>
                     ))}
                     <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500">About</dt>
                        <dd
                           className="mt-1 max-w-prose text-sm text-gray-900 space-y-5"
                           dangerouslySetInnerHTML={{ __html: user.about }}
                        />
                     </div>
                  </dl>
               </div>
            </>
         ) : (
            <Empty users={userList.slice(0, 4)} onHandleSelectUser={onHandleSelectUser} />
         )}
      </article>
   )
}

export { UserDescription }
