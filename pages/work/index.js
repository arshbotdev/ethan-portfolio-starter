import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';


import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const Work = () => {
  return (
    <div className=' h-full bg-white/90 py-36 flex items-center relative'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          <div className=' text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2 variants={fadeIn('up', 0.3)} initial='hidden' animate='show' exit='hidden' className='h2 xl:mt-8 text-black'>
              My Projects <span className=' text-accent'>.</span>
            </motion.h2>
            <motion.p variants={fadeIn('down',0.3)} initial="hidden" animate="show" exit="hidden" className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:ml-16 text-black/90">
            Explore a curated selection of projects that <span className=' text-accent'>reflect my passion</span> for crafting engaging and functional solutions. Each project is a testament to my commitment to <span className=' text-accent'>excellence and innovation</span> in the digital space.
            </motion.p>
          </div>
          <motion.div variants={fadeIn('down', 0.6)} initial='hidden' animate='show' exit='hidden' className=' w-full xl:max-w-[65%]'>
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;