import React from 'react'
import { useProgress, Html } from '@react-three/drei'


const CanvasLoader = () => {
  // const { progress } = useProgress()
  return (
    <Html>
      {/* <span className='canvas-loader'></span>
      <p className='text-sm text-[#F1F1F1] font-extrabold'>{progress.toFixed(2)}%</p> */}
      <svg 
        className="h-[37px] w-[37px] overflow-visible origin-center"
        x="0px" 
        y="0px" 
        viewBox="0 0 37 37" 
        height="37" 
        width="37" 
        preserveAspectRatio="xMidYMid meet"
      >
        <path 
          className=" stroke-white opacity-10 transition-[stroke_0.5s_ease]" 
          fill="none" 
          stroke-width="5" 
          pathLength="100" 
          d="M36.63 31.746 c0 -13.394 -7.3260000000000005 -25.16 -18.13 -31.375999999999998 C7.696 6.66 0.37 18.352 0.37 31.746 c5.328 3.108 11.544 4.8839999999999995 18.13 4.8839999999999995 S31.301999999999996 34.854 36.63 31.746z"></path>
          <path 
            className=" fill-none stroke-white animate-[travel_0.9s_linear_infinite] will-change-[stroke-dasharray,stroke-dashoffset] transition-[stroke_0.5s_ease]" 
            fill="none" 
            stroke-width="5" 
            pathLength="100" 
            stroke-dasharray="15 85"
            stroke-dashoffset="0"
            stroke-linecap="round"
            d="M36.63 31.746 c0 -13.394 -7.3260000000000005 -25.16 -18.13 -31.375999999999998 C7.696 6.66 0.37 18.352 0.37 31.746 c5.328 3.108 11.544 4.8839999999999995 18.13 4.8839999999999995 S31.301999999999996 34.854 36.63 31.746z"></path>
        </svg>
    </Html>
  )
}

export default CanvasLoader

{/* <style>
  .container {
    --uib-size: 37px;
    --uib-color: black;
    --uib-speed: .9s;
    --uib-bg-opacity: .1;
    height: var(--uib-size);
    width: var(--uib-size);
    transform-origin: center;
    overflow: visible;
  }

  .car {
    fill: none;
    stroke: var(--uib-color);
    stroke-dasharray: 15, 85;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: travel var(--uib-speed) linear infinite;
    will-change: stroke-dasharray, stroke-dashoffset;
    transition: stroke 0.5s ease;
  }

  .track {
    stroke: var(--uib-color);
    opacity: var(--uib-bg-opacity);
    transition: stroke 0.5s ease;
  }

  @keyframes travel {
    0% {
      stroke-dashoffset: 0;
    }

    100% {
      stroke-dashoffset: 100;
    }
  }
</style> */}
