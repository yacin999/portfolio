// 'use client'

// import { forwardRef, Suspense, useImperativeHandle, useRef } from 'react'
// import { OrbitControls, PerspectiveCamera, View as ViewImpl } from '@react-three/drei'
// import { Three } from '@/helpers/components/Three'

// export const Common = () => (
//   <Suspense fallback={null}>
//     <hemisphereLight intensity={4} /> 
//     <pointLight intensity={1}/>
//     <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapsize={1024}
//     />
//   </Suspense>
// )

// const View = forwardRef(({ children, orbit, ...props }, ref) => {
//   const localRef = useRef(null)
//   useImperativeHandle(ref, () => localRef.current)

//   return (
//     <>
//       <div ref={localRef} {...props} />
//       <Three>
//         <ViewImpl track={localRef}>
//           {children}
//           {orbit && 
//           <OrbitControls 
//              enableZoom={false}
//              enablePan={false}
//              maxPolarAngle={Math.PI / 2}
//              minPolarAngle={Math.PI / 2}
//           />}
//         </ViewImpl>
//       </Three>
//     </>
//   )
// })
// View.displayName = 'View'

// export { View }




'use client'

import { forwardRef, Suspense, useImperativeHandle, useRef } from 'react'
import { OrbitControls, PerspectiveCamera, View as ViewImpl } from '@react-three/drei'
import { Three } from '@/helpers/components/Three'
import useLevaControls from '@/hooks/useLevaControls'

export const Common = () => {

  const { fov, cameraPositionX, cameraPositionY, cameraPositionZ } = useLevaControls();


  return ( 
      <Suspense fallback={null}>
        <ambientLight />
        <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
        <pointLight position={[-10, -10, -10]}  decay={0.2} />
        <PerspectiveCamera makeDefault fov={fov} position={[cameraPositionX, cameraPositionY, cameraPositionZ]} />
      </Suspense>
    )
}

const View = forwardRef(({ children, ...props }, ref) => {
  const localRef = useRef(null)
  useImperativeHandle(ref, () => localRef.current)

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef}>
          {children}
          <OrbitControls 
            makeDefault
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.4}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </ViewImpl>
      </Three>
    </>
  )
})
View.displayName = 'View'

export { View }

