import React from "react";
import { NavLink } from "react-router-dom";

const Donate = () => {
  return (
    <div className="py-10">
      <div className="w-full flex items-center justify-center   ">
        <div className="w-[90%] lg:w-[60%]  flex flex-col  py-10 px-5 all-colors   ">
          <div className="text-center py-8 lg:space-y-5  text-white">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Help Make A Difference Today!
            </h2>
            <p className="text-[20px] ">
              Your generous contributions help us continue our mission to
              provide support and resources to individuals with disabilities.
              Every donation makes a significant imapact in fostering a more
              inclusive community.
            </p>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-3">
            <h2 className="text-2xl font-bold text-nowrap bg-white text_color text-black px-6 py-[7px] rounded-lg">
              PayPal :
            </h2>
            <NavLink
              target="_blank"
              to={
                "https://www.helpguide.org/wellness/health-conditions/living-well-with-a-disability"
              }
            >
              <button className="w-full text-nowrap px-6 text_color bg-white text-black font-semibold text-base lg:text-lg rounded-lg py-2 transition-all duration-300">
                Donate Now
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
