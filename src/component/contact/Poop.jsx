import React from "react";
import { InlineWidget, PopupWidget } from "react-calendly";

const Poop = () => {
  return (
    <div className="  ">
      <div className="w-[100%] ] ">
        <div className="flex items-center justify-center py-12">
          <div className=" py-10 flex items-center justify-center w-[80%] lg:w-[40%] all-colors  shadow">
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white">
              Contact Us
            </h2>
          </div>
        </div>
        <InlineWidget url="https://calendly.com/enc-empowermentnetworkcircle" />
      </div>
    </div>
  );
};

export default Poop;
