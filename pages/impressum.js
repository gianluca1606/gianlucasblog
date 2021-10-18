import Head from "next/head";
import Layout from "../components/layout/layout";

export default function Impressum() {
  return (
    <Layout>
      <div className='flex flex-wrap items-center justify-center w-full h-full mt-24 text-white md:mt-0'>
        <Head>
          <title>Legal Notices</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <div className='flex flex-col items-center md:w-6/12'>
          <h1 className='w-full m-4 text-2xl text-left '>Legal notices</h1>
          <div className='w-full border-b-2 border-white'>
            Legal advices and other information
          </div>

          <h1 className='w-full mt-10 mb-4 text-2xl'>Disclaimer</h1>
          <div className='w-full border-b-2 border-white'>
            The information included in this website is for general information purposes
            only. I do not warrant the correctness or completeness of it. The examples are
            not intended to be used in a production system environment. By using the
            examples you are responsible for testing and checking the consequences of this
            information. I am not liable for any loss or damage. Any reliance you place on
            such information is strictly at your own risk. I reserve the right to change
            these terms and conditions at any time without prior notice.
          </div>

          <h1 className='w-full mt-10 mb-4 text-2xl'>Copyright</h1>
          <div className='w-full whitespace-pre-wrap border-b-2 border-white'>
            This site and all content provided in it belongs to Gianluca Santos Latina and
            is copyrighted by law. All other brand names and trademarks are the property
            of their respective owners and are used for descriptive purposes only.
          </div>

          <h1 className='w-full mt-10 mb-4 text-2xl'>Comments</h1>
          <div className='w-full whitespace-pre-wrap border-b-2 border-white'>
            All user comments are reviewed, I do this to stop the blog from being spammed.
            Therefore, there may be a delay between the time you post your comment and
            when it appears. No guarantee is given that a comment will be published. Any
            comment that includes a link to a website unrelated to the subject of the post
            will be considered spam.
          </div>

          <h1 className='w-full mt-10 mb-4 text-2xl'>Links to Third Party sites</h1>
          <div className='w-full mb-10 whitespace-pre-wrap border-b-2 border-white'>
            Linked thirtd party web sites are not under my control, and I am not
            responsible for the contents of any linked site.
          </div>
        </div>
      </div>
    </Layout>
  );
}
