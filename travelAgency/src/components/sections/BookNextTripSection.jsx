import React from "react";
import TripStepCard from "../cards/TripStepCard";

const BookNextTripSection = () => {
  const steps = [
    {
      id: 0,
      iconUrl: "/images/destination-icon.png",
      title: "Choose Destination",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
    },
    {
      id: 1,
      iconUrl: "/images/payment-icon.png",
      title: "Make Payment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
    },
    {
      id: 2,
      iconUrl: "/images/airport-icon.png",
      title: "Reach Airport on Selected Date",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
    },
  ];
  return (
    <section className="flex justify-between flex-col md:flex-row items-center mt-[-3rem] ">
      <div className="">
        <p className="text-lightGray font-bold text-[1.2rem]">Easy and Fast</p>
        <p className=" font-volkhov text-[3.125rem] text-title font-[700] text-left">
          Book your next trip in 3 Easy steps
        </p>

        <div className="flex flex-col gap-[3rem] mt-[1.94rem]">
          {steps.map((step) => (
            <TripStepCard
              key={step.id}
              title={step.title}
              description={step.description}
              iconUrl={step.iconUrl}
            />
          ))}
        </div>
      </div>
      <div>
        <img
          src="/images/next-trip-image.png"
          alt="card with a girl on a wall"
        />
      </div>
    </section>
  );
};

export default BookNextTripSection;