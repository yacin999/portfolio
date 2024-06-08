"use client"

import React , { Suspense , useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, Preload, OrbitControls } from "@react-three/drei" 

import CanvasLoader from "./canvas-loader"
import { computerCanvasPositions } from '@/constants'




const Computer = ({screenSize}: {
    screenSize : string
}) => {
    const computer = useGLTF('./3D/desktop_pc/scene.gltf')
    console.log("test screen size :", screenSize)
    console.log("test computerCanvasPositions[screenSize].scale :", computerCanvasPositions[screenSize])
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
            scale={computerCanvasPositions[screenSize]?.scale}
            position={[1, -2.25, -1.5]}
            rotation={[-0.0, -0.3, -0.2]}
        />
    </mesh>
  )
}




const ComputerCanvas = ()=> {
    const [screenSize, setScreenSize] = useState<string>("")


    useEffect(()=> {
        const mediaScreenSizes : {[key : string] : MediaQueryList } = {
            "mobile" : window.matchMedia("(max-width : 500px)"), 
            "sm" : window.matchMedia("(min-width : 640px) and (max-width : 768px)"),  
            "md" : window.matchMedia("(min-width : 768px) and (max-width : 1024px"),  
            "lg" : window.matchMedia("(min-width : 1024px) and (max-width : 1280px)"),  
            "xl" : window.matchMedia("(min-width : 1280px) and (max-width : 1536px)"),  
            "2xl" : window.matchMedia("(min-width : 1536px)"),  
        }

        function handleIsMobileMediaQuery  ( size : string, mediaQuery : MediaQueryList) {
                if ( mediaQuery.matches) {
                    setScreenSize(size)
                }
        }


        // set screenSize state when the component mounts
        Object.entries(mediaScreenSizes).forEach(([size, mediaQuery]) => {
            handleIsMobileMediaQuery(size, mediaQuery)
        })


        // set screenSize state when the media query changes 
        Object.entries(mediaScreenSizes).forEach(([size, mediaQuery]) => {
            mediaQuery.addEventListener("change", (event) => handleIsMobileMediaQuery(size, mediaQuery))
        })

        // remove the event listener from media query when the component unmount
        return () => {
            Object.entries(mediaScreenSizes).forEach(([size, mediaQuery]) => {
                mediaQuery.removeEventListener("change",(event) => handleIsMobileMediaQuery(size, mediaQuery))
            })
        }
    }, [screenSize])

    return (
        <Canvas
            frameloop='demand'
            shadows
            camera={{position : [20, 5, 7], fov : 30}}
            gl={{preserveDrawingBuffer : true}}
            // className='w-full'
        >
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls 
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computer screenSize={screenSize}/>
            </Suspense>
            <Preload all/>
        </Canvas>
    )
}

export default ComputerCanvas