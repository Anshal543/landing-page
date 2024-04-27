import React from "react";

const HeroSection = () => {
  return (
    <div className="flex max-lg:flex-col justify-center lg:justify-between  items-start mt-8 px-6 w-full">
      <div className=" mt-24 flex justify-center flex-col items-start">
        <p className="text-primary font-poppins font-semibold uppercase">
          Best Destinations around the world
        </p>
        <div className="flex flex-col text-[4rem] font-volkhov leading-tight font-bold text-lightBlue max-lg:w-2/3 ">
          <div className="flex">
            Travel,
            <div className="flex flex-col ">
              <span className="z-10 ml-4">enjoy</span>
              <img
                className="-mt-6 -ml-4 hidden lg:block"
                src="./images/sytlish-underline.png"
                alt=""
              />
            </div>
          </div>
          <p className="">
            and live a new and full life
          </p>
        </div>
        <p className="my-[1.6rem] text-lightGray font-semibold max-w-[420px] leading-[1.6rem]">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="flex items-center gap-5 ">
          <div>
            <button className="px-4 py-3 bg-secondary text-white rounded-lg font-semibold shadow-lg">
              Find out more
            </button>
          </div>
          <div className="flex  items-center mt-6 text-lightGrayAlt">
            <img src="./images/play-button.png" alt="" />
            <p className="-mt-6"> Play Demo</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-start lg:w-full ">
        <img src="./images/lady-with-aircraft.png" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
