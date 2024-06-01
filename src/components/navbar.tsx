"use client"

import React from 'react'
import { ModeToggle } from './providers/mode-toggle'
import { useTranslation } from 'next-i18next'
import LanguageChanger from './language-changer'

type Props = {}

const Navbar = (props: Props) => {
    const { t } = useTranslation()
  return (
    <nav className=" sticky top-0 px-10 md:px-20 py-4 backdrop-blur-lg">
        <div className="flex items-center justify-between">
        <aside>
            <p>{"Ke[a[e<h"}</p>
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