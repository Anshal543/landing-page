import React from "react";

const CategoryCard = ({ iconUrl, title, description, highlighted }) => {
  return (
    <div
      className={`flex relative flex-col gap-4 items-center p-[2.5rem] ${
        highlighted ? "bg-white shadow-md rounded-[2.5rem]" : ""
      }`}
    >
      <div>
        <img src={iconUrl} alt="category card icon" className="h-[80px]" />
      </div>
      <p className="text-subtitle text-[1.2rem] font-[600]">{title}</p>
      <p className="text-lightGray text-[1rem] font-bold">{description}</p>
      {highlighted && (
        <div className="absolute -bottom-8 -left-10 -z-10">
          <img src="/images/rectangle-shape.png" alt="rectangle shape" />
        </div>
      )}
    </div>
  );
};

export default CategoryCard;
