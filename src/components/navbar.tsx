"use client"

import React from 'react'
import { ModeToggle } from './providers/mode-toggle'
import { useTranslation } from 'next-i18next'
import LanguageChanger from './language-changer'
import Image from 'next/image'
import { Orbitron } from 'next/font/google'
import { cn } from '@/lib/utils'

const orbitron = Orbitron({subsets : ["latin"], weight : "500"})

const Navbar = () => {
    const { t } = useTranslation()
  return (
    <nav className=" sticky top-0 px-10 md:px-20 py-4 backdrop-blur-lg">
        <div className="flex items-center justify-between">
        <aside>
            <div className='flex items-end ltr'>
                <Image
                    src={"/assets/portfolio-logo.svg"}
                    width={30}
                    height={30}
                    alt='portfolio logo'
                />
                <p className={cn(orbitron.className, "text-xl tracking-wider -mb-[6px]")}>elalech;</p>
                {/* <p className={cn(dm_sans.className, " font-semibold text-lg ")}>{"e[a[e<h;"}</p> */}
            </div>
        </aside>
        <div className='hidden md:block'>
            <ul className="flex items-center gap-6">
                <li>{t("navbar.home")}</li>
                <li>{t("navbar.aboutUs")}</li>
                <li>{t("navbar.myWork")}</li>
                <li>{t("navbar.contactUs")}</li>
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