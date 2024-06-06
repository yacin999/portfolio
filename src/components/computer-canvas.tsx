"use client"

import React , { Suspense , useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, Preload, OrbitControls } from "@react-three/drei" 

import CanvasLoader from "./canvas-loader"



type Props = {
    isMobile : boolean
}

const Computer = ({isMobile}: Props) => {
    const computer = useGLTF('./3D/desktop_pc/scene.gltf')
  return (
    <mesh>
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
            scale={isMobile ? 0.50 : 0.75}
            position={[1, -4.25, -0.8]}
            rotation={[-0.0, -0.3, -0.2]}
        />
    </mesh>
  )
}

const ComputerCanvas = ()=> {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(()=> {
        const mediaQuery = window.matchMedia("(max-width : 500px)")
        setIsMobile(mediaQuery.matches)

        const handleIsMobileMediaQuery = (event : any) => {
            setIsMobile(mediaQuery.matches)
        }

        mediaQuery.addEventListener("change", handleIsMobileMediaQuery)

        return () => {
            mediaQuery.removeEventListener("change", handleIsMobileMediaQuery)
        }
    })

    return (
        <Canvas
            frameloop='demand'
            shadows
            camera={{position : [20, 5, 7], fov : 30}}
            gl={{preserveDrawingBuffer : true}}
            className='w-full'
        >
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls 
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computer isMobile={isMobile}/>
            </Suspense>
            <Preload all/>
        </Canvas>
    )
}

export default ComputerCanvas