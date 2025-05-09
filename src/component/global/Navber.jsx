import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import LogOutModal from "../authentication/LogOutModal";
import BookAppointmentModal from "../apointments/BookAppointmentModal";
import PaymentMethodModal from "../apointments/PaymentMethod";
import Cookies from "js-cookie";
const Navber = () => {
  const [open, setOpen] = useState(false);
  const [logout, setIsLogout] = useState(false);
  const [profile, setIsProfile] = useState(false);
  const [isAppointment, setIsAppointment] = useState(false);
  const [isPaymentMethod, setIsPaymentMethod] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const token = Cookies.get("token");
  let user = Cookies.get("admin");
  let userName = Cookies.get("data");

  try {
    user = user ? JSON.parse(user) : null;
  } catch (e) {
    user = null;
    console.error("Failed to parse user cookie:", e);
  }

  const navigate = useNavigate("");

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
          {token && (
            <NavLink to={"/appointment"} className="text-base font-medium ">
              My Appointments
            </NavLink>
          )}
          <NavLink to={"/about"} className="text-base font-medium">
            About
          </NavLink>
          <NavLink to={"/contact"} className="text-base font-medium">
            Contact Us
          </NavLink>
          {!token && (
            <button
              onClick={() => {
                if (token) {
                  setIsAppointment(true);
                } else {
                  navigate("/login");
                }
              }}
              className="bg-[#000000]  font-[500] h-[44px] py-3 px-3 rounded-[4px] text-[16px]"
            >
              Book an Appointment
            </button>
          )}

          {token && (
            <div
              onClick={() => setIsProfile(!profile)}
              className="cursor-pointer"
            >
              <img
                src={user?.profilePicture ? user?.profilePicture : "/dr.jpg"}
                alt=""
                className="w-10 h-10 rounded-full"
              />
            </div>
          )}

          {profile && token && (
            <div className="bg-[#FFFFFF] shadow-lg  px-3 py-5 w-[206px] rounded-[13px] z-40 absolute top-24 right-14">
              <ul>
                <li className="border-b-[1px] border-[#0000001A] py-2 ">
                  <NavLink
                    to={"/profile"}
                    onClick={() => setIsProfile(false)}
                    state={{ user }}
                    className={"text-black font-[400] text-[16px]"}
                  >
                    View Profile
                  </NavLink>
                </li>
                <li className="border-b-[1px] border-[#0000001A] py-2 ">
                  <NavLink
                    to={"/setting"}
                    onClick={() => setIsProfile(false)}
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

            <div className="w-full relative flex flex-col items-start pt-10">
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
              {token && (
                <Link
                  to={"/appointment"}
                  className={`text-size    border-b w-full py-4 font-medium`}
                >
                  My Appointments
                </Link>
              )}

              <Link
                to={"/contact"}
                className={`text-size  border-b w-full py-4 font-medium`}
              >
                Contact
              </Link>
              {token && (
                <div
                  onClick={() => setIsProfile(!profile)}
                  className="flex items-center gap-2 cursor-pointer mt-8"
                >
                  <img
                    src={
                      user?.profilePicture ? user?.profilePicture : "/dr.jpg"
                    }
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <p>{userName}</p>
                </div>
              )}
              {profile && token && (
                <div className="bg-[#FFFFFF] shadow-lg  px-3 py-5 w-[206px] rounded-[13px] z-40 absolute -bottom-[170px] left-0">
                  <ul>
                    <li className="border-b-[1px] border-[#0000001A] py-2 ">
                      <NavLink
                        to={"/profile"}
                        state={{ user }}
                        onClick={() => setIsProfile(false)}
                        className={"text-black font-[400] text-[16px]"}
                      >
                        View Profile
                      </NavLink>
                    </li>
                    <li className="border-b-[1px] border-[#0000001A] py-2 ">
                      <NavLink
                        to={"/setting"}
                        onClick={() => setIsProfile(false)}
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
      <PaymentMethodModal
        selectedTime={selectedTime}
        isPaymentMethod={isPaymentMethod}
        setIsPaymentMethod={setIsPaymentMethod}
      />
    </div>
  );
};

export default Navber;
[];
