import { useState, useEffect } from 'react';

const useResponsive = () => {
  const [screenSize, setScreenSize] = useState('unknown');



  useEffect(() => {

    const updateScreenSize = (e : any, loadStatus : string) => {
      console.log(loadStatus)
      
      if (window.matchMedia('(max-width: 600px)').matches) {
        setScreenSize("xs")
      }else if (window.matchMedia('(min-width: 600px) and (max-width: 960px)').matches) {
        setScreenSize("sm")
      }else if (window.matchMedia('(min-width: 960px) and (max-width: 1280px)').matches) {
        setScreenSize("md")
      }else if (window.matchMedia('(min-width: 1280px) and (max-width: 1920px)').matches) {
        setScreenSize("lg")
      }else if (window.matchMedia('(min-width: 1920px)').matches) {
        setScreenSize("xl")
      } else {
        console.log("no media query matches !!!")
        setScreenSize("unknown")
      }

      console.log("BOTTOM !!")
    };

    updateScreenSize("", "FIRST time"); // Initial check
    window.addEventListener('resize',e=> updateScreenSize(e, "SECOND Time"));

    return () => window.removeEventListener('resize', e => updateScreenSize);
  }, []);

  return screenSize;
};

export default useResponsive;
