import React from 'react'
import { Form } from './ui/form'

type Props = {}

const Contact = (props: Props) => {
  return (
    <section className='flex'>
      <div>
        Email : yacinomar999@gamil.com
        phone : 0793292628
      </div>
      <div>
        <Form/>
      </div>
    </section>
  )
}

export default Contact