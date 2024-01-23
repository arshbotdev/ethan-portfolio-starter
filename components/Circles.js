import Image from "next/image";
import React, { useEffect } from 'react';

const Circles = () => {

  useEffect(() => {
    document.documentElement.lang = 'en';
    document.title = 'Circle Comp';
    return () => {
      document.documentElement.removeAttribute('lang');
    };
  }, []);
  
  return <div className=" w-[200px] xl:w-[300px] -right-16 -bottom-2 z-10
                          absolute  
                          mix-blend-color-dodge 
                          animate-pulse duration-75 ">
    <Image  src={'/circles.png'} 
            width={260} 
            height={200} 
            className="w-full h-full" 
            alt=''/>
  </div>;
};

export default Circles;

