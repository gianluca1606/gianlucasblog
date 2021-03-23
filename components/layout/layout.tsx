import React, { FC } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export interface props {
  children?: React.ReactNode;
}

const Layout: FC<props> = ({ children }) => (
  <div className='relative flex flex-col max-h-screen min-w-full min-h-screen bg-gray-900'>
    <img src='/Frame.png' className='absolute z-0 w-full h-full' />
    <div className='relative z-10 flex-grow object-cover w-full h-full overflow-auto font-nunito'>
      <Navbar />
      {children}
    </div>
    <Footer />
  </div>
);

export default Layout;
