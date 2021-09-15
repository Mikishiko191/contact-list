import { User } from '../mocks/DTO'

export const sortedLettersFromUserNames = (users: User[]) => {
   let letters = []

   for (let key in users) {
      const element = users[key]
      letters.push(element.name[0])
   }

   return [...Array.from(new Set(letters)).sort()]
}
