"use client"

import { createInstance } from 'i18next'
import React, { ReactNode } from 'react'
import initTranslations from '@/app/i18n'
import { I18nextProvider } from 'react-i18next'

type Props = {
    children : ReactNode,
    locale : any,
    namespaces : any,
    resouces : any
}

const TranslationsProvider = ({children, locale, namespaces, resouces}: Props) => {
    const i18n = createInstance()
    initTranslations(locale, namespaces, i18n, resouces)
  return (
    <I18nextProvider i18n={i18n}>
        {children}
    </I18nextProvider>
  )
}

export default TranslationsProvider