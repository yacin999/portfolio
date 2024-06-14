"use client"

import React, {lazy} from 'react'
import { Form } from './ui/form'
import { socialMedia } from '@/constants'
import Image from 'next/image'
import GradiantGridBackground from './gradiant-grid-background'
import Link from 'next/link'

const iconsComponents : any = {
  Facebook: lazy(() => import('./icons/Facebook')),
  LinkedIn: lazy(() => import('./icons/LinkedIn')),
  Github: lazy(() => import('./icons/Github')),
};

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
          {socialMedia.map(icon=> {
            const Component = iconsComponents[icon.component]
            return <Link key={icon.name} href={icon.link}>
              <Component size={30}/>
            </Link>
          })}
        </div>
      </div>
      <div className='flex-1'>
        <Form/>
      </div>
    </section>
  )
}

export default Contact