import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black text-white px-6  py-2 mt-5 relative">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold leading-6">LOGO</h1>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <FaTimes className="text-white text-3xl" />
            ) : (
              <FaBars className="text-white text-3xl" />
            )}
          </button>
        </div>
        <div className={` lg:flex gap-8 max-lg:hidden`}>
          <ul className="flex gap-4 text-m">
            <li className="text-yellow-400">Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <div className="flex bg-white rounded-full h-[26px]">
              <FaSearch className="bg-white fill-black mt-1.5 ml-2" />
              <input
                className="pl-4 rounded-full border-transparent focus:outline-none"
                type="text"
                name=""
                id=""
                placeholder="Search"
              />
            </div>
          </ul>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden absolute z-20 right-1">
          <ul className="flex flex-col text-m float-right bg-red-500 ">
            <li >Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
