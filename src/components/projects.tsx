import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { porjects } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import GradiantGridBackground from './gradiant-grid-background'


const Projects = () => {
  return (
    <section id='projects' className='relative w-full mb-40 bg-hero'>
      <GradiantGridBackground/>
      <div className='flex flex-col items-center'>
        <h1 className='relative z-30 text-4xl mb-5 py-2 dark:text-slate-200 w-fit'>
          Projects
          <span className="absolute inset-x-0 w-[80%] mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#00CC00] to-transparent  h-[2px]"/>
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full pt-10 px-20 md:px-[100px] lg:px-[150px]'>
          {porjects.map(project=>(
            <Card key={project.name} className='z-30 w-full bg-zinc-900'>
              <CardHeader>
                <Image  
                  src={project.image}
                  width={400}
                  height={300}
                  alt={project.name}
                  className='w-auto rounded-sm'
                />
              </CardHeader>
              <CardContent>
                <h2 className='text-xl mb-5 text-slate-200'>{project.name}</h2>
                <p className='text-sm text-slate-300'>{project.description}</p>
              </CardContent>
              <CardFooter>
                <Link 
                  href={project.demoLink}
                  className='px-3 py-2 bg-zinc-950 rounded-md flex items-center gap-2 text-sm'
                  target='_blank'
                >
                  see demo 
                  <ArrowUpRight size={15}/>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects