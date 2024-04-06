import React from "react";
import { RiStarSFill } from "react-icons/ri";

const ClientCard = ({img,name,review}) => {
  return (
    <div className=" bg-black max-w-[300px] text-center rounded-3xl h-[300px]  pt-[20px]">
      <div className="ml-[100px]">
        <img
        className="h-[100px] w-[100px] rounded-full"
         src={img} alt="" />
      </div>
      <h1 className="text-zinc-300 mt-[10px]">{name}</h1>
      <div className="flex justify-center">

      <RiStarSFill className="fill-yellow-400" />
      <RiStarSFill className="fill-yellow-400" />
      <RiStarSFill className="fill-yellow-400" />
      <RiStarSFill className="fill-yellow-400" />
      <RiStarSFill className="fill-yellow-400" />
      </div>
      
      <p className="text-zinc-300 px-[10px] mt-[20px]">{review} </p>
    </div>
  );
};

export default ClientCard;
