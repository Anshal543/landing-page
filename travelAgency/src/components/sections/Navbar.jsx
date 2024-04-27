import React, { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="flex justify-between items-center font-bold pt-6 text-navText cursor-pointer">
      <div>
        <img src="./images/logo.png" alt="" />
      </div>

      <div className="flex justify-around items-center w-2/3 max-lg:hidden space-x-2   ">
        <a className=" hover:text-blue-500 transition-all ease-in duration-200">
          Destinations
        </a>
        <a className=" hover:text-blue-500 transition-all ease-in duration-200">
          Hotels
        </a>
        <a className=" hover:text-blue-500 transition-all ease-in duration-200">
          Flights
        </a>
        <a className=" hover:text-blue-500 transition-all ease-in duration-200">
          Bookings
        </a>
        <a className=" hover:text-blue-500 transition-all ease-in duration-200">
          Login
        </a>
        <div>
          <button className="border-2 border-navText px-2 py-1 rounded-md ">
            Sign up
          </button>
        </div>

        <div className="flex justify-center items-center">
          <p>EN</p>
          <div className="flex items-center justify-center pl-1 ">
            <img className="w-[10px]" src="./images/chevron-down.png" alt="" />
          </div>
        </div>
      </div>
      <div className="lg:hidden relative">
        {menu ? (
          <RxCross2
            onClick={toggleMenu}
            className="text-2xl transition duration-1000 ease-in-out transform hover:scale-110"
          />
        ) : (
          <RxHamburgerMenu
            onClick={toggleMenu}
            className="text-2xl transition duration-1000 ease-in-out transform hover:scale-110"
          />
        )}
        {menu ? (
          <div className="flex flex-col items-end absolute top-4 right-0 w-1/3 transition all transform">
            <a className="p-4 hover:text-blue-500 transition duration-200 ease-in-out">
              Destinations
            </a>
            <a className="p-4 hover:text-blue-500 transition duration-200 ease-in-out">
              Hotels
            </a>
            <a className="p-4 hover:text-blue-500 transition duration-200 ease-in-out">
              Flights
            </a>
            <a className="p-4 hover:text-blue-500 transition duration-200 ease-in-out">
              Bookings
            </a>
            <a className="p-4 hover:text-blue-500 transition duration-200 ease-in-out">
              Login
            </a>
            <button className="rounded-md p-4 hover:text-blue-500 transition duration-200 ease-in-out">
              Signup
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
