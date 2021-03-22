import React, { FC } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export interface props {
  children?: React.ReactNode;
}

const Layout: FC<props> = ({ children }) => (
  <div className="flex flex-col max-h-screen min-w-full min-h-screen bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200">
    <div className="relative flex-grow w-full h-full overflow-auto font-nunito">
      <Navbar />
      {children}
    </div>
    <Footer />
  </div>
);

export default Layout;
