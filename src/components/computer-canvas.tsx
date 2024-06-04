"use client"

import React , { Suspense , useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Preload } from "@react-three/drei"
import CanvasLoader from "./canvas-loader"


type Props = {}

const Computer = (props: Props) => {
    const computer = useGLTF('./3D/desktop_pc/scene.gltf')
  return (
    <mesh>
        <hemisphereLight intensity={0.15} groundColor={"black"}/>
        <pointLight intensity={1}/>
        <primitive
            object={computer.scene}
        />
    </mesh>
  )
}

const ComputerCanvas = ()=> {
    return (
        <Canvas
            frameloop='demand'
            shadows
            camera={{position : [20, 3, 5], fov : 25}}
            gl={{preserveDrawingBuffer : true}}
        >
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls 
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computer/>
            </Suspense>
            <Preload all/>
        </Canvas>
    )
}

export default ComputerCanvas