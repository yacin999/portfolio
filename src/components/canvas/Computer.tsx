import { useGLTF } from '@react-three/drei'
import React, { useEffect, useState } from 'react'
import useLevaControls from '@/hooks/useLevaControls'




const Computer = () => {
    const [size, setSize] = useState(window.innerWidth < 1100 ? "small" : "large")
    const computer = useGLTF('./3D/desktop_pc/scene.gltf')

    const {scale, modelPositionX, modelPositionY, modelPositionZ, rotationX, rotationY, rotationZ} = useLevaControls()

    
    const handleModelResize = () => {
      if (window.innerWidth < 1100 ) {
        setSize("small")
      }else {
        setSize("large")
      }
  }

  useEffect(()=> {
      window.addEventListener("resize", handleModelResize)

      return () => {
          window.removeEventListener("resize", handleModelResize)
      }
  }, [])
  
    

  return (
    <mesh
    >
        <primitive
            object={computer.scene}
            scale={size === "small" ? 0.7 : scale}
            position={[modelPositionX, modelPositionY, modelPositionZ]} 
            rotation={[rotationX, rotationY, rotationZ]}
        />
    </mesh>
  )
}


export default Computer