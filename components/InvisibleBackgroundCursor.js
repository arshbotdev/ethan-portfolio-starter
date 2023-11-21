import React, { useEffect } from 'react';
import gsap from 'gsap';

const DynamicCursor = () => {
  useEffect(() => {
    document.documentElement.lang = 'en';
    const handleMouseMove = (evt) => {
      const mouseX = evt.clientX;
      const mouseY = evt.clientY;

      gsap.set('.cursor', {
        x: mouseX-765,
        y: mouseY-380,
      });

      gsap.to('.shape', {
        x: mouseX-690,
        y: mouseY-315,
        stagger: -0.1,
      });
      return () => {
        document.documentElement.removeAttribute('lang');
      };
    };

    document.body.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="cursor  w-20 h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
      {/* <div className="shapes h-screen w-screen bg-white overflow-hidden "> */}
        <div className="shape shape-1 bg-gray-700 w-150 h-150 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
      {/* </div> */}
      <div className="content absolute top-0 left-0 flex justify-center items-center h-screen w-screen bg-white/10 mix-blend-screen">
        
          {/* SVG content goes here */}
          <svg
        class="desktop-1"
        // width="1500"
        height="1200"
        viewBox="0 0 1440 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1_2)">
          <line x1="720.5" x2="720.5" y2="1024" stroke="black" />
          <line x1="540.5" y1="3" x2="540.5" y2="1027" stroke="black" />
          <line x1="180.5" y1="-3" x2="180.5" y2="1021" stroke="black" />
          <line x1="899.5" y1="-3" x2="899.5" y2="1021" stroke="black" />
          <path d="M1078.5 -6V1023" stroke="black" />
          <path d="M1257.5 -9V1022" stroke="black" />
          <path d="M0.709412 1022.59L1439.5 1.10014e-05" stroke="black" />
          <path d="M0.945923 -0.332642L1439.26 1022.93" stroke="black" />
          <line x1="-8" y1="511.5" x2="1449" y2="511.5" stroke="black" />
          <line x1="-8" y1="639.5" x2="1449" y2="639.5" stroke="black" />
          <path d="M720.5 1023.5L1438.5 512.387" stroke="black" />
          <path d="M-0.0540771 512.054L720.5 1023.5" stroke="black" />
          <path d="M-0.290588 510.98L720.5 1.07752e-05" stroke="black" />
          <path d="M720.5 0L1438.26 511.312" stroke="black" />
          <line x1="-9" y1="-0.113403" x2="1448" y2="-0.113403" stroke="black" />
          <path d="M0.709412 768.593L1079.5 8.34991e-06" stroke="black" />
          <path d="M359.5 0L1439.26 768.926" stroke="black" />
          <line x1="-8" y1="257.5" x2="1449" y2="257.5" stroke="black" />
          <line x1="-15" y1="127.5" x2="1442" y2="127.5" stroke="black" />
          <line x1="-17" y1="383.5" x2="1440" y2="383.5" stroke="black" />
          <path d="M359.5 1023.5L1439.5 257" stroke="black" />
          <path d="M0.576599 258L1079.13 1024.83" stroke="black" />
          <line x1="-8" y1="768.5" x2="1449" y2="768.5" stroke="black" />
          <line x1="-90" y1="896.5" x2="1448" y2="896.5" stroke="black" />
          <line x1="-17" y1="1022.5" x2="1440" y2="1022.5" stroke="black" />
          <path d="M0.709412 255.98L359.5 -3.70824e-06" stroke="black" />
          <path d="M1079.5 0L1439.26 256.312" stroke="black" />
          <path d="M-0.0540999 770.054L359.5 1023.5" stroke="black" />
          <path d="M359.5 0.19809L359.5 1025.39" stroke="black" />
          <line x1="1.5" y1="0.386597" x2="1.5" y2="1024.39" stroke="black" />
          <path d="M0 0L0 1024.89" stroke="black" />
          <line x1="1439.5" y1="0.386597" x2="1439.5" y2="1024.39" stroke="black" />
        </g>
        <defs>
          <clipPath id="clip0_1_2">
            <rect width="1440" height="1024" fill="white" />
          </clipPath>
        </defs>
      </svg>
      </div>
    </>
  );
};

export default DynamicCursor;