"use client"

import React from 'react'
import { ModeToggle } from './providers/mode-toggle'
import { useTranslation } from 'next-i18next'
import LanguageChanger from './language-changer'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { orbitron } from '@/app/fonts'


const Navbar = () => {
    const { t } = useTranslation()


  return (
    <nav className=" sticky top-0 px-10 md:px-20 py-4 backdrop-blur-lg">
        <div className="flex items-center justify-between">
        <aside>
            <div className='relative flex items-end ltr'>
                <Image
                    src={"/assets/portfolio-logo.svg"}
                    width={30}
                    height={30}
                    alt='portfolio logo'
                />
                <p className={cn(orbitron.className, "text-xl tracking-wider -mb-[5px]")}>elalech</p>
                <span className='text-[#00CC00] text-xl font-bold ml-[2px]  -mb-[3px]'>;</span>
            </div>
        </aside>
        <div className='hidden md:block'>
            <ul className="flex items-center gap-10">
                <li className=' cursor-pointer'>{t("navbar.home")}</li>
                <li className=' cursor-pointer'>{t("navbar.about")}</li>
                <li className=' cursor-pointer'>{t("navbar.projects")}</li>
                <li className=' cursor-pointer'>{t("navbar.contact")}</li>
            </ul>
        </div>
        <aside className="flex items-center gap-8">
            <LanguageChanger/>
            <ModeToggle/>
        </aside>
        </div>
  </nav>
  )
}

export default Navbar