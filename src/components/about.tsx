"use client"

import Image from 'next/image'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { skillsIcons } from '@/constants'
import { AnimatedTooltip } from './ui/animated-tooltip'
import { SkullIcon } from 'lucide-react'
import GradiantGridBackground from './gradiant-grid-background'
import { motion } from "framer-motion"
import { useTranslation } from 'next-i18next'

type Props = {}

const About = (props: Props) => {
  const { t } = useTranslation()
  return (
    <section id='about' className='flex flex-col items-center mt-10 p-10 lg:p-20 relative w-full bg-hero bg-[#191A19] mb-10'>
      <GradiantGridBackground/>
      <motion.div
        initial={{ scale : 0.8, opacity: 0 }}
        whileInView={{ scale : 1, opacity : 1}}
        transition={{duration : 0.4, delay : 0.4}}
        viewport={{once : true}}
        className='z-30 flex flex-col items-center mb-10 w-full'
      >
        <h1 className='relative z-30 text-4xl mb-5 py-2 dark:text-slate-200 w-fit'>
         {t("about.title")}
        <span className="absolute inset-x-0 w-[80%] mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#00CC00] to-transparent  h-[2px]"/>
        </h1>
        <p className='mb-5 z-30 text-sm text-slate-200 text-center w-11/12 lg:w-4/5'>{t("about.description")}</p>
      </motion.div>
      
      <motion.div 
        className='z-30 w-full flex flex-col items-center gap-14 lg:flex-row lg:justify-center'
        initial={{ y : 50, opacity: 0 }}
        whileInView={{ y : 10, opacity : 1}}
        transition={{duration : 0.4, delay : 0.6}}
        viewport={{once : true}} 
      >
        <Card className='flex flex-col justify-between items-center p-10 z-30 bg-white/10 backdrop-blur-xl border-2 border-border rounded-lg dark:text-slate-300 max-w-md  sm:min-w-[440px] min-h-[400px]'>
          <CardHeader className='h-[40%]'>
            <Image
                src={"/assets/frontend.svg"}
                width={100}
                height={100}
                alt='frontend'
                className='h-auto'
            />  
          </CardHeader>
          <CardContent  className='h-[60%]'>
            <h1 className='text-3xl mb-5'>{t("about.frontend.title")}</h1>
            <p className='text-sm text-slate-200'>{t("about.frontend.description")}</p>
          </CardContent>
        </Card>
        <Card className='flex flex-col justify-between items-center p-10 z-30 bg-white/10 backdrop-blur-xl border-2 border-border rounded-lg dark:text-slate-300 max-w-md sm:min-w-[440px]  min-h-[400px]'>
          <CardHeader  className='h-[40%]'>
            <Image
              src={"/assets/backend.svg"}
              width={100}
              height={100}
              alt='backend'
            />  
          </CardHeader>
          <CardContent  className='h-[60%]'>
            <h1  className='text-3xl mb-5'>{t("about.backend.title")}</h1>
            <p className='text-sm text-slate-200'>{t("about.backend.description")}</p>
          </CardContent>
        </Card>
      </motion.div>
      <AnimatedTooltip items={skillsIcons}/>
    </section>
  )
}

export default About