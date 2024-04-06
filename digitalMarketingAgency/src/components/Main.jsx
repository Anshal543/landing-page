import React from "react";
import teaImage from "../image/pic.jpg";

const Main = () => {
  return (
    <div className=" flex justify-between items-center w-full px-12  ">
      <div className=" flex flex-col w-full pt-12 ">
        <h1 className="font-dancing text-4xl text-yellow-400 pt-4">
          We are Creative
        </h1>
        <h1 className="text-6xl py-2">
          Digital Marketing Agency
        </h1>
        <p className=" w-full pt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere
          molestias distinctio accusantium. Molestias dolorem similique ea sint!
          Ipsam soluta quis veritatis ipsa est in alias fugit sint voluptates,
          cumque suscip.
        </p>
        <button className="border-2 border-zinc-600 sm:w-28   rounded-xl text-zinc-500 mt-5 ">Get Started</button>
      </div>
      {/* <div className="relative h-[410px] w-[410px] bg-yellow-600 z-10 right-6 rounded-full"></div> */}
      <div className="flex justify-center items-center w-full relative bottom-4 -right-3 max-lg:hidden ">
        <img
          src={teaImage}
          alt=""
          className=" w-[400px] object-contain rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Main;
