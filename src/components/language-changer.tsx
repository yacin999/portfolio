import React, { useState } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { ChevronDown, Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { usePathname, useRouter } from 'next/navigation'
import i18nConfig from '../../i18nConfig'


const LanguageChanger = () => {
    // const [languageState, setLanguageState] = useState("en")
    const { t, i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();

    const handleChange = (value : string) => {
        const newLocale = value
        // setLanguageState(newLocale)

        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        // redirect to the new locale path
        if (
        currentLocale === i18nConfig.defaultLocale &&
        !i18nConfig.prefixDefault
        ) {
        router.push('/' + newLocale + currentPathname);
        } else {
        router.push(
            currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
        );
        }

        router.refresh();
    };
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <div className='relative cursor-pointer'>
            <Languages size={18}/>
            <ChevronDown className='absolute top-0 -right-4' size={15}/>
        </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='min-w-20'>
            <DropdownMenuRadioGroup value={currentLocale} onValueChange={handleChange}>
                {["en", "fr", "ar"].map(lacale=> (
                    <DropdownMenuRadioItem key={lacale} value={lacale} checked={lacale === currentLocale} >{lacale}</DropdownMenuRadioItem>
                ))}
            </DropdownMenuRadioGroup>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageChanger