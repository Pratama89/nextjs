import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='text-2xl font-bold text-center'>
      <Head>
        <title>Pharmadent</title>
      </Head>
      <div className='mt-5'>Selamat Datang Di Pharmadent</div>
    </div>
  )
}
