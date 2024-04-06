import React from "react";
import ServiceCard from "./ServiceCard";
import dev from "../image/dev.png";

const data = [
  {
    img: dev,
    title: "Web Development",
    text: "We build professional responsive websites optimized for the most popular search engines.",
  },
  {
    img: dev,
    title: "Web Application",
    text: "We build professional responsive websites optimized for the most popular search engines.",
  },
  {
    img: dev,
    title: "Digital Marketing",
    text: "We build professional responsive websites optimized for the most popular search engines.",
  },
  {
    img: dev,
    title: "Web Development",
    text: "We build professional responsive websites optimized for the most popular search engines.",
  },
  {
    img: dev,
    title: "Brand Creation",
    text: "We build professional responsive websites optimized for the most popular search engines.",
  },
  // Add more objects as needed
];

const Services = () => {
  return (
    <div className="">
      <h1 className="text-center text-6xl mt-[50px] font-varela-round  font-bold">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mb-2">
        {data.map((item, index) => (
          <ServiceCard key={index} item={item} />
        ))}
        </div>
    </div>
  );
};

export default Services;
