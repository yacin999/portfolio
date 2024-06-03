import React from 'react'
import { Button } from './ui/button'


const Hero = () => {
  return (
    <section className='w-screen'>
      <div className='flex flex-col sm:flex-row'>
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Kelalech Omar</h1>
        <p className="text-xl mb-8">A passionate Web Developer specializing in modern web technologies.</p>
        <div>
          <Button>
            Hire me
          </Button>
        </div>
      </div>
      <div>

      </div>
    </section>
  )
}

export default Hero