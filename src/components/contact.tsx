import React from 'react'
import { Form } from './ui/form'

type Props = {}

const Contact = (props: Props) => {
  return (
    <section className='flex'>
      <div className='flex-1'>
        <div>Email : yacinomar999@gamil.com</div>
        <div>phone : 0793292628</div>
      </div>
      <div className='flex-1'>
        <Form/>
      </div>
    </section>
  )
}

export default Contact