import Link from "next/link";
import React, { useEffect } from 'react';
import {RiLinkedinBoxLine, RiInstagramLine, RiTwitterLine, RiDribbbleLine, RiFacebookLine, RiBehanceLine, RiPinterestLine, RiGithubLine } from 'react-icons/ri'


const Socials = () => {

  useEffect(() => {
    document.documentElement.lang = 'en';
    document.title = 'Social Comp';
    return () => {
      document.documentElement.removeAttribute('lang');
    };
  }, []);
  
  return (
    <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://github.com/Akshaykk12/'} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300 text-black">
      <RiGithubLine />
    </Link>
    <Link href={'https://www.linkedin.com/in/akshay-kudalkar/'} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300 text-black">
      <RiLinkedinBoxLine />
    </Link>
    <Link href={'https://twitter.com/Akshay12kk'} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300 text-black">
      <RiTwitterLine />
    </Link>
    <Link href={'https://www.behance.net/akshaykudalkar'} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300 text-black">
      <RiBehanceLine />
    </Link>
    <Link href={'https://dribbble.com/Akshaykk12'} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300 text-black">
      <RiDribbbleLine />
    </Link>
    <Link href={'https://www.instagram.com/akshaykk_12/'} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300 text-black">
      <RiInstagramLine />
    </Link>
    </div>
  );
};

export default Socials;
