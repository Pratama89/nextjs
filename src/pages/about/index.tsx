import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <div className='text-2xl font-bold text-center mt-5'>
      <h1 id='title' data-testid="title">About Pages</h1>
    </div>
  )
}