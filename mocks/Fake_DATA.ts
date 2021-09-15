import faker from 'faker'
import { v4 as uuidv4 } from 'uuid'

// DTO
import { User } from './DTO'

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
