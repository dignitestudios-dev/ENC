import React from "react";
import AboutHero from "../component/about/AboutHero";
import Gallery from "../component/about/Gallery";
import Detail from "../component/about/Detail";

const AboutUs = () => {
  return (
    <div className="bg-body-contact bg-white ">
      <AboutHero />
      <Detail />
      <Gallery />
    </div>
  );
};

export default AboutUs;
