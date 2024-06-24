import { useState, useEffect } from 'react';

const useResponsive = () => {
  const [screenSize, setScreenSize] = useState('unknown');



  useEffect(() => {

    const updateScreenSize = () => {
      

      if (window.matchMedia('(max-width: 600px)').matches) {
        console.log("first condiction")
        setScreenSize("xs")
      }else if (window.matchMedia('(min-width: 600px) and (max-width: 960px)').matches) {
        console.log("second condiction")
        setScreenSize("sm")
      }else if (window.matchMedia('(min-width: 960px) and (max-width: 1280px)').matches) {
        console.log("third condiction")
        setScreenSize("md")
      }else if (window.matchMedia('(min-width: 1280px) and (max-width: 1920px)').matches) {
        console.log("fourth condiction")
        setScreenSize("lg")
      }else if (window.matchMedia('(min-width: 1920px)').matches) {
        console.log("fifth condiction")
        setScreenSize("xl")
      } else {
        console.log("no media query matches !!!")
        setScreenSize("unknown")
      }
    };

    updateScreenSize(); // Initial check
    window.addEventListener('resize',updateScreenSize);

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return screenSize;
};

export default useResponsive;
