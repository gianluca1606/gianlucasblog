import Head from "next/head";
import Layout from "../components/layout/layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center w-full h-full mt-48 md:mt-64 '>
        <Head>
          <title>404 not found</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <h3 className='mb-4 text-7xl'>404</h3>
        <h3 className='text-4xl '>
          The page you are looking for does not exist. Click on the link below to go back
          home
        </h3>
        <Link href='/'>
          <a className='px-5 py-4 mt-10 text-2xl text-white bg-indigo-500 rounded-xl hover:bg-indigo-800'>
            Go back home
          </a>
        </Link>
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
