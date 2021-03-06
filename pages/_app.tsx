import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
   require('../mocks')
}

function App({ Component, pageProps }: AppProps) {
   return (
      <>
         <Component {...pageProps} />
         <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
         />
      </>
   )
}
export default App
