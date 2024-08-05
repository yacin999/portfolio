import { useGLTF } from '@react-three/drei'
import React from 'react'
import { useControls } from 'leva'
import useLevaControls from '@/hooks/useLevaControls'




const Computer = () => {

    const computer = useGLTF('./3D/desktop_pc/scene.gltf')

    const {scale, modelPositionX, modelPositionY, modelPositionZ, rotationX, rotationY, rotationZ} = useLevaControls()

  return (
    <mesh
    >
        <primitive
            object={computer.scene}
            scale={scale}
            position={[modelPositionX, modelPositionY, modelPositionZ]} 
            rotation={[rotationX, rotationY, rotationZ]}
        />
    </mesh>
  )
}


export default Computer