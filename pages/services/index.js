import Head from 'next/head';
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

import React, { useEffect } from 'react';


import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const Services = () => {

  useEffect(() => {
    document.documentElement.lang = 'en';
    document.title = 'Servies';
    return () => {
      document.documentElement.removeAttribute('lang');
    };
  }, []);
  
  return (
    <div className=' h-full bg-[#d5d7d9]  flex  items-center sm:px-0 justify-center py-24 my-10 xl:py-10 xl:my-0'>
      <Head>
        <meta name="description" content="Here I present differnet types of services." />
      </Head>
      
      <div>
        <Circles />
        <div className='container mx-auto mt-[240px] overflow-auto h-screen pb-24'>
          <div className='flex flex-col xl:flex-row gap-x-8'>
            <div className=' text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0  z-40'>
              <motion.h2 variants={fadeIn('up', 0.3)} initial='hidden' animate='show' exit='hidden' className='h2 xl:mt-8 text-black relative '>
                My Services <span className=' text-accent'>.</span>
              </motion.h2>
              <motion.p variants={fadeIn('down',0.3)} initial="hidden" animate="show" exit="hidden" className=" mb-4 max-w-[400px] mx-auto lg:mx-0 text-black/90 relative">
                Curious about how I can <span className=' text-accent'>assist your business?</span> Here are a few areas where I <span className=' text-accent'>excel</span>, ensuring you receive the best possible outcomes.
              </motion.p>
            </div>
            <div variants={fadeIn('down', 0.6)} initial='hidden' animate='show' exit='hidden' className=' w-full xl:max-w-[65%] py-10 xs:w-[200px] z-40'>
              <ServiceSlider />
            </div>
          </div>
        </div>
        <Bulb />
      </div>
    </div>
  );
};

export default Services;
