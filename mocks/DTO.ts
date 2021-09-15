export type Groupe = 'Family' | 'Friends' | 'School' | 'Work'

export interface Fields {
   phone: string
   email: string
   title: string
   location: string
   groupe: Groupe
}

export interface User {
   id: string
   name: string
   lastName: string
   role: string
   imageUrl: string
   fields: Fields
   about: string
   coverImageUrl: string
}
