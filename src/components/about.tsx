import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <section className='flex flex-col items-center mt-10 p-20 relative w-full bg-hero bg-[#191A19]'>

          <div className="absolute z-10 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
          </div>

          <div className='absolute z-20 bottom-0 left-0 right-0 top-0 w-full h-full bg-gradient-to-b from-background via-transparent to-background'></div>

          <h1 className='relative z-30 text-4xl mb-5 py-2 dark:text-slate-200'>
          About me
          <span className="absolute inset-x-0 w-[80%] mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#00CC00] to-transparent  h-[2px]"/>
          </h1>
          <p className='mb-5 z-30'>a dedicated Web Developer with a great experience in building dynamic and responsive websites and applications. I specialize in front-end development, with expertise in HTML, CSS, JavaScript, and React, and have a solid understanding of back-end technologies like Node.js and Django Framework.</p>
{/*             
            <p className='mb-5'>With a degree in Computer Science and certifications in Full Stack Web Development and Merise and UML Project Management, my background combines technical proficiency with strategic thinking.</p>

            <p>My journey into web development began in first year of university, where I discovered a love for coding and problem-solving. This passion has driven me to continuously improve my skills and stay updated with the latest web development trends and technologies. When I'm not coding, you can find me exploring the latest tech blogs, or other fields.</p> */}
          <div className='w-full flex items-center gap-14 justify-center'>
            <div className='p-10 z-30 backdrop-blur-lg border-2 border-border rounded-lg dark:text-slate-300 max-w-md'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, voluptatibus nobis debitis aspernatur obcaecati quos libero natus aperiam? Blanditiis soluta harum officiis, ducimus cupiditate debitis magni? Quam corrupti exercitationem amet!
            </div>
            <div className='p-10 z-30 backdrop-blur-lg border-2 border-border rounded-lg dark:text-slate-300 max-w-md'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, voluptatibus nobis debitis aspernatur obcaecati quos libero natus aperiam? Blanditiis soluta harum officiis, ducimus cupiditate debitis magni? Quam corrupti exercitationem amet!
            </div>
          </div>

        {/* <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
          </div>
        </div> */}

    </section>
  )
}

export default About