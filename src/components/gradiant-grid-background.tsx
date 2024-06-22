import React from 'react'

type Props = {
  addGrid? : boolean
}

const GradiantGridBackground = ({addGrid = true}: Props) => {
  return (
    <>
       {addGrid && (
         <div className="absolute z-10 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:20px_20px]">
        </div>
       )}
        <div className='absolute z-20 bottom-0 left-0 right-0 top-0 w-full h-full bg-gradient-to-b from-background via-transparent to-background'></div>
    </>
  )
}

export default GradiantGridBackground