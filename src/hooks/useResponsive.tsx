import { useState, useEffect } from 'react';

const useResponsive = () => {
  const [screenSize, setScreenSize] = useState('unknown');

  useEffect(() => {
    const updateScreenSize = () => {
      if (window.matchMedia('(max-width: 600px)').matches) setScreenSize('xs');
      else if (window.matchMedia('(min-width: 600px) and (max-width: 960px)').matches) setScreenSize('sm');
      else if (window.matchMedia('(min-width: 960px) and (max-width: 1280px)').matches) setScreenSize('md');
      else if (window.matchMedia('(min-width: 1280px) and (max-width: 1920px)').matches) setScreenSize('lg');
      else if (window.matchMedia('(min-width: 1920px)').matches) setScreenSize('xl');
      else setScreenSize('unknown');
    };

    window.addEventListener('resize', updateScreenSize);
    updateScreenSize(); // Initial check

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return screenSize;
};

export default useResponsive;
