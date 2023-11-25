import Image from "next/image";
import React, { useEffect } from 'react';

const TopLeftImg = () => {

  useEffect(() => {
    document.documentElement.lang = 'en';
    document.title = 'Top Left Image Comp';
    return () => {
      document.documentElement.removeAttribute('lang');
    };
  }, []);
  
  return (
    <div className="absolute 
                    top-0 left-0 z-10 w-[200px] xl:w-[400px]
                    mix-blend-color-dodge  opacity-50">
      <Image
        src='/top-left-img.png'
        alt=""
        width={400}
        height={400}
      />
    </div>
  );
};

export default TopLeftImg;
