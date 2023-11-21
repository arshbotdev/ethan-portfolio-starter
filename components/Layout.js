import {Sora} from '@next/font/google'
import React, { useEffect } from 'react';

const sora= Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100','200','300','400','500','600','700','800']
})

import Nav from '../components/Nav'
import Header from '../components/Header'
import InvisibleBackgroundCursor from '../components/InvisibleBackgroundCursor'

const Layout = ({children}) => {

  useEffect(() => {
    document.documentElement.lang = 'en';
    document.title = 'Layout Comp';
    return () => {
      document.documentElement.removeAttribute('lang');
    };
  }, []);
  return <div className={'page bg-site text-black bg-cover bg-no-repeat ${sora:variable} font-poppins relative'}>
    
    <InvisibleBackgroundCursor />
    <Nav/>
    <Header/>
    {children}
  </div>;
};

export default Layout;
