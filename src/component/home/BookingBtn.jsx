import React from "react";
import { NavLink } from "react-router-dom";

const BookingBtn = () => {
  return (
    <div className="">
      {/* <div className="w-full h-[30vh] lg:h-[20vh] bg-white"></div> */}
      <div className=" w-full  flex flex-col items-center justify-center px-6 lg:px-32 text-center gap-6 py-20 ">
        <p className="text-white font-medium pt-6">
          Ready to Connect?
          <br /> Click the button below to schedule your personalized
          appointment and experience the <br /> transformative power of
          one-on-one support.
        </p>
        <NavLink to={"/contact"}>
          <button className="w-72 all-colors text-white hover:bg-white  font-medium text-2xl rounded-lg py-3">
            Book An Appointment
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default BookingBtn;
