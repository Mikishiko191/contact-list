import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import faker from 'faker'
// import { useForm, SubmitHandler } from 'react-hook-form'
// import useSWR from 'swr'

type Inputs = {
   name: string
   email: string
}

// const fetchUsers = () => {
//    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`).then((response) => response.json())
// }

const Home: NextPage = () => {
   // const {
   //    register,
   //    handleSubmit,
   //    formState: { errors },
   // } = useForm<Inputs>()
   // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

   // const { data, error } = useSWR('users', fetchUsers)

   // if (error) return <div>failed to load</div>
   // if (!data) return <div>loading...</div>

   return (
      <div className="bg-gray-50">
         <Head>
            <title>Contact list</title>
            <meta name="description" content="Find &amp; your favorite contact" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         {faker.name.jobTitle()}

         <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
               <span className="block">Ready to dive in?</span>
               <span className="block text-indigo-600">Start your free trial today with {faker.name.findName()}</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
               <div className="inline-flex rounded-md shadow">
                  <a
                     href="#"
                     className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                     Get started
                  </a>
               </div>
               <div className="ml-3 inline-flex rounded-md shadow">
                  <a
                     href="#"
                     className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                  >
                     Learn more
                  </a>
               </div>
            </div>
         </div>
         <Image width={60} height={60} src={faker.image.avatar()} alt="Picture of the author" />
         {/* <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="test" {...register('name')} />

            <input {...register('email', { required: true })} />
            {errors.email && <span>This field is required</span>}

            <input type="submit" />
         </form> */}
      </div>
   )
}

// export async function getServerSideProps() {
//    // Server-side requests are mocked by `mocks/server.js`.
//    const res = await fetch('http://my.backend/reviews')
//    const book = await res.json()

//    return {
//       props: {
//          book,
//       },
//    }
// }

export default Home
