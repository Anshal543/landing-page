import React from "react";
import ClientCard from "./ClientCard";
import girl from "../image/girl.jpg";

const data = [
  {
    img:girl,
    name:"Jhon David",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia omnis, modi sed corporis aspernatur laborum autem"
  },
  {
    img:girl,
    name:"Jhon David",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia omnis, modi sed corporis aspernatur laborum autem"
  },
  {
    img:girl,
    name:"Jhon David",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia omnis, modi sed corporis aspernatur laborum autem"
  },
]

const Client = () => {
  return (
    <div className="text-center flex flex-col justify-between items-center">
      <h1 className="text-center text-5xl font-varela-round font-bold mt-[80px] pb-10">
        What say Our Clients
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  items-center justify-center">
        {data.map((prev, i) => {
          return <ClientCard key={i} img={prev.img} name={prev.name} review={prev.review} />;
        })}
     
      </div>
    </div>
  );
};

export default Client;
