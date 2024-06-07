import React from 'react'
import { Button } from './ui/button'
import ComputerCanvas from './computer-canvas'
import Link from 'next/link'


const Hero = () => {
  return (
    <section className=' w-full h-[calc(100vh-70px)] bg-hero bg-cover flex items-center mt-[70px]'>
      <div className='w-full h-full flex flex-col justify-center lg:flex-row lg:items-center lg:justify-between'>

        <div className='flex-1 grow-[2] flex w-full flex-col items-start justify-start  pl-10 '>
          <h1 className="flex items-center gap-2 text-4xl font-bold mb-4 lg:text-2xl">
            Hi, I'm 
            <p className='text-[#00CC00]'>Kelalech Omar</p>
          </h1>
          <p className="text-xl md:max-lg:text-lg mb-8">A passionate Web Developer specializing in modern web technologies.</p>
          <div className='hidden md:flex items-center gap-6'>
            <Link href={"/#work"} className='px-4 py-2 rounded-sm bg-[#00CC00] shadow-[0_2px_10px_1px_#00CC00] hover:shadow-[0_5px_20px_1px_#00CC00] transition-all'> Hire Me</Link>
            <Link href={"/#work"} className='px-4 py-2 rounded-sm border-2 border-[#00CC00] hover:shadow-[0_5px_20px_1px_#00CC00] transition-all'>My Work</Link>
          </div>
        </div>

        <div className='flex-1 grow-[3] shrink-0 basis-1 h-full'>
          <ComputerCanvas/>
        </div>
      </div>
    </section>
  )
}

export default Hero