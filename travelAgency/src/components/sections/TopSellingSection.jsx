import React from "react";
import DestinationCard from "../cards/DestinationCard";

const TopSellingSection = () => {
  const destinations = [
    {
      id: 0,
      imageUrl: "/images/rome.png",
      title: "Rome, Italy",
      amount: "$5.42k",
      duration: "10 Days Trip",
      highlighted: false,
    },
    {
      id: 1,
      imageUrl: "/images/london.png",
      title: "London, UK",
      amount: "$4.2k",
      duration: "12 Days Trip",
      highlighted: false,
    },
    {
      id: 2,
      imageUrl: "/images/europe.png",
      title: "Full Europe",
      amount: "$15k",
      duration: "28 Days Trip",
      highlighted: true,
    },
  ];
  return (
    <div className="mt-20">
      <p className="text-lightGray text-center text-bold text-[1.2rem]">
        Top Selling
      </p>
      <p className="text-center text-title font-volkhov text-[3rem] font-bold">
        Top Destinations
      </p>
      <div className="flex flex-col gap-4 md:flex-row items-center md:justify-between mt-16 w-full">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            imageUrl={destination.imageUrl}
            title={destination.title}
            duration={destination.duration}
            amount={destination.amount}
            highlighted={destination.highlighted}
          />
        ))}
      </div>
    </div>
  );
};

export default TopSellingSection;
