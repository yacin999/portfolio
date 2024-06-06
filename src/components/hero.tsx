import React from 'react'
import { Button } from './ui/button'
import ComputerCanvas from './computer-canvas'
import Link from 'next/link'


const Hero = () => {
  return (
    <section className='relative w-full h-screen bg-hero bg-cover mx-auto'>
      {/* <div className='w-full h-full flex flex-col sm:flex-row sm:items-center sm:justify-between '> */}
        <div className='absolute top-[120px] flex w-full flex-col items-start justify-start  px-10 max-w-[700px]'>
          <p className='w-full flex items-center gap-2 uppercase mb-3 dark:text-slate-200 text-2xl'>
            hello
            <div className='h-[1px] w-full border border-[#00CC00]'></div>
          </p>
          <h1 className="flex items-center gap-2 text-5xl md:text-6xl font-bold mb-4">
            I'm 
            <p className='text-[#00CC00]'>Kelalech Omar</p>
          </h1>
          <p className="text-lg mb-8 dark:text-slate-200">A passionate Web Developer specializing in modern web technologies.</p>
          <div className='hidden md:flex items-center gap-6'>
            <Link href={"/#work"} className='px-4 py-2 rounded-sm bg-[#00CC00] shadow-[0_2px_10px_1px_#00CC00] hover:shadow-[0_5px_20px_1px_#00CC00] transition-all'> Hire Me</Link>
            <Link href={"/#work"} className='px-4 py-2 rounded-sm border-2 border-[#00CC00] hover:shadow-[0_5px_20px_1px_#00CC00] transition-all'>My Work</Link>
          </div>
        </div>
        <ComputerCanvas/>
      {/* </div> */}
    </section>
  )
}

export default Hero