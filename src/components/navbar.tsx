"use client"

import React from 'react'
import { ModeToggle } from './providers/mode-toggle'
import { useTranslation } from 'next-i18next'

type Props = {}

const Navbar = (props: Props) => {
    const { t } = useTranslation()
  return (
    <nav className="px-20 py-5 backdrop-blur-lg">
        <div className="flex items-center justify-between">
        <aside>
            <p>Kelalech</p>
        </aside>
        <div>
            <ul className="flex items-center gap-6">
                <li>{t("navbar.home")}</li>
                <li>{t("navbar.aboutUs")}</li>
                <li>{t("navbar.myWork")}</li>
                <li>{t("navbar.contactUs")}</li>
            </ul>
        </div>
        <aside className="flex items-center gap-6">
            <div>En</div>
            <ModeToggle/>
        </aside>
        </div>
  </nav>
  )
}

export default Navbar