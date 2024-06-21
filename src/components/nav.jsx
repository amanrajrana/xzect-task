"use client";

import { useState } from "react";
import { FaBars, FaMagnifyingGlass, FaXmark } from "react-icons/fa6";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="container flex mt-4 p-4 justify-between items-center">
      {/* <!-- LOGO --> */}
      <img
        src="https://livvic-jekyll.tortoizthemes.com/assets/images/logo.png"
        alt="Livvic"
        className="w-40 h-12 object-contain"
      />
      {/* <!-- NAVIGATION --> */}
      <div className="relative flex items-center">
        <button
          id="menu-icon"
          className="menu-icon bg-transparent border-none text-2xl lg:hidden"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <FaXmark /> : <FaBars />}
        </button>
        <ul
          id="navbar"
          className={`${
            showMenu ? "flex" : "hidden"
          } nav-links flex-col gap-1 list-none absolute bg-blue-900 py-8 px-4 right-0 top-10 max-w-[95vw] w-72 overflow-hidden lg:bg-transparent lg:static lg:flex-row lg:max-w-max lg:w-auto lg:flex lg:items-center lg:gap-x-7 lg:list-disc`}
        >
          <li className="pl-3 text-lg font-medium list-none">
            <a href="#" className="text-primary duration-300">
              Home
            </a>
          </li>

          <li className="pl-3 text-lg font-medium">
            <a href="#" className="duration-300 hover:text-primary">
              About
            </a>
          </li>

          <li className="pl-3 text-lg font-medium">
            <a href="#" className="duration-300 hover:text-primary">
              Services
            </a>
          </li>
          <li className="pl-3 text-lg font-medium">
            <a href="#" className="duration-300 hover:text-primary">
              Portfolio
            </a>
          </li>
          <li className="pl-3 text-lg font-medium">
            <a href="#" className="duration-300 hover:text-primary">
              team
            </a>
          </li>
          <li className="pl-3 text-lg font-medium">
            <a href="#" className="duration-300 hover:text-primary">
              price
            </a>
          </li>
          <li className="pl-3 text-lg font-medium">
            <a href="#" className="duration-300 hover:text-primary">
              blog
            </a>
          </li>
          <li className="pl-3 text-lg font-medium">
            <a href="#" className="duration-300 hover:text-primary">
              Contact
            </a>
          </li>
        </ul>

        <button className="hidden lg:inline-block my-auto mx-8 bg-transparent text-lg duration-300 hover:text-primary">
          <FaMagnifyingGlass />
        </button>
      </div>
    </nav>
  );
}
