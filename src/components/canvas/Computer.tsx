import { useGLTF } from '@react-three/drei'
import React from 'react'


const Computer = ({screenSize, locale}: {
    screenSize : string,
    locale : string | string[]
}) => {

    const computer = useGLTF('./3D/desktop_pc/scene.gltf')
    


  return (
    <mesh
    >
        <hemisphereLight intensity={4} /> 
        <pointLight intensity={1}/>
        <spotLight
            position={[-20, 50, 10]}
            angle={0.12}
            penumbra={1}
            intensity={1}
            castShadow
            shadow-mapsize={1024}
        />
        <primitive
            object={computer.scene}
            scale={1}
            position={[1, -2.25, -1.5]}
            rotation={[-0.0, -0.3, -0.2]}
        />
    </mesh>
  )
}


export default Computer