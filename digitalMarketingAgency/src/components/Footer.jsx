import React from "react";

const Footer = () => {
  return (
    <div className="bg-black pt-8 mt-8">
      <div className="flex justify-center px-5 sm:px-20 items-start">
        <div className="max-lg:hidden w-2/5 ">
          <h1 className="text-5xl text-white font-bold ">LOGO</h1>
        </div>
        <div className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="flex flex-col items-center justify-start text-white mb-2 ">
            <h1>OUR PAGES</h1>
            <ul className="text-zinc-200 text-xs mt-5 ">
              <li className="mt-[10px]">HOME</li>
              <li className="mt-[10px]">ABOUT US</li>
              <li className="mt-[10px]">SERVICES</li>
              <li className="mt-[10px]">PORTFOLIO</li>
              <li className="mt-[10px]">CONTACT US</li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-start text-white mb-2  ">
            <h1>POLICIES</h1>
            <ul className="text-zinc-200 text-xs mt-5 ">
              <li className="mt-[10px]">PRIVACY POLICY</li>
              <li className="mt-[10px]">TERMS OF USE</li>
              <li className="mt-[10px]">COOKIE POLICY</li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-start text-white mb-2">
            <h1> FOLLOW US</h1>
            <ul className="text-zinc-200 text-xs  mt-5">
              <li className="mt-[10px]">FACEBOOK</li>
              <li className="mt-[10px]">INSTAGRAM</li>
              <li className="mt-[10px]">LINKEDIN</li>
              <li className="mt-[10px]">TWITTER</li>
            </ul>
          </div>
          <div className="flex flex-col items-center  justify-start text-white mb-2">
            <h1>CONTACT US</h1>
            <ul className="text-zinc-200 text-xs mt-5">
              <li className="mt-[10px]">ADDRESS</li>
              <li className="mt-[10px]">PHONE</li>
              <li className="mt-[10px]">EMAIL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
