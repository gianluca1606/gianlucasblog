import Head from "next/head";
import Layout from "../components/layout/layout";
import Typical from "react-typical";
import { motion } from "framer-motion";
import { DiCss3, DiNodejs, DiPostgresql } from "react-icons/di";
import { SiTypescript, SiVuetify, SiIbm, SiJavascript, SiFirebase } from "react-icons/si";

type CardProps = {
  text: string;
};

export const StackSection = () => {
  return (
    <div className='flex flex-col items-center w-full bg-white lg:w-4/6 md:rounded-2xl h-5/6 lg:h-auto'>
      <h1 className='mt-8 text-3xl font-extrabold'>About me:</h1>
      <p className='m-2 mx-4 font-semibold text-center md:text-xl'>
        I am a software Developer based in Remscheid, Germany. Currently I am going to
        school and working for the Bohle AG, where I am encarged of programming the ERP
        System.
      </p>
      <p className='m-2 font-semibold text-center md:text-xl'>
        In my freetime I like to learn and experiment new things, like i did with this
        webpage. Usually I use ReactJS/NextJS with NodeJS but I also have made experiences
        with CMS Systems such as Sanity.
      </p>
      <p className='m-4 font-semibold text-center md:text-xl'>
        In the future I hope to get better at Typescript and learn Graphql since i think
        that's a very robust tool for a project idea that I have.
      </p>
      <h1 className='mt-4 space-x-2 font-bold text-center md:text-xl '>
        This is the Stack that i am currently using:
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
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <Layout>
      <div className='flex flex-wrap items-center justify-center w-full h-full mt-24'>
        <Head>
          <title>Gianluca Santos Latina</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <div className='flex items-center justify-center mt-4 md:flex-col h-1/2 md:mt-0 md:w-1/2 md:h-full'>
          <div>
            <img
              src='https://previews.123rf.com/images/warrengoldswain/warrengoldswain1610/warrengoldswain161000074/65425216-gl%C3%BCckliche-l%C3%A4chelnde-afrikanische-schwarze-mann-portr%C3%A4t-reale-person-im-studio-vollst%C3%A4ndige-sammlung-von-versch.jpg'
              className='w-32 h-32 mx-auto mt-20 border-4 border-black rounded-full shadow-2xl md:w-56 md:h-56 md:mt-24'
            />
          </div>
          <h1 className='mx-4 mt-4 text-xl font-bold text-center text-opacity-90'>
            <Typical
              steps={[
                "Hello I am Gianluca.",
                2000,
                "Welcome to my Personal Page.",
                2000,
                "Check my Blog out.",
                2000,
              ]}
              loop={Infinity}
              className='inline-block'
              wrapper='p'
            />
          </h1>
        </div>
        <div className='flex justify-center mt-10 md:mt-0 md:items-center md:w-1/2 md:h-full '>
          <StackSection />
        </div>
      </div>
    </Layout>
  );
}
