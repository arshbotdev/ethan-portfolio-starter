import {motion} from 'framer-motion';
import React, { useEffect } from 'react';

const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%'
  },
  animate: {
    x: '0%',
    width: '0%'
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  }
}

const Transition = () => {

  useEffect(() => {
    document.documentElement.lang = 'en';
    document.title = 'Transiition Comp';
    return () => {
      document.documentElement.removeAttribute('lang');
    };
  }, []);
  
  return (
    <>
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-[#000000]' variants={transitionVariants} initial='initial' animate= 'animate' exit='exit' transition={{delay: 0.2, duration: 0.6, ease: 'easeInOut'}}></motion.div>
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-[#121212]' variants={transitionVariants} initial='initial' animate= 'animate' exit='exit' transition={{delay: 0.4, duration: 0.6, ease: 'easeInOut'}}></motion.div>
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#232323]' variants={transitionVariants} initial='initial' animate= 'animate' exit='exit' transition={{delay: 0.6, duration: 0.6, ease: 'easeInOut'}}></motion.div>
      
    </>
  );
};

export default Transition;
