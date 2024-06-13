import React from 'react'
import { Form } from './ui/form'
import { Facebook, Github, Linkedin } from 'lucide-react'

type Props = {}

const Contact = (props: Props) => {
  return (
    <section className='flex items-center'>
      <div className='flex-1'>
        <div>
          <div>Email : yacinomar999@gamil.com</div>
          <div>phone : 0793292628</div>
        </div>
        <div className='flex'>
          <Linkedin/>
          <Github/>
          <Facebook/>
        </div>
      </div>
      <div className='flex-1'>
        <Form/>
      </div>
    </section>
  )
}

export default Contact