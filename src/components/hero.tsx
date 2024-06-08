"use client"

import React from 'react'
import ComputerCanvas from './computer-canvas'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { orbitron } from '@/app/fonts'
import { i18n, useTranslation } from 'next-i18next'
import { useParams } from 'next/navigation'
import clsx from 'clsx'


const Hero = () => {
  const { t } = useTranslation()
  const { locale } = useParams()

  return (
    <section className=' w-full h-[calc(100vh-70px)] bg-hero bg-cover flex items-center mt-[70px]'>
      <div className='w-full h-full flex flex-col justify-center lg:flex-row lg:items-center lg:justify-between'>

        <div className={clsx("lg:flex-1 lg:grow-[2] w-full m-auto", {
          "pl-10" : locale === "fr" || locale || "en", 
          "pr-10" : locale === "ar",
        })}>
            <p className={cn(orbitron.className, 'w-full flex items-center gap-2 uppercase mb-4 dark:text-slate-200 text-sm lg:text-md tracking-widest')}>
              {t("hero.greeting")}
            </p>
          <h1 className="flex items-center flex-wrap gap-2 text-4xl font-bold mb-6 lg:text-5xl">
            {t("hero.heading")}
            <p className='text-[#00CC00]'>{t("hero.lastName")}</p>
            <p className='text-[#00CC00]'>{t("hero.firstName")}</p>
          </h1>
          <p className="text-md md:max-lg:text-lg mb-8 dark:text-slate-300">{t("hero.details")}</p>
          <div className='hidden md:flex items-center gap-6'>
            <Link href={"/#work"} className='px-4 py-2 rounded-sm bg-[#00CC00] shadow-[0_2px_10px_1px_#00CC00] hover:shadow-[0_5px_20px_1px_#00CC00] transition-all'> {t("hero.hireBtn")}</Link>
            <Link href={"/#work"} className='px-4 py-2 rounded-sm border-2 border-[#00CC00] hover:shadow-[0_5px_20px_1px_#00CC00] transition-all'>{t("hero.workBtn")}</Link>
          </div>
        </div>

        <div className='lg:flex-1 lg:grow-[3] h-[60%] lg:max-w-[60%] lg:h-full'>
          <ComputerCanvas/>
        </div>
      </div>
    </section>
  )
}

export default Hero