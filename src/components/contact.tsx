"use client"

import React, {lazy} from 'react'
import { FormWrapper } from './ui/form-wrapper'
import { socialMedia } from '@/constants'
import GradiantGridBackground from './gradiant-grid-background'
import Link from 'next/link'
import { motion } from "framer-motion"
import { useTranslation } from 'next-i18next'

const iconsComponents : any = {
  Facebook: lazy(() => import('./icons/Facebook')),
  LinkedIn: lazy(() => import('./icons/LinkedIn')),
  Github: lazy(() => import('./icons/Github')),
};


const Contact = () => {
  const { t } = useTranslation()
  return (
    <section id='contact' className='relative flex flex-col lg:flex-row lg:items-center gap-20 px-10 mb-20'>
      <GradiantGridBackground/>
      <motion.div 
        className='relative z-30 flex-1 flex flex-col items-center'
        initial={{ x : -40, opacity: 0 }}
        whileInView={{ x : 0, opacity : 1}}
        transition={{duration : 0.4, delay : 0.4}}
        viewport={{once : true}}
      >
        <div className='flex flex-col items-center'>
          <div className='mb-20 flex flex-col items-center'>
            <p className='text-md text-[#00CC00] border-2 border-[#00CC00] rounded-full bg-background px-5 py-2 w-fit mb-4'>{t("contact.email")} : boutiqueserviceinfo.com</p>
            <div className='text-md  text-[#00CC00] border-2 border-[#00CC00] rounded-full bg-background  px-5 py-2 w-fit'>{t("contact.phone")} : 0676299345</div>
          </div>
          <div className='flex gap-5'>
            {socialMedia.map(icon=> {
              const Component = iconsComponents[icon.component]
              return <Link 
                key={icon.name} 
                href={icon.link}
                target='_blank'
                aria-label={`${icon.name} social media link`}
                >
                <Component size={30} className="fill-[#00CC00]"/>
              </Link>
            })}
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        className='flex-1'
        initial={{ x : 40, opacity: 0 }}
        whileInView={{ x : 0, opacity : 1}}
        transition={{duration : 0.4, delay : 0.4}}
        viewport={{once : true}}
      >
        <FormWrapper/>
      </motion.div>
    </section>
  )
}

export default Contact