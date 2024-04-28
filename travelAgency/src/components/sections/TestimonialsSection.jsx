import React from "react";
import TestimonialCard from "../cards/TestimonialCard";

const TestimonialsSection = () => {
  const reviews = [
    {
      id: 0,
      imageUrl: "/images/mike.png",
      reviewerName: "Mike taylor",
      position: "Lahore, Pakistan",
      review:
        "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    },
    {
      id: 2,
      imageUrl: "/images/mike.png",
      reviewerName: "Chris Thomas",
      position: "CEO of Red Button",
      review:
        "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    },
  ];
  return (
    <div className="flex justify-between flex-col lg:flex-row items-center gap-16 md:mt-[3rem] lg:mt-[5rem]">
      <div>
        <p className="text-lightGray text-[1rem] font-bold uppercase">
          Testimonials
        </p>
        <p className="text-title text-[3rem] font-bold">
          What People Say About Us.
        </p>
        <div className="mt-[5rem] hidden lg:block">
          <img src="./images/slid-indicator.png" alt="" />
        </div>
      </div>
      <div className="w-full flex justify-center items-center gap-4">
        <div className="relative">
          <TestimonialCard
            key={reviews[0].id}
            imageUrl={reviews[0].imageUrl}
            reviewerName={reviews[0].reviewerName}
            position={reviews[0].position}
            review={reviews[0].review}
            isBackdrop={false}
          />
          <div className="absolute  -bottom-[6rem] left-32 -z-10">
            <TestimonialCard 
            key={reviews[1].id}
            imageUrl={reviews[1].imageUrl}
            reviewerName={reviews[1].reviewerName}
            position={reviews[1].position}
            review={reviews[1].review}
            isBackDrop={true}
            />
          </div>
        </div>
        <div className="flex flex-col gap-16  ">
        <div className="hover:cursor-pointer">
            <img src="/images/chevron-up.png" alt="chevron up" />
          </div>
          <div className="hover:cursor-pointer">
            <img src="/images/chevron-down.png" alt="chevron up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
