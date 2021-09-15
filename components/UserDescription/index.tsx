import { User } from '../../mocks/Fake_DATA'
import { MailIcon, TrashIcon, PencilIcon } from '@heroicons/react/solid'
import Image from 'next/image'

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
                              {/* <button
                                 type="button"
                                 className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                              >
                                 <MailIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                                 <span>Message</span>
                              </button> */}
                              <button
                                 type="button"
                                 className="inline-flex justify-center bg-green-500 px-4 py-2 border border-green-300 shadow-sm text-sm font-medium rounded-md text-white hover:text-gray-600 bg-red hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
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
                                 className="inline-flex justify-center bg-red-500 px-4 py-2 border border-red-300 shadow-sm text-sm font-medium rounded-md text-white hover:text-gray-600 bg-red hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
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
                     {Object.keys(user.fields).map((field) => (
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
