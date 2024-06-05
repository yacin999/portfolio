"use client"

import React from 'react'
import { ModeToggle } from './mode-toggle'
import { useTranslation } from 'next-i18next'
import LanguageChanger from './language-changer'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { orbitron } from '@/app/fonts'
import { navLinks } from '@/constants'
import Link from 'next/link'


const Navbar = () => {
    const { t } = useTranslation()


  return (
    <nav id='home' className=" fixed top-0 z-20 w-full px-10 md:px-20 py-4 backdrop-blur-lg h-[70px]">
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
                {navLinks.map(link=>(
                    <li className=' cursor-pointer' key={link.id}>
                        <Link href={`/#${link.id}`}>{t(`navbar.${link.title}`)}</Link>
                    </li>
                ))}
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