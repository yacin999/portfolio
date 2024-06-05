import React from 'react'
import { Button } from './ui/button'
import ComputerCanvas from './computer-canvas'


const Hero = () => {
  return (
    <section className=' w-full h-[calc(100vh-70px)] bg-hero bg-cover flex items-center mt-[70px]'>
      <div className='w-full h-full flex flex-col sm:flex-row sm:items-center sm:justify-between '>
        <div className='flex w-full flex-col items-start justify-start  px-10 '>
          <h1 className="flex items-center gap-2 text-4xl font-bold mb-4">
            Hi, I'm 
            <p className='text-[#00CC00]'>Kelalech Omar</p>
          </h1>
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