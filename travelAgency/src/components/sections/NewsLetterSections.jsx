import React from "react";

const NewsLetterSections = () => {
  return (
    <div className="bg-[#DFD7F9] p-[4rem] rounded-[1.25rem] rounded-tl-[8.0625rem] relative lg:-mt-[7rem]">
      <div className="z-20 flex justify-center flex-col items-center">
        <p className="text-lightGray text-[1.5rem] font-bold text-center mb-[2.63rem]">
          Subscribe to get information, latest news and other{" "}
          <br className="hidden md:block" /> interesting offers about Jadoo
        </p>
        <div className="flex justify-between  flex-col md:flex-row items-center gap-8">
          <div className="relative flex-grow z-10 ">
            <input
              className="bg-white h-[3.5rem] rounded-lg text-lightBlue pl-[3rem]"
              type="email"
              placeholder="Your email"
            />
            <div className="absolute top-5 left-4">
              <img src="./images/envelope.png" alt="" />
            </div>
          </div>
          <button className="px-4 py-3 red-gradient text-white rounded-lg font-semibold shadow-lg">
            Find out more
          </button>
        </div>
      </div>
      <div className="absolute bottom-0  left-4 z-0 opacity-25">
        <img
          src="/images/round-ring-left.png"
          alt="round ring left"
          className="w-[200px]"
        />
      </div>

      <div className="absolute -top-4 -right-4">
        <img src="/images/sent-gradient-icon.png" alt="send icon" />
      </div>

      <div className="absolute top-0 right-0 opacity-25">
        <img
          src="/images/round-ring-right.png"
          alt="round ring right"
          className="w-[200px]"
        />
      </div>
    </div>
  );
};

export default NewsLetterSections;
