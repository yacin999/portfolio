"use client"

import Image from 'next/image'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { skillsIcons } from '@/constants'
import { AnimatedTooltip } from './ui/animated-tooltip'
import { SkullIcon } from 'lucide-react'
import GradiantGridBackground from './gradiant-grid-background'
import { motion } from "framer-motion"

type Props = {}

const About = (props: Props) => {
  return (
    <section id='about' className='flex flex-col items-center mt-10 p-20 relative w-full bg-hero bg-[#191A19] mb-10'>
      <GradiantGridBackground/>
      <motion.div
        initial={{ scale : 0.8, opacity: 0 }}
        whileInView={{ scale : 1, opacity : 1}}
        transition={{duration : 0.4, delay : 0.4}}
        viewport={{once : true}}
        className='z-30 flex flex-col items-center mb-10'
      >
        <h1 className='relative z-30 text-4xl mb-5 py-2 dark:text-slate-200 w-fit'>
        About me
        <span className="absolute inset-x-0 w-[80%] mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#00CC00] to-transparent  h-[2px]"/>
        </h1>
        <p className='mb-5 z-30 text-sm text-slate-200 text-center'>My journey into web development began in first year of university, where I discovered a love for coding and problem-solving. This passion has driven me to continuously improve my skills and stay updated with the latest web development trends and technologies.
        With a degree in Computer Science and certifications in Full Stack Web Development and Merise and UML Project Management, my background combines technical proficiency with strategic thinking.</p>
      </motion.div>
      
      <motion.div 
        className='z-30 w-full flex flex-col items-center gap-14 lg:flex-row lg:justify-center'
        initial={{ y : 50, opacity: 0 }}
        whileInView={{ y : 10, opacity : 1}}
        transition={{duration : 0.4, delay : 0.6}}
        viewport={{once : true}} 
      >
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
      </motion.div>
      <AnimatedTooltip items={skillsIcons}/>
    </section>
  )
}

export default About