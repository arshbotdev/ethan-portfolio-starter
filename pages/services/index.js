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
    <div className=' h-full bg-white/90 py-36 flex items-center px-[120px]'>
      <Head>
        <meta name="description" content="Here I present differnet types of services." />
      </Head>
      
      <div>
        <Circles />
        <div className='container mx-auto relative'>
          <div className='flex flex-col xl:flex-row gap-x-8'>
            <div className=' text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
              <motion.h2 variants={fadeIn('up', 0.3)} initial='hidden' animate='show' exit='hidden' className='h2 xl:mt-8 text-black'>
                My Services <span className=' text-accent'>.</span>
              </motion.h2>
              <motion.p variants={fadeIn('down',0.3)} initial="hidden" animate="show" exit="hidden" className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:ml-16 text-black/90">
                Curious about how I can <span className=' text-accent'>assist your business?</span> Here are a few areas where I <span className=' text-accent'>excel</span>, ensuring you receive the best possible outcomes.
              </motion.p>
            </div>
            <motion.div variants={fadeIn('down', 0.6)} initial='hidden' animate='show' exit='hidden' className=' w-full xl:max-w-[65%] py-10 '>
              <ServiceSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
    </div>
  );
};

export default Services;
