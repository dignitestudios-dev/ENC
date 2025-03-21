import React from "react";
import ContactHero from "../component/contact/ContactHero";
import Poop from "../component/contact/Poop";
import Article from "../component/contact/Article";
import ContactUs from "../component/contact/ContactUs";

const Contact = () => {
  return (
    <div className="w-full h-full bg-body-contact">
      {/* <Poop /> */}
      <div className="flex items-center justify-center py-12">
        <div className=" py-10 flex items-center justify-center w-[80%] lg:w-[40%] all-colors  shadow">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white">
            Contact Us
          </h2>
        </div>
      </div>
      <ContactUs />
      <ContactHero />
      <Article />
    </div>
  );
};

export default Contact;
