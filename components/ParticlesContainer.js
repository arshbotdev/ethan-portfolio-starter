import {Particles} from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import react, {useCallback} from 'react';
import React, { useEffect } from 'react';

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  useEffect(() => {
    document.documentElement.lang = 'en';
    document.title = 'Particles Comp';
    return () => {
      document.documentElement.removeAttribute('lang');
    };
  }, []);

  return(
  
    <Particles 
      className='w-full h-full absolute translate-z-0'
      id='tsparticles' init={particlesInit} loaded={particlesLoaded}
      options={{
        fullScreen: {enable: false},
        background: {
          color: {
            value: ''
          },
        },
        fpsLimit:120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 90
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#ff4326'
          },
          links: {
            color: '#ff0b08',
            distance: 150,
            enable: true,
            opacity: 1,
            width: 1
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 1,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 80
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: {min: 1, max: 5},
          },
        },
        detectRetina: true,
      }}
    />
  );
  
};

export default ParticlesContainer;
