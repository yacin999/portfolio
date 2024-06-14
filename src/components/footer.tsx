import { socialMedia } from '@/constants';
import Link from 'next/link';
import React, {lazy} from 'react'
const iconsComponents : any = {
    Facebook: lazy(() => import('./icons/Facebook')),
    LinkedIn: lazy(() => import('./icons/LinkedIn')),
    Github: lazy(() => import('./icons/Github')),
  };


const Footer = () => {

  return (
    <footer className='flex flex-col gap-20 lg:flex-row lg:items-center lg:justify-between py-8 px-20 dark:bg-zinc-900'>
        <div className='text-sm dark:text-slate-300'>&copy; 2024 - Kelalech Omar . All rights reserved</div>
        <div className='flex gap-8'>
            {socialMedia.map(icon=> {
                const Component = iconsComponents[icon.component]
                return <Link key={icon.name} href={icon.link}>
                    <Component size={15} className="fill-slate-300"/>
                </Link>
            })}
        </div>
    </footer>
  )
}

export default Footer