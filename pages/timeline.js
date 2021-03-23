import Layout from "../components/layout/layout";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <div className='flex items-center justify-center mt-28'>
        <Head>
          <title>Gianluca's Timeline</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <div className='container'>
          <div className='flex flex-col grid-cols-9 p-2 mx-auto md:grid text-blue-50'>
            {/* <!-- left --> */}
            {/* <div className='flex flex-row-reverse md:contents'>
              <div className='col-start-1 col-end-5 p-4 my-4 ml-auto bg-blue-500 shadow-md rounded-xl'>
                <h3 className='mb-1 text-lg font-semibold'>Bohle AG</h3>
                <p className='leading-tight text-justify'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quaerat?
                </p>
              </div>
              <div className='relative col-start-5 col-end-6 mr-10 md:mx-auto'>
                <div className='flex items-center justify-center w-6 h-full'>
                  <div className='w-1 h-full bg-blue-800 pointer-events-none'></div>
                </div>
                <div className='absolute w-6 h-6 -mt-3 bg-blue-500 rounded-full shadow top-1/2'></div>
              </div>
            </div> */}
            {/* <!-- right --> */}
            {/* <div className='flex md:contents'>
              <div className='relative col-start-5 col-end-6 mr-10 md:mx-auto'>
                <div className='flex items-center justify-center w-6 h-full'>
                  <div className='w-1 h-full bg-blue-800 pointer-events-none'></div>
                </div>
                <div className='absolute w-6 h-6 -mt-3 bg-blue-500 rounded-full shadow top-1/2'></div>
              </div>
              <div className='col-start-6 col-end-10 p-4 my-4 mr-auto bg-blue-500 shadow-md rounded-xl'>
                <h3 className='mb-1 text-lg font-semibold'>Next step</h3>
                <p className='leading-tight text-justify'>Coming soon</p>
              </div>
            </div> */}
            {/* <!-- left --> */}
            <div className='flex flex-row-reverse md:contents'>
              <div className='col-start-1 col-end-5 p-4 my-4 ml-auto bg-blue-500 shadow-md rounded-xl'>
                <h3 className='mb-1 text-lg font-semibold'>Next Step</h3>
                <p className='leading-tight text-justify animate-bounce'>
                  Coming Soon...
                </p>
              </div>
              <div className='relative col-start-5 col-end-6 mr-10 md:mx-auto'>
                <div className='flex items-center justify-center w-6 h-full'>
                  <div className='w-1 h-full bg-blue-800 pointer-events-none'></div>
                </div>
                <div className='absolute w-6 h-6 -mt-3 bg-blue-500 rounded-full shadow top-1/2'></div>
              </div>
            </div>
            {/* <!-- right --> */}
            <div className='flex md:contents'>
              <div className='relative col-start-5 col-end-6 mr-10 md:mx-auto'>
                <div className='flex items-center justify-center w-6 h-full'>
                  <div className='w-1 h-full bg-blue-800 pointer-events-none'></div>
                </div>
                <div className='absolute w-6 h-6 -mt-3 bg-blue-500 rounded-full shadow top-1/2'></div>
              </div>
              <div className='col-start-6 col-end-10 p-4 my-4 mr-auto bg-blue-500 shadow-md rounded-xl'>
                <h3 className='mb-1 text-lg font-semibold'>Bohle AG</h3>
                <p className='leading-tight text-justify'>
                  2019-2021 Training/education IT specialist/application developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      posts: [],
    },
  };
};
