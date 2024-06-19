import React from 'react'
import { useProgress, Html } from '@react-three/drei'


const CanvasLoader = () => {
  const { progress } = useProgress()
  return (
    <Html>
      <span className='canvas-loader'></span>
      <p className='text-sm text-[#F1F1F1] font-extrabold'>{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default CanvasLoader