"use client"

import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { projects } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpLeft, ArrowUpRight } from 'lucide-react'
import GradiantGridBackground from './gradiant-grid-background'
import { motion } from "framer-motion"
import { useTranslation } from 'next-i18next'
import { ProjectsType } from '@/lib/types'
import { useParams } from 'next/navigation'
import { cn } from '@/lib/utils'
import Github from './icons/Github'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import { Badge } from './ui/badge'


const Projects = () => {
  const { t } = useTranslation()
  const { locale } = useParams()
  const translatedProjects = t('projects', { returnObjects: true }) as ProjectsType
  return (
    <section id='projects' className='relative w-full mb-40 bg-hero'>
      <GradiantGridBackground/>
      <div className='flex flex-col items-center'>
        <motion.h1 
          className='relative z-30 text-4xl mb-5 py-2 dark:text-slate-200 w-fit'
          initial={{opacity: 0 }}
          whileInView={{opacity : 1}}
          transition={{duration : 0.4, delay : 0.4}}
          viewport={{once : true}}
        >
          {t("projects.title")}
          <span className="absolute inset-x-0 w-[80%] mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#00CC00] to-transparent  h-[2px]"/>
        </motion.h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full pt-10 px-20 md:px-[100px] lg:px-[150px]'>
          {translatedProjects.cards.map((card, idx)=>(
            <motion.div
              className='z-30'
              initial={{ y : 50, opacity: 0 }}
              whileInView={{ y : 0, opacity : 1}}
              transition={{duration : 0.4, delay : 0.4}}
              viewport={{once : true}}
              key={idx}
            >
              <Card className='relative w-full h-full flex flex-col bg-zinc-900'>
                <div className='absolute top-7 right-7 flex gap-1 ltr'>
                  {projects[idx].sourceCode !== "" && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Link 
                              href={projects[idx].sourceCode}
                              className='px-2 py-2 bg-[#7F1D1D] rounded-md flex items-center gap-2 text-sm'
                              target='_blank'
                            >
                              <Github size={15} className='fill-white'/>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent sideOffset={1}>
                            <p>Github Code</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )
                  }
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Link 
                          href={projects[idx].demoLink}
                          className='px-2 py-2 bg-green-950 rounded-md flex items-center gap-2 text-sm'
                          target='_blank'
                        >
                          <ArrowUpRight size={15} className=' stroke-[2.75px]'/> 
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent sideOffset={1}>
                        <p>Live Demo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <CardHeader>
                  <Image  
                    src={projects[idx].image}
                    width={400}
                    height={300}
                    alt={projects[idx].name}
                    className='w-auto rounded-sm'
                  />
                </CardHeader>
                <CardContent>
                  <h2 className='text-xl mb-5 text-slate-200'>{projects[idx].name}</h2>
                  <p className='text-sm text-slate-300'>{card.description}</p>
                </CardContent>
                <CardFooter className='mt-auto flex gap-1 flex-wrap'>
                  {projects[idx].tools.map(tool=>(
                    <Badge variant={"secondary"}>{tool}</Badge>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects