import { useGLTF } from '@react-three/drei'
import React from 'react'




const Computer = () => {

    const computer = useGLTF('./3D/desktop_pc/scene.gltf')

  return (
    <mesh
    >
        <primitive
            object={computer.scene}
            scale={1.1}
            // position={[1, -2, -1]} suits perspective camera
            position={[0, 0, 0]}
        />
    </mesh>
  )
}


export default Computer