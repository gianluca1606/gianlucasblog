import React, { FC } from "react";
import Link from "next/link";

const Navbar: FC = () => (
  <div className="py-8">
    <nav className="sticky inset-x-0 top-0 z-20 flex flex-wrap items-center w-full h-8 px-4 md:fixed md:justify-between">
      <div className="flex items-center justify-center w-full py-3 text-black md:w-auto md:justify-start flex-no-shrink">
        <svg
          className="w-8 h-8 mr-2 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="1.5"
          clipRule="evenodd"
          viewBox="0 0 716 895"
        >
          <path d="M357.776 0l357.77 178.885v536.657l-357.77 178.89L0 715.542V178.885"></path>
          <path
            className="text-white fill-current"
            d="M357.776 804.982l268.32-134.16v-178.89l-89.44-44.72 89.44-44.72V223.606L357.776 89.442v626.1l-178.89-89.44V178.885l-89.443 44.721v447.216l268.333 134.16z"
          ></path>
          <path d="M447.216 670.822l89.44-44.72v-89.45l-89.44-44.72v178.89zM447.216 402.492l89.44-44.721v-89.443l-89.44-44.722"></path>
        </svg>
        <span className="text-xl font-semibold tracking-tight">
          Gianluca Santos
        </span>
      </div>

      <ul className="flex flex-wrap items-center justify-center w-full space-x-2 border-b md:justify-end menu md:border-none list-reset md:w-auto">
        <li className="md:border-none">
          <Link href="/">
            <a className="block px-4 py-2 text-xl font-bold text-white no-underline bg-black rounded md:inline-block hover:text-gray-600">
              Home
            </a>
          </Link>
        </li>

        <li className="border-t md:border-none">
          <Link href="/timeline/">
            <a className="block px-4 py-2 text-xl font-bold text-white no-underline bg-black rounded md:inline-block hover:text-gray-600">
              Timeline
            </a>
          </Link>
        </li>

        <li className="transition duration-700 ease-in border-t md:border-none">
          <Link href="/blog/">
            <a className="block px-4 py-2 text-xl font-bold text-white no-underline bg-black rounded md:inline-block hover:text-gray-600">
              Blog
            </a>
          </Link>
        </li>
        <li className="border-t md:border-none">
          <Link href="/impressum/">
            <a className="block px-4 py-2 text-xl font-bold text-white no-underline bg-black rounded md:inline-block hover:text-gray-600">
              Legal Notice
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
