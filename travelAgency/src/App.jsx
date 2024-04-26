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
    <div className="lg:px-20 md:px-10 px-6">
      <Navbar />
      <HeroSection />
      <CategorySection />
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
