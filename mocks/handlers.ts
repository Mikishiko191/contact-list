import faker from 'faker'
import { rest } from 'msw'
import { users } from './Fake_DATA'
import { v4 as uuidv4 } from 'uuid'

// Utils
import { sortedLettersFromUserNames } from '../utils/sortedLettersFromUserNames'

export const url = `${process.env.NEXT_PUBLIC_API_URL}/users`

export const handlers = [
   rest.get(url, (req, res, ctx) => {
      return res(
         ctx.status(200),
         ctx.delay(500),
         ctx.json({
            users,
            lettersInUserList: sortedLettersFromUserNames(users),
         })
      )
   }),
   rest.post(url, (req: any, res, ctx) => {
      const { data } = JSON.parse(req.body)

      const createUser = {
         id: uuidv4(),
         name: data.name,
         lastName: data.lastName,
         role: faker.name.jobType(),
         imageUrl: faker.image.avatar(),
         fields: {
            groupe: data.groupe,
            phone: faker.phone.phoneNumberFormat(),
            email: data.email,
            title: faker.name.jobTitle(),
            location: faker.address.cityName(),
         },
         about: `
       <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
       <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
   `,
         coverImageUrl:
            'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      }

      return res(ctx.status(200), ctx.delay(500), ctx.json(createUser))
   }),
   rest.delete(url, (req, res, ctx) => {
      const removedUser = users.filter((user) => user.id !== req.body)
      return res(ctx.status(200), ctx.delay(500), ctx.json(removedUser))
   }),
   rest.put(url, (req: any, res, ctx) => {
      const { data } = JSON.parse(req.body)

      const updatedData = {
         id: data.id,
         name: data.name,
         lastName: data.lastName,
         role: data.role,
         imageUrl: data.imageUrl,
         fields: {
            groupe: data.groupe,
            phone: faker.phone.phoneNumberFormat(),
            email: data.email,
            title: faker.name.jobTitle(),
            location: faker.address.cityName(),
         },
         about: `
       <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
       <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
   `,
         coverImageUrl:
            'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      }

      const removeUser = users.filter((user) => user.id !== updatedData.id)

      const merge = [...removeUser, updatedData]

      return res(ctx.status(200), ctx.delay(500), ctx.json(merge))
   }),
]
