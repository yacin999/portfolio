"use client"

import React, { Suspense } from 'react'
import ComputerCanvas from './computer-canvas'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useTranslation } from 'next-i18next'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import clsx from 'clsx'

import { orbitron } from '@/app/fonts'
import GradiantGridBackground from './gradiant-grid-background'


const View : any = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const Computer = dynamic(()=> import("@/components/canvas/Computer"), {
  ssr : false
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })





const Hero = () => {
  const { t } = useTranslation()
  const { locale } = useParams()
  return (
    <section id='hero' className='relative w-full h-[calc(100vh-70px)] bg-hero  bg-cover flex items-center mt-[70px]'> 
      {/* <GradiantGridBackground/> */}
      
      <div className='z-30 w-full h-full flex flex-col justify-center lg:flex-row lg:items-center lg:justify-between'>
        {/* heading content */}
        <motion.div 
          className={clsx("lg:flex-1 lg:grow-[2] w-full m-auto", {
            "pl-10" : locale === "fr" || locale === "en", 
            "pr-10" : locale === "ar",
          })}
          initial={{scale : 0.8, opacity : 0}}
          animate={{scale : 1, opacity : 1}}
          transition={{duration : 0.2, ease : "linear"}}
        >
            <p className={clsx("w-full flex items-center gap-2 uppercase mb-4 dark:text-slate-200 text-sm lg:text-md tracking-widest", {
              [orbitron.className] : locale === "fr" || locale === "en",
            })}>
              {t("hero.greeting")}
            </p>
          <h1 className={clsx("flex items-center flex-wrap gap-2 text-4xl font-bold mb-6 lg:text-5xl", {
            "lg:text-6xl mt-8" : locale === "ar"
          })}>
            {t("hero.heading")}
            <p className='text-[#00CC00]'>{t("hero.lastName")}</p>
            <p className='text-[#00CC00]'>{t("hero.firstName")}</p>
          </h1>
          <p className="text-md md:max-lg:text-lg mb-8 dark:text-slate-300">{t("hero.details")}</p>
          <div className=' flex items-center gap-6'>
            <Link 
              href={"/#contact"} 
              className='px-4 py-2 rounded-sm bg-[#00CC00] shadow-[0_1px_8px_1px_#00CC00] hover:shadow-[0_2px_15px_1px_#00CC00] transition-all'
            > {t("hero.hireBtn")}</Link>
            <Link 
              href={"/#projects"} 
              className='px-4 py-2 rounded-sm border-2 backdrop-blur-md border-[#00CC00] hover:shadow-[0_1px_15px_1px_#00CC00] transition-all'
            >{t("hero.workBtn")}</Link>
          </div>
        </motion.div>

          {/* hero canvas */}
        <div className='relative hidden md:block lg:flex-1 lg:grow-[3] h-[50%] lg:h-full lg:max-w-[60%]'>
          {/* <ComputerCanvas locale={locale}/> */}
          <View 
            className='relative h-full sm:h-48 sm:w-full'
            orbit
          >
            <Suspense fallback={null}>
              <Computer/>
              <Common/>
            </Suspense>
          </View>
        </div>
      </div>
    </section>
  )
}

export default Hero