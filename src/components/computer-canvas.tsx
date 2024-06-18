"use client"

import React , { Suspense , useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, Preload, OrbitControls } from "@react-three/drei" 
import { motion } from "framer-motion-3d"

import CanvasLoader from "./canvas-loader"
import { computerCanvasPositions } from '@/constants'



const Computer = ({screenSize, locale, isHovered}: {
    screenSize : string,
    locale : string | string[]
    isHovered    : boolean
}) => {

    const computer = useGLTF('./3D/desktop_pc/scene.gltf')

  return (
    <motion.group 
        whileHover={{ scale: 1.2 }}
        // onHoverStart={() => setIsHovered(true)}
        // onHoverEnd={() => setIsHovered(true)}
        animate={isHovered ? "hover" : "rest"}
    >
        <motion.mesh
            variants={{ hover: { z: 1 } }}
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
                scale={computerCanvasPositions[screenSize].scale}
                position={
                    locale === "ar" ? computerCanvasPositions[screenSize].position.rtl : computerCanvasPositions[screenSize].position.ltr
                }
                rotation={[-0.0, -0.3, -0.2]}
            />
        </motion.mesh>
    </motion.group>
  )
}




const ComputerCanvas = ({locale} : {locale : string | string[]})=> {
    const [screenSize, setScreenSize] = useState<string>("")
    const [isHovered, setIsHovered] = useState(false)

    useEffect(()=> {
        const mediaScreenSizes : {[key : string] : MediaQueryList } = {
            "mobile" : window.matchMedia("(max-width : 450px)"), 
            "xs" : window.matchMedia("(min-width : 450px) and (max-width : 640px)"),
            "sm" : window.matchMedia("(min-width : 640px) and (max-width : 768px)"),  
            "md" : window.matchMedia("(min-width : 768px) and (max-width : 1024px"),  
            "lg" : window.matchMedia("(min-width : 1024px) and (max-width : 1280px)"),  
            "xl" : window.matchMedia("(min-width : 1280px)"),  
        }

        function handleIsMobileMediaQuery  (size : string, mediaQuery : MediaQueryList) {
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
            className='max-w-full max-h-full'
        >
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls 
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computer 
                    screenSize={screenSize} 
                    locale={locale} 
                    isHovered={isHovered}
                />
            </Suspense>
            <Preload all/>
        </Canvas>
    )
}

export default ComputerCanvas