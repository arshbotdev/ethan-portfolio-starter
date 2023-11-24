import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect } from 'react';

import{
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
}from 'react-icons/rx'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper';

// data
const ServiceCard = ({ icon, title, description }) => (
  <div className='mb-8 bg-[rgba(65,47,123,0.15)] rounded-lg px-4 py-6 cursor-pointer hover:bg-[rgba(89,65,169,0.15)]'>
    <div className='text-3xl text-accent mb-2'>{icon}</div>
    <div className='mb-4'>
      <div className='mb-1 text-base font-semibold text-black'>{title}</div>
      <p className='max-w-[300px] text-sm leading-normal text-black'>{description}</p>
    </div>
    <div className='text-2xl text-black'>
      <RxArrowTopRight className='transition-all duration-300' />
    </div>
  </div>
);

export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Machine Learning Model Development',
    description: 'I design and implement custom machine learning models.',
  },
  {
    icon: <RxReader />,
    title: 'Predictive Analytics Solutions',
    description: 'Leverage the power of data to make informed decisions.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Data Visualization ',
    description: 'I help you communicate your data-driven insights effectively.',
  },
  {
    icon: <RxDesktop />,
    title: 'Web Development',
    description: 'I specialize in developing custom websites.',
  },
  {
    icon: <RxRocket />,
    title: 'UI/UX Design',
    description: 'Elevate your digital presence with user-centric design.',
  },
];

const ServiceSlider = () => {

  const isDesktop = useMediaQuery({ minWidth: 640 });

  useEffect(() => {
    document.documentElement.lang = 'en';
    document.title = 'Service Slider Comp';
    return () => {
      document.documentElement.removeAttribute('lang');
    };
  }, []);

  if (isDesktop) {
    return (
      <Swiper 
        breakpoints={{
          320: {
            slidesPerView:1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView:3,
            spaceBetween: 15,
          },
        }}
        freeMode= {true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className=' h-[240px] sm:h-[340px]'
      >
      {serviceData.map((item, index) =>{
        return (
          <SwiperSlide key={index}>
            <div className=' bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] justify-start'>
              <div className=' text-4xl text-accent mb-4'>{item.icon}</div>
              <div className=' mb-8'>
                <div className=' mb-2 text-lg font-semibold text-black '>{item.title}</div>
                <p className=' max-w-[350px] leading-normal text-black'>{item.description}</p>
              </div>
              <div className=' text-3xl text-black'>
                <RxArrowTopRight className=' group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
              </div>
            </div>
          </SwiperSlide>
        );
        })
      }
    </Swiper>
    );
  }
  return (
    <div className=''>
      {serviceData.map((item, index) => (
        <ServiceCard key={index} {...item} />
      ))}
    </div>
  );
};

export default ServiceSlider;
