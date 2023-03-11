import Footer from '@/components/footer'
import Header from '@/components/header'
import Layout from '@/components/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
    {/* <h1 className='bg-blue-100 text-3xl font-bold underline'>NIGGA</h1> */}
    <div className='text-slate-700 flex flex-col gap-4'>
      <Header />
        <Component {...pageProps} />
      <Footer />
    </div>
    </Layout>
  )
}
