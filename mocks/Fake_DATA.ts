import faker from 'faker'
import { v4 as uuidv4 } from 'uuid'

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

export const users: User[] = [
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'Family',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'Friends',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'School',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'Work',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'Family',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'Friends',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'School',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'Work',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'Family',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'Friends',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'School',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'Work',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'Family',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'Friends',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'School',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'Work',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'Family',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'Friends',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'School',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'Work',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'Family',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'Friends',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'School',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'Work',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'Family',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'Friends',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'School',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'Work',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'Family',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'Friends',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'School',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'Work',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'Family',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'Friends',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'School',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'Work',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'Family',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'Friends',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'School',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
   {
      id: uuidv4(),
      name: faker.name.findName(),
      lastName: faker.name.lastName(),
      role: faker.name.jobType(),
      imageUrl: faker.image.avatar(),
      fields: {
         groupe: 'Work',
         phone: faker.phone.phoneNumberFormat(),
         email: faker.internet.email(),
         title: faker.name.jobTitle(),
         location: faker.address.cityName(),
      },
      about: `
          <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
          <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
      `,
      coverImageUrl:
         'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
   },
]

export const sortedLettersFromUserName = (users: User[]) => {
   let letters = []

   for (let key in users) {
      const element = users[key]
      letters.push(element.name[0])
   }

   return [...Array.from(new Set(letters)).sort()]
}
