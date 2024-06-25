"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import useResponsive from "@/hooks/useResponsive";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const screenSize = useResponsive()
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  const screenSizeVariants : any = {
    xs: 60,
    sm: 50,
    md: 100,
    lg: 300,
    xl: 300
  };

  // console.log("test screen size again :", screenSize)
  if (screenSize !== "unknown") {
    return (
      <div 
        className="flex items-center justify-center gap-2 mt-20 flex-wrap"
      >
        {items.map((item, idx) => (
          <div
            className="z-30 relative group"
            key={item.name}
            onMouseEnter={() => setHoveredIndex(item.id)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence mode="popLayout">
              {hoveredIndex === item.id && (
                <motion.div
                  initial={{ 
                    opacity: 0, 
                    y: 20, 
                    scale: 0.6 
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 10,
                    },
                  }}
                  exit={{ opacity: 0, y: 20, scale: 0.6 }}
                  style={{
                    translateX: `!important ${translateX}`,
                    rotate: rotate,
                    whiteSpace: "nowrap",
                  }}
                  className="absolute -top-12 left-[50%] !-translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
                >
                  <div className="absolute inset-x-5 z-30 -bottom-px bg-gradient-to-r from-transparent via-[#00CC00] to-transparent h-px " />
                  <div className="font-bold text-white text-base">
                    {item.name}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
  
            <motion.div 
              initial={{
                opacity: 0, 
                x : screenSizeVariants[`${screenSize}`],
                scale: 0.6 
              }}
               whileInView={{
                opacity: 1, 
                x : 0,
                scale: 1 
              }}
              transition={{duration : 0.4, delay : 0.3  + (idx * 0.01)}}
              viewport={{once : true}} 
            >
              <Image
                onMouseMove={handleMouseMove}
                height={100}
                width={100} 
                src={item.image}
                alt={item.name}
                className="object-cover !m-0 !p-0 object-top rounded-full h-10 w-10 group-hover:scale-105 group-hover:z-30  relative transition duration-500 border-none"
              />
            </motion.div>
          </div>
        ))}
      </div>
    );
  }
  
  return null

};
