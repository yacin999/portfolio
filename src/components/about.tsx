"use client"

import Image from 'next/image'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { skillsIcons } from '@/constants'

type Props = {}

const About = (props: Props) => {
  return (
    <section className='flex flex-col items-center mt-10 p-20 relative w-full bg-hero bg-[#191A19] mb-10'>

          {/* start square gradiant grid background */}
          <div className="absolute z-10 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
          </div>
          <div className='absolute z-20 bottom-0 left-0 right-0 top-0 w-full h-full bg-gradient-to-b from-background via-transparent to-background'></div>
          {/* end square gradiant grid background */}


          <h1 className='relative z-30 text-4xl mb-5 py-2 dark:text-slate-200'>
          About me
          <span className="absolute inset-x-0 w-[80%] mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#00CC00] to-transparent  h-[2px]"/>
          </h1>
          <p className='mb-5 z-30 text-sm text-slate-200'>My journey into web development began in first year of university, where I discovered a love for coding and problem-solving. This passion has driven me to continuously improve my skills and stay updated with the latest web development trends and technologies.
          With a degree in Computer Science and certifications in Full Stack Web Development and Merise and UML Project Management, my background combines technical proficiency with strategic thinking.</p>
{/*             

            <p. When I'm not coding, you can find me exploring the latest tech blogs, or other fields.</p> */}
          <div className='w-full flex flex-col items-center gap-14 lg:flex-row lg:justify-center'>
            {/* <div className='flex flex-col justify-center items-center gap-5 p-10 z-30 backdrop-blur-lg border-2 border-border rounded-lg dark:text-slate-300 max-w-md'>
              <Image
                src={"/assets/frontend.svg"}
                width={100}
                height={100}
                alt='frontend'
              />  
              
            </div>
            <div className='flex flex-col justify-center items-center gap-5 p-10 z-30 backdrop-blur-lg border-2 border-border rounded-lg dark:text-slate-300 max-w-md'>
              <Image
                src={"/assets/backend.svg"}
                width={100}
                height={100}
                alt='backend'
              />  
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, voluptatibus nobis debitis aspernatur obcaecati quos libero natus aperiam? Blanditiis soluta harum officiis, ducimus cupiditate debitis magni? Quam corrupti exercitationem amet!
            </div> */}
            <Card className='flex flex-col justify-between items-center p-10 z-30 bg-white/10 backdrop-blur-xl border-2 border-border rounded-lg dark:text-slate-300 max-w-md  sm:min-w-[440px] min-h-[400px]'>
              <CardHeader className='h-[40%]'>
                <Image
                    src={"/assets/frontend.svg"}
                    width={100}
                    height={100}
                    alt='frontend'
                    className='h-auto'
                />  
              </CardHeader>
              <CardContent  className='h-[60%]'>
                <h1 className='text-3xl mb-5'>Frontend developer</h1>
                <p className='text-sm text-slate-200'>I specialize in front-end development, with a good understanding of SSR, SSG that Next js introduces and a solid knowledge in HTML, CSS, JavaScript, and React...</p>
              </CardContent>
            </Card>

            <Card className='flex flex-col justify-between items-center p-10 z-30 bg-white/10 backdrop-blur-xl border-2 border-border rounded-lg dark:text-slate-300 max-w-md sm:min-w-[440px]  min-h-[400px]'>
              <CardHeader  className='h-[40%]'>
                <Image
                  src={"/assets/backend.svg"}
                  width={100}
                  height={100}
                  alt='backend'
                />  
              </CardHeader>
              <CardContent  className='h-[60%]'>
                <h1  className='text-3xl mb-5'>Backend developer</h1>
                <p className='text-sm text-slate-200'>have a solid understanding of back-end technologies and Databases like Node.js, Django and Django Rest Framework for building powerfull APIs.</p>
              </CardContent>
            </Card>
          </div>

        {/* <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
          </div>
        </div> */}

        {/* <h1 className='relative z-30 text-4xl mb-10 py-2 dark:text-slate-200 mt-20'>
          My tools
        <span className="absolute inset-x-0 w-[80%] mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#00CC00] to-transparent  h-[2px]"></span>
        </h1> */}

        <div className='z-30 flex items-center justify-center gap-3 flex-wrap mt-24'>
            {skillsIcons.map(skill=>(
              <Image
                key={skill.name}
                src={skill.icon}
                width={50}
                height={50}
                alt={skill.name}
                className='rounded-full border-2 border-border bg-background'
              />
            ))}
          </div>

    </section>
  )
}

export default About