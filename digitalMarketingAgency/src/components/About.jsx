import React from "react";
import women from "../image/women.jpg";

const About = () => {
  return (
    <div className="flex justify-between mt-[40px] px-20">
      {/* <div
        className="relative h-[410px] w-[340px] bg-gradient-to-l from-neutral-900 to-gray-300
       ml-[80px] rounded-3xl max-w-[400px]" */}
      {/* > */}
        <div className="max-lg:hidden   w-full">
          <img
            className=" w-[380px] object-contain rounded-3xl"
            src={women}
            alt=""
          />
        </div>
      {/* </div> */}

      <div className=" w-full flex  flex-col justify-center items-center  mx-4 ">
        <h1 className="text-5xl font-varela-round font-bold mb-[20px]">
          About Us
        </h1>
        <p className="text-2xl max-lg:w-4/5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          quibusdam velit corrupti optio quia, ut est adipisci nemo totam
          molestias aspernatur dicta libero, voluptatibus ipsam neque, aliquid
          ea similique ipsa! Optio, enim vero quia exercitationem dolore
          incidunt suscipit perferendis minima voluptatibus, eos earum nobis
          animi expedita,{" "}
        </p>
        <button
          className="border-2 border-zinc-600 px-7 py-1 leading-7 rounded-full text-zinc-500
         mt-16"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default About;
