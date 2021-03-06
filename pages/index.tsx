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
        <div className='flex items-center justify-start w-full mt-4 md:flex-col h-1/2 md:mt-0 md:w-1/2 md:h-full'>
          <div>
            <motion.div
              initial={{ scale: 0.3 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.9 }}
            >
              <img
                src='/picture2.png'
                className='mx-auto mt-20 rounded-full shadow-2xl w-36 h-36 md:w-96 md:h-72 md:mt-24'
              />
            </motion.div>
          </div>
          <div className='mx-4 mt-20 text-xl font-bold text-center text-white text-opacity-90 md:mt-4'>
            {count ? (
              <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
                <span> Hello I am Gianluca.</span>
                <Typist.Backspace count={20} delay={3000} />
                <span> Welcome to my Personal Page.</span>
                <Typist.Backspace count={30} delay={3000} />
                <span> Check my blog out.</span>
              </Typist>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className='flex justify-center mt-10 md:mt-0 md:items-center md:w-1/2 md:h-full'>
          <StackSection />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
