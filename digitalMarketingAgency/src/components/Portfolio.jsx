import React from "react";
import PortfolioCard from "./PortfolioCard";
import img1 from "../image/1.jpg";
import img2 from "../image/2.jpg";
import img3 from "../image/3.jpg";
import img4 from "../image/4.jpg";

const date = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img4,
  },
];
const Portfolio = () => {
  return (
    <div className="flex  flex-col justify-center items-center">
      <h1 className="text-center text-6xl mt-[50px] font-varela-round font-bold">
        Portfolio
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {date.map((item) => (
          <PortfolioCard key={item.id} img={item.img} />
        ))}
        </div>
    </div>
  );
};

export default Portfolio;
