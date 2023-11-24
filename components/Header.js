import React, { useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials"

const Header = () => {

  useEffect(() => {
    document.documentElement.lang = 'en';
    document.title = 'Header Comp';
    return () => {
      document.documentElement.removeAttribute('lang');
    };
  }, []);
  
  return (
    <header className="absolute z-0 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-0 pt-0">
          <Link href={'/'}>
            <Image src={'/aklogo.svg'} width={100} height={48} alt="" priority= {true}  />
          </Link>
        <Socials/>
        </div>
      </div>
    </header>
  );
};

export default Header;
