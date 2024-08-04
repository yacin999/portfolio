import { useGLTF } from '@react-three/drei'
import React from 'react'


type Props = {
  scale : number,
  position : [number, number, number]
}

const Computer = ({scale, position} : Props) => {

    const computer = useGLTF('./3D/desktop_pc/scene.gltf')

  return (
    <mesh
    >
        <primitive
            object={computer.scene}
            scale={scale}
            position={position}
            rotation={[-0.0, -0.3, -0.2]}
        />
    </mesh>
  )
}


export default Computer