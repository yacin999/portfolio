import React from 'react'


const GradiantGridBackground = () => {
  return (
    <>
        <div 
          className="absolute z-10 bottom-0 left-0 right-0 top-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, #4f4f4f2e 1px, transparent 1px), linear-gradient(to bottom, #4f4f4f2e 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        >
        </div>
        <div className='absolute z-20 bottom-0 left-0 right-0 top-0 w-full h-full bg-gradient-to-b from-background via-transparent to-background'></div>
    </>
  )
}

export default GradiantGridBackground