import React from "react";
import CategoryCard from "../cards/CategoryCard";

const CategorySection = () => {
  const features = [
    {
      id: 0,
      iconUrl: "/images/antina.png",
      title: "Calculated Weather",
      description:
        "Built Wicket longer admire do barton vanity itself do in it.",
      highlighted: false,
    },
    {
      id: 1,
      iconUrl: "/images/plane.png",
      title: "Best Flights",
      description:
        "Engrossed listening. Park gate sell they west hard for the.",
      highlighted: true,
    },
    {
      id: 2,
      iconUrl: "/images/speaker.png",
      title: "Local Events",
      description:
        "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
      highlighted: false,
    },
    {
      id: 3,
      iconUrl: "/images/cog.png",
      title: "Customization",
      description:
        "We deliver outsourced aviation services for military customers",
      highlighted: false,
    },
  ];
  return (
    <div className="mt-20 ">
      <p className="uppercase text-center text-lightGray font-volkhov font-bold text-[0.75rem]">
        category
      </p>
      <p className="text-center text-title font-bold font-volkhov text-[2.5rem] mt-2">
        We Offer Best Services
      </p>
      <div className="flex flex-col md:flex-row gap-4 mt-16">
        {features.map((feature) => (
          <CategoryCard
            key={feature.id}
            feature={feature}
            iconUrl={feature.iconUrl}
            title={feature.title}
            description={feature.description}
            highlighted={feature.highlighted}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
