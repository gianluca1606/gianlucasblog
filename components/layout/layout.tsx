import React, { FC } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";

export interface props {
  children?: React.ReactNode;
}

const Layout: FC<props> = ({ children }) => (
  <>
    <Head>
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/favicon_io/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon_io/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon_io/favicon-16x16.png'
      />
    </Head>
    <div className='relative flex flex-col max-h-screen min-w-full min-h-screen bg-gray-900'>
      <img
        src='https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
        className='absolute z-0 w-full h-full opacity-50'
      />
      <div className='relative z-10 flex-grow object-cover w-full h-full overflow-auto font-nunito'>
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  </>
);

export default Layout;
