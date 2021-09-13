import { sortedLettersFromUserName, User } from '../../mocks/Fake_DATA'
import Image from 'next/image'

interface UserListProps {
   users: User[]
   onHandlePressUser: (person: User) => void
}

const UserList = (props: UserListProps) => {
   const { users, onHandlePressUser } = props

   return (
      <nav className="flex-1 min-h-0 overflow-y-auto" aria-label="Directory">
         {sortedLettersFromUserName(users).map((letter: string) => (
            <div key={letter} className="relative">
               <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
                  <h3>{letter}</h3>
               </div>
               <ul role="list" className="relative z-0 divide-y divide-gray-200">
                  {users.map((person: User) => {
                     if (person.name[0] === letter) {
                        return (
                           <li key={person.id}>
                              <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                                 <div className="flex-shrink-0">
                                    <Image
                                       height={40}
                                       width={40}
                                       className="rounded-full"
                                       src={person.imageUrl}
                                       alt={person.name}
                                    />
                                 </div>
                                 <div className="flex-1 min-w-0">
                                    <button onClick={() => onHandlePressUser(person)} className="focus:outline-none">
                                       <span className="absolute inset-0" aria-hidden="true" />
                                       <p className="text-sm font-medium text-gray-900 text-left">{person.name}</p>
                                       <p className="text-sm text-gray-500 truncate text-left">{person.role}</p>
                                    </button>
                                 </div>
                              </div>
                           </li>
                        )
                     }
                     return null
                  })}
               </ul>
            </div>
         ))}
      </nav>
   )
}

export { UserList }