import Head from "next/head";
import React, { useState, useEffect } from "react";
import Layout from "../components/layout/layout";
import { motion } from "framer-motion";
import Typist from "react-typist";
import { DiCss3, DiNodejs, DiPostgresql } from "react-icons/di";

import {
  SiTypescript,
  SiVuetify,
  SiIbm,
  SiJavascript,
  SiFirebase,
  SiGraphql,
} from "react-icons/si";

type CardProps = {
  text: string;
};

export const StackSection = () => {
  return (
    <motion.div
      initial={{ scale: 0.3 }}
      animate={{ scale: 1.0 }}
      transition={{ duration: 0.9 }}
      className='flex flex-col items-center w-full overflow-hidden bg-white lg:w-4/6 md:rounded-2xl h-5/6 lg:h-auto'
    >
      <h1 className='mt-8 text-3xl font-extrabold'>About me:</h1>
      <p className='m-2 mx-4 font-semibold text-center md:text-xl'>
        I am a software Developer based in Remscheid, Germany. Currently I am going to
        school and working for the Bohle AG, where I am commited to programming the ERP
        System.
      </p>
      <p className='m-2 font-semibold text-center md:text-xl'>
        In my freetime I like to learn and experiment new things, like i did with this
        webpage. Usually I use ReactJS/NextJS with NodeJS but I also have made experiences
        with CMS Systems such as Sanity.
      </p>
      <p className='m-4 font-semibold text-center md:text-xl'>
        I also tried a lof of programming languages and frameworks out.{" "}
        {`(Nest JS,Vue, Quasar,Golang,
        Laravel and more)`}
      </p>
      <h1 className='mt-4 space-x-2 font-bold text-center md:text-xl '>
        Altough i spend a lot of time programming and i like a lot to work on on projects
        in my free time, my biggest love is to play soccer.
      </h1>

      <div className='flex mt-8 space-x-4'>
        <motion.div
          initial={{ scale: 0.3 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <DiCss3 className='w-16 h-16' />
        </motion.div>
        <motion.div
          initial={{ scale: 0.3 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <DiNodejs className='w-16 h-16' />
        </motion.div>
        <motion.div
          initial={{ scale: 0.3 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <SiJavascript className='w-16 h-16 rounded-full' />
        </motion.div>
        <motion.div
          initial={{ scale: 0.3 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <DiPostgresql className='w-16 h-16 rounded-full' />
        </motion.div>
      </div>
      <div className='flex mt-5 mb-4 space-x-4'>
        <motion.div
          initial={{ scale: 0.3 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <SiFirebase className='w-16 h-16 rounded-full' />
        </motion.div>
        <motion.div
          initial={{ scale: 0.3 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <SiIbm className='w-16 h-16 rounded-full' />
        </motion.div>
        <motion.div
          initial={{ scale: 0.3 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <SiVuetify className='w-16 h-16 rounded-full' />
        </motion.div>
        <motion.div
          initial={{ scale: 0.3 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <SiTypescript className='w-16 h-16 rounded-full' />
        </motion.div>

        <motion.div
          initial={{ scale: 0.3 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <SiGraphql className='w-16 h-16 rounded-full' />
        </motion.div>
      </div>
    </motion.div>
  );
};

function Home() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);

  return (
    <Layout>
      <div className='flex flex-wrap items-center justify-center w-full h-full mt-24'>
        <Head>
          <title>Gianluca </title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <meta
            name='google-site-verification'
            content='1S6Ti6dAjqBnYRFOFMx32q7J0EnD49owDa-yxGumgUY'
          />
        </Head>
        <div className='flex flex-wrap items-center w-full max-w-4xl h-1/2 md:mt-16 md:w-1/2 md:h-full'>
          {/*Main Col*/}

          <div
            id='profile'
            className='w-full mx-6 mt-24 bg-white rounded-lg shadow-2xl opacity-75 md:mt-0 lg:w-3/5 lg:rounded-l-lg lg:rounded-r-none lg:mx-0'
          >
            <div className='p-4 text-center md:p-12 lg:text-left'>
              {/* Image for mobile view*/}
              <div
                className='block w-48 h-48 mx-auto -mt-16 bg-center bg-cover rounded-full shadow-xl lg:hidden'
                style={{
                  backgroundImage: 'url("picture3.jpeg")',
                }}
              />
              <h1 className='pt-8 text-3xl font-bold lg:pt-0'>Gianluca Santos Latina</h1>
              <div className='w-4/5 pt-3 mx-auto border-b-2 border-blue-500 opacity-25 lg:mx-0' />
              <p className='flex items-center justify-center pt-4 text-base font-bold lg:justify-start'>
                <svg
                  className='h-4 pr-4 text-blue-700 fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z' />
                </svg>{" "}
                Fullstack Developer
              </p>
              <p className='flex items-center justify-center pt-2 text-xs text-gray-600 lg:text-sm lg:justify-start'>
                <svg
                  className='h-4 pr-4 text-blue-700 fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z' />
                </svg>{" "}
                Remscheid - 51° 10' 47.39" N, 7° 11' 33.00" W
              </p>
              <div>
                {" "}
                <p className='pt-8 text-sm'>
                  <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
                    <span> Hello I am Gianluca.</span>
                    <Typist.Backspace count={20} delay={3000} />
                    <span> Welcome to my Personal Page.</span>
                    <Typist.Backspace count={30} delay={3000} />
                    <span> Check my blog out.</span>
                  </Typist>
                </p>
              </div>

              <div className='pt-12 pb-8'>
                <a
                  href='mailto:gianlucalatina@gmail.com'
                  className='px-4 py-2 font-bold text-white bg-blue-700 rounded-full hover:bg-blue-900'
                >
                  Get In Touch
                </a>
              </div>
              <div className='flex flex-wrap items-center justify-between w-4/5 pb-16 mx-auto mt-6 lg:pb-0 lg:w-full'>
                <a
                  className='link'
                  href='https://twitter.com/gianluca1606'
                  data-tippy-content='@twitter_handle'
                >
                  <svg
                    className='h-6 text-gray-600 fill-current hover:text-blue-700'
                    role='img'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <title>Twitter</title>
                    <path d='M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z' />
                  </svg>
                </a>
                <a
                  className='link'
                  href='https://github.com/gianluca1606'
                  data-tippy-content='@github_handle'
                >
                  <svg
                    className='h-6 text-gray-600 fill-current hover:text-blue-700'
                    role='img'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <title>GitHub</title>
                    <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
                  </svg>
                </a>

                <a
                  className='link'
                  href='https://www.youtube.com/channel/UCh7wGcxRVe7H373ttpO8F9w'
                  data-tippy-content='@youtube_handle'
                >
                  <svg
                    className='h-6 text-gray-600 fill-current hover:text-blue-700'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                  >
                    <title>YouTube</title>
                    <path d='M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z' />
                  </svg>
                </a>
              </div>
              {/* Use https://simpleicons.org/ to find the svg for your preferred product */}
            </div>
          </div>
          {/*Img Col*/}
          <div className='w-full lg:w-2/5'>
            {/* Big profile image for side bar (desktop) */}
            <img
              src='picture4.jpeg'
              className='hidden -ml-2 rounded-none shadow-2xl lg:rounded-lg lg:block'
            />
            {/* Image from: http://unsplash.com/photos/MP0IUfwrn0A */}
          </div>
          {/* Pin to top right corner */}
        </div>
      </div>
    </Layout>
  );
}

export default Home;
