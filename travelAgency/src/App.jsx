import React from "react";
import {
  BookNextTripSection,
  CategorySection,
  FooterSection,
  HeroSection,
  LogoGroupSections,
  Navbar,
  NewsLetterSections,
  TestimonialsSection,
  TopSellingSection,
} from "./components/sections";

const App = () => {
  return (
    <div className="lg:px-20 md:px-10 px-6 relative">
      <Navbar />
      <HeroSection />
      <div className="absolute top-0 right-0 -z-10 hidden lg:block">
        <img src="/images/blob-shape.png" alt="blob background shape" />
      </div>
      <div className="absolute top-0 left-0 -z-10">
        <img src="/images/top-left-gradient.png" alt="blob background shape" />
      </div>
      <div className="relative">
        <CategorySection />
        <div className="absolute top-0 right-0 hidden md:block">
          <img src="/images/plus-group.png" alt="blob background shape" />
        </div>{" "}
      </div>
      <TopSellingSection />
      <BookNextTripSection />
      <TestimonialsSection />
      <LogoGroupSections />
      <NewsLetterSections />
      <FooterSection />
    </div>
  );
};

export default App;
