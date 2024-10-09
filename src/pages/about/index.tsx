import { JSX } from 'react'

export default function AboutPage(): JSX.Element {
  return (
    <main>
      <button className='border border-red-400 text-red-500 p-2'>HAMBURGER</button>

      <aside className='lg:hidden'></aside>

      <header>
        <h1 className='text-blue-600 sm:text-red-500 md:text-yellow-400'>About Page</h1>
      </header>
    </main>
  )
}
