import React, { useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from 'react-icons/hi2'

const ProjectsBtn = () => {

  useEffect(() => {
    document.documentElement.lang = 'en';
    document.title = 'Project Button Comp';
    return () => {
      document.documentElement.removeAttribute('lang');
    };
  }, []);
  
  return <div className="mx-auto xl:mx-0">
    <Link href='/work' passHref>
      <div className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group ">
      <Image src={'/myproj.svg'} width={148} height={131} alt='' className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px] " />
      <HiArrowRight className="absolute text-4xl text-[#393939] group-hover:translate-x-2 transaction-all duration-300"/>
        
      </div>
    </Link>
  </div>;
};

export default ProjectsBtn;
