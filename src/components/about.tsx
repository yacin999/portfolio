import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <section className='flex flex-col items-center mt-10'>
        <h1 className='text-4xl mb-5 border-b-2 border-[#00CC00] py-2'>About me</h1>
        <div className='mx-10 p-10 bg-white/10 backdrop-blur-lg border-2 border-border rounded-lg'>
          <p>I'm Kelalech Omar, a dedicated Web Developer with a great experience in building dynamic and responsive websites and applications. I specialize in front-end development, with expertise in HTML, CSS, JavaScript, and React, and have a solid understanding of back-end technologies like Node.js and Django Framework.</p>
          
          <p>With a degree in Computer Science and certifications in Full Stack Web Development and Merise and UML Project Management, my background combines technical proficiency with strategic thinking.</p>

          <p>My journey into web development began in first year of university, where I discovered a love for coding and problem-solving. This passion has driven me to continuously improve my skills and stay updated with the latest web development trends and technologies. When I'm not coding, you can find me exploring the latest tech blogs, or other fields.</p>
        </div>

    </section>
  )
}

export default About