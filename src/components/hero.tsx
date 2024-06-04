import React from 'react'
import { Button } from './ui/button'
import ComputerCanvas from './computer-canvas'


const Hero = () => {
  return (
    <section className='w-full h-screen bg-hero px-10 flex items-center'>
      <div className='w-full flex flex-col sm:flex-row sm:items-center sm:justify-between '>
        <div className='flex flex-col items-start justify-start'>
          <h1 className="text-4xl font-bold mb-4">Hi, I'm Kelalech Omar</h1>
          <p className="text-xl mb-8">A passionate Web Developer specializing in modern web technologies.</p>
          <Button>
            Hire me
          </Button>
        </div>
        <ComputerCanvas/>
      </div>
    </section>
  )
}

export default Hero