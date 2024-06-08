import React from "react";
import CustomCarousel from "../CustomCarousel/CustomCarousel";
import CustomCards from "../CustomCards/CustomCards";
import About from "../About/About";

function Home() {
  return (
    <>
      <CustomCarousel />
      <About />
      <CustomCards />
    </>
  );
}

export default Home;
