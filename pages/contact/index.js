import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useEffect } from 'react';
import Head from 'next/head';

const YOUR_PUBLIC_KEY = process.env.YOUR_PUBLIC_KEY;
const YOUR_SERVICE_ID = process.env.YOUR_SERVICE_ID;
const YOUR_TEMPLATE_ID = process.env.YOUR_TEMPLATE_ID;

import Circles from '/components/Circles';

import { BsArrowRight } from 'react-icons/bs';

import { motion } from 'framer-motion';

import { fadeIn } from '../../variants';

const Contact = () => {
  useEffect(() => {
    document.documentElement.lang = 'en';
    document.title = 'Contact';
    return () => {
      document.documentElement.removeAttribute('lang');
    };
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          console.log('message sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <Head>
        <meta name="description" content="This page is for users to contact me." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className="h-full bg-white/90 relative">
        <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
          <div className="flex flex-col w-full max-w-[700px] ">
            <motion.h2
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-center text-black mb-2"
            >
              {"Let's "}<span className="text-accent">{"Connect."}</span>
            </motion.h2>
            <motion.div
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-center text-black mb-2"
            >
              {"Email: "}<span className="text-accent">{"akshaykudalkar.12@gmail.com"}</span>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-center text-black mb-10"
            >
              {"....or use the following form"}
            </motion.div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex-1 flex flex-col gap-6 w-full mx-auto text-black"
            >
              <div className="flex gap-x-6 w-full">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  className="input text-black border-[#707070] placeholder-[#707070] bg-white"
                />
                <input
                  type="email" // Change the type to email
                  name="user_email"
                  placeholder="Email"
                  className="input border-[#707070] placeholder-[#707070] bg-white"
                  autoCapitalize="none"
                  style={{ textTransform: 'none' }}
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="input border-[#707070] placeholder-[#707070] bg-white"
              />
              <textarea
                name="message"
                placeholder="Message"
                className="textarea border-[#707070] placeholder-[#707070] bg-white"
              ></textarea>
              <button
                type="submit"
                value="Send"
                className="btn rounded-full border border-black/50 max-w-[170px] px-8 transition-all duration-300 flex items-center fill-accent justify-center bg-white overflow-hidden hover:border-accent group"
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 text-black font-semibold">
                  {"Let's talk"}
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
