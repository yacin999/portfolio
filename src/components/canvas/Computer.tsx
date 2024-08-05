import { useGLTF } from '@react-three/drei'
import React from 'react'
import { useControls } from 'leva'




const Computer = () => {

    const computer = useGLTF('./3D/desktop_pc/scene.gltf')

    const {modelPositionX, modelPositionY, modelPositionZ, rotationX, rotationY, rotationZ} = useControls({
      modelPositionX : {value : 0, min : -10, max : 10},
      modelPositionY : {value : 0, min : -10, max : 10},
      modelPositionZ : {value : 0, min : -10, max : 10},
      // rotationX : {value : 0, min : -20, max : 20},
      // rotationY : {value : 0, min : -20, max : 20},
      // rotationZ : {value : 0, min : -20, max : 20}
    })

  return (
    <mesh
    >
        <primitive
            object={computer.scene}
            scale={1.1}
            position={[modelPositionX, modelPositionY, modelPositionZ]} 
            rotation={[rotationX, rotationY, rotationZ]}
        />
    </mesh>
  )
}


export default Computer