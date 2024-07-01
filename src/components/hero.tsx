"use client"

import React from 'react'
import ComputerCanvas from './computer-canvas'
import Link from 'next/link'
import { orbitron } from '@/app/fonts'
import { useTranslation } from 'next-i18next'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import GradiantGridBackground from './gradiant-grid-background'


const Hero = () => {
  const { t } = useTranslation()
  const { locale } = useParams()
  return (
    <section id='hero' className='relative w-full h-[calc(100vh-70px)] bg-hero  bg-cover flex items-center mt-[70px]'> 
      <GradiantGridBackground/>
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

        <div className='hidden md:block lg:flex-1 lg:grow-[3] h-[50%] lg:h-full lg:max-w-[60%] '>
          <ComputerCanvas locale={locale}/>
        </div>
      </div>
    </section>
  )
}

export default Hero