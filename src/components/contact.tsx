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
      <div className='relative z-30 flex-1'>
        <div className='mb-10'>
          <div>Email : boutiqueserviceinfo.com</div>
          <div>phone : 0676299345</div>
        </div>
        <div className='flex gap-3 items-center'>
          {socialMedia.map(icon=>(
            <Image  
              src={icon.src}
              width={25}
              height={25}
              alt={icon.name}
              className=''
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