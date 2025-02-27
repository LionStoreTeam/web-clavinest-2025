import React from 'react'
import About from './_sections/About'
import { Hero } from './_sections/Hero'
import { GridImages } from './_sections/GridImages'

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col items-center text-center cursor-default select-none'>
      <Hero />
      <About />
      <GridImages />
    </main>
  )
}
