import Head from "next/head";
import Layout from "../components/layout/layout";

export default function Home() {
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
            Here are all the notices and other information, I have been told by a legal
            adviser, I need to provide on this website.
          </div>

          <h1 className='w-full mt-10 mb-4 text-2xl'>Disclaimer</h1>
          <div className='w-full border-b-2 border-white'>
            The information included in this website is for general information purposes
            only. I, Gianluca Santos Latina, do not warrant the correctness or
            completeness of it. The examples are not intended to be used in a production
            system environment, and are only intended to better explain and illustrate the
            subject matter. In no event will I be liable for any loss or damage including
            without limitation, indirect or consequential loss or damage, or any loss or
            damage whatsoever arising from loss of data or profits arising out of, or in
            connection with, the use of this website. Any reliance you place on such
            information is strictly at your own risk. You are responsible for testing and
            the consequences of using this information. I reserve the right to modify this
            disclaimer at any time without notice.
          </div>

          <h1 className='w-full mt-10 mb-4 text-2xl'>Copyright</h1>
          <div className='w-full whitespace-pre-wrap border-b-2 border-white'>
            This site and all content provided in it belongs to Simon Hutchinson and is
            copyrighted by law. The content on this site may not be copied, published,
            distributed, transmitted, printed or resold without prior permission. All
            other copyright and trademark material is, and will remain, the property of
            their respective owners.
          </div>

          <h1 className='w-full mt-10 mb-4 text-2xl'>Comments</h1>
          <div className='w-full whitespace-pre-wrap border-b-2 border-white'>
            All user comments are reviewed, I do this to stop this blog from being
            spammed. Therefore, there may be a delay between the time you post your
            comment and when it appears. No guarantee is given that a comment will be
            published. If you want to increase the likelihood of your comment being
            published it needs to be interesting and relevant to the subject of the post.
            Any comment that includes a link to a website unrelated to the subject of the
            post will be considered spam. A link to a non-IBM IBM i product or service
            could also be considered spam.
          </div>

          <h1 className='w-full mt-10 mb-4 text-2xl'>Links to Third Party sites</h1>
          <div className='w-full mb-10 whitespace-pre-wrap border-b-2 border-white'>
            This site contains links to third party web sites. The linked sites are not
            under my control, and I am not responsible for the contents of any linked site
            or any link contained in a linked site. I am providing these links only as a
            convenience, and the inclusion of a link does not imply that I endorse the
            linked site.
          </div>
        </div>
      </div>
    </Layout>
  );
}
export const getStaticProps = async () => {};
