import Image from "next/image";
import React, { useEffect } from 'react';

const Avatar = () => {
  useEffect(() => {
    document.documentElement.lang = 'en';
    document.title = 'Avatar';
    return () => {
      document.documentElement.removeAttribute('lang');
    };
  }, []);
  return <div className="hidden xl:flex xl:max-w-none">
    <Image src={'/akava.png'} width={500} height={300} alt="" className=" translate-x-0 "/>
  </div>;
};

export default Avatar;
