import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import LogOutModal from "../authentication/LogOutModal";
import BookAppointmentModal from "../apointments/BookAppointmentModal";
import PaymentMethodModal from "../apointments/PaymentMethod";

const Navber = () => {
  const [open, setOpen] = useState(false);
  const [logout, setIsLogout] = useState(false);
  const [profile, setIsProfile] = useState(false);
  const [isAppointment, setIsAppointment] = useState(false);
  const [isPaymentMethod, setIsPaymentMethod] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const handlenav = () => {
    setOpen(!open);
  };
  return (
    <div className="">
      <div className="w-full relative lg:flex items-center justify-between px-6 lg:px-24 py-3 hidden all-colors text-white ">
        <div className="">
          <NavLink to={"/"} className="text-lg font-medium">
            <img src="/enclogo1.1.png" alt="" className="w-16" />
          </NavLink>
        </div>
        <div className="flex items-center gap-10 ">
          <NavLink to={"/"} className="text-base font-medium ">
            Home{" "}
          </NavLink>
          <NavLink to={"/appointment"} className="text-base font-medium ">
            My Appointments
          </NavLink>
          <NavLink to={"/about"} className="text-base font-medium">
            About
          </NavLink>
          <NavLink to={"/contact"} className="text-base font-medium">
            Contact Us
          </NavLink>
          <button onClick={()=>setIsAppointment(true)} className="bg-[#000000] font-[500] h-[44px] py-3 px-3 rounded-[4px] text-[16px]">
            Book an Appointment
          </button>
          <div
            onClick={() => setIsProfile(!profile)}
            className="cursor-pointer"
          >
            <img src="/dr.jpg" alt="" className="w-10 h-10 rounded-full" />
          </div>
          {profile && (
            <div className="bg-[#FFFFFF] shadow-lg  px-3 py-5 w-[206px] rounded-[13px] z-40 absolute top-24 right-14">
              <ul>
                <li className="border-b-[1px] border-[#0000001A] py-2 ">
                  <NavLink
                    to={"/profile"}
                    className={"text-black font-[400] text-[16px]"}
                  >
                    View Profile
                  </NavLink>
                </li>
                <li className="border-b-[1px] border-[#0000001A] py-2 ">
                  <NavLink
                    to={"/setting"}
                    className={"text-black font-[400] text-[16px]"}
                  >
                    Settings
                  </NavLink>
                </li>
                <li className="border-[#0000001A] pt-2">
                  <NavLink
                    to={""}
                    onClick={() => {
                      setIsLogout(!logout);
                    }}
                    className={"text-black font-[400] text-[16px]"}
                  >
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="w-full flex items-center justify-between px-8 py-2 lg:hidden all-colors">
        <div>
          <NavLink to={"/"} className="text-lg font-medium">
            <img src="/enclogo1.1.png" alt="" className="w-12" />
          </NavLink>
        </div>

        <GiHamburgerMenu className="lg:hidden text-white" onClick={handlenav} />
      </div>
      {open && (
        <div
          className={` w-full h-screen bg-transparent   absolute inset-0 z-50  ${
            open ? "translate-x-0  " : "translate-x-full  "
          } `}
        >
          <div className={`h-full w-[70%] float-end p-4 all-colors text-white`}>
            <div className="w-full flex items-center justify-between">
              <button
                className={`border-2 border-[#49274a] px-2 py-1`}
                onClick={handlenav}
              >
                <IoClose className="text-xl" />
              </button>
            </div>

            <div className="w-full flex flex-col items-start pt-10">
              <Link
                to={"/"}
                className={`text-size border-b w-full py-4 font-medium`}
              >
                Home
              </Link>
              <Link
                to={"/about"}
                className={`text-size    border-b w-full py-4 font-medium`}
              >
                About Us
              </Link>
              <Link
                to={"/contact"}
                className={`text-size  border-b w-full py-4 font-medium`}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
      <LogOutModal setLogOutModal={setIsLogout} logOutModal={logout} />
      <BookAppointmentModal
        isAppointment={isAppointment}
        setIsAppointment={setIsAppointment}
        setIsPaymentMethod={setIsPaymentMethod}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />
      <PaymentMethodModal selectedTime={selectedTime} isPaymentMethod={isPaymentMethod} setIsPaymentMethod={setIsPaymentMethod}  />
    </div>
  );
};

export default Navber;
[];
