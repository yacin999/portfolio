"use client"

import React from 'react'
import { Form } from './ui/form'
import { socialMedia } from '@/constants'
import Image from 'next/image'
import GradiantGridBackground from './gradiant-grid-background'

type Props = {}

const Contact = (props: Props) => {
  return (
    <section className='relative flex items-center px-10'>
      <GradiantGridBackground/>
      <div className='relative z-30 flex-1 flex flex-col items-center'>
        <div className='mb-10'>
          <p className='text-md text-blue-500 border-2 border-blue-500 rounded-full bg-background px-5 py-2 w-fit mb-4'>Email : boutiqueserviceinfo.com</p>
          <div className='text-md  text-blue-500 border-2 border-blue-500 rounded-full bg-background  px-5 py-2 w-fit'>phone : 0676299345</div>
        </div>
        <div className='flex gap-5 items-center'>
          {socialMedia.map(icon=>(
            <Image  
              src={icon.src}
              width={40}
              height={40}
              alt={icon.name}
              className='cursor-pointer'
            />
          ))}
        </div>
      </div>
      <div className='flex-1'>
        <Form/>
      </div>
    </section>
  )
}

export default Contact