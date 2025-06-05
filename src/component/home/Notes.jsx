import React from "react";
import Services from "./Services";

const Notes = () => {
  return (
    <div className="w-full flex flex-col items-center pt-5 md:px-2 lg:pt-28 md:h-[70vh] all-colors relative">
      <h2 className="text-4xl xl:text-6xl font-bold text-center leading-[50px] text-white">
        Helping Our Disabled Population <br /> Grow And Thrive
      </h2>
      <p></p>
      <div className="w-full  mt-0 md:mt-0">
        <Services />
      </div>
    </div>
  );
};

export default Notes;
