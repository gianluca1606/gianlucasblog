import Layout from "../components/layout/layout";
import Head from "next/head";
import Projects from "../lib/projects.json";
export default function Timeline() {
  return (
    <Layout>
      <div className='flex items-center justify-center '>
        <Head>
          <title>Gianluca's Timeline</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <div className='container px-5 mx-auto '>
          <div className='flex flex-wrap w-full p-4 mb-4'>
            <div className='w-full mb-6 lg:mb-0'>
              <h1 className='mb-2 text-5xl font-bold text-white sm:text-4xl title-font'>
                Projects
              </h1>
              <div className='w-20 h-1 bg-indigo-500 rounded' />
            </div>
          </div>
          <div className='flex flex-wrap -m-4'>
            {Projects.projects.map((project, i) => (
              <div className='p-4 xl:w-1/3 md:w-1/2'>
                <div className='p-6 bg-white rounded-lg'>
                  <a href={project.link}>
                    <img
                      className='object-cover object-center w-full mb-6 rounded lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72'
                      src={project.picture}
                      alt='Image Size 720x400'
                    />
                  </a>
                  <h3 className='text-xs font-medium tracking-widest text-indigo-500 title-font'>
                    {project.languages}
                  </h3>
                  <h2 className='mb-4 text-lg font-medium text-gray-900 title-font'>
                    {project.title}
                  </h2>
                  <p className='text-base leading-relaxed'>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
