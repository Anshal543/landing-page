import React from "react";

const ServiceCard = ({ item }) => {
  return (
    <div className="mt-4">
      <div className="flex flex-col flex-wrap   justify-center items-center px-[40px] mb-[60px]">
        <img src={item.img} alt="" className="h-[100px] w-[100px] " />
        <div className="mt-6">
          <h1 className="text-3xl font-varela-round font-bold text-center mb-3">
            {item.title}
          </h1>
          <p className="text-center items-center ml-8  text-zinc-600 w-[80%]  text-lg">
            {item.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
