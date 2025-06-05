import React, { useState } from "react";
import Navber from "../global/Navber";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import BookAppointmentModal from "../apointments/BookAppointmentModal";
import PaymentMethodModal from "../apointments/PaymentMethod";
const Hero = () => {
  const navigate = useNavigate("");
  const [isAppointment, setIsAppointment] = useState(false);
  const [isPaymentMethod, setIsPaymentMethod] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [ClientSecret, setClientSecret] = useState({});
  const token = Cookies.get("token");
  return (
    <div className="   ">
      <div className="w-full  bg-banner flex flex-col   relative ">
        <div className="w-full  flex flex-col pt-40 lg:pt-20   gap-5">
          <h2 className="font-extrabold text-4xl md:text-5xl lg:text-7xl text-white text-center">
            Empowering Abilities,
            <br /> Enriching Lives
          </h2>
          <p className="text-white font-medium text-base lg:text-xl text-center">
            Welcome to the Empowerment Network Circle (ENC), a safe space where{" "}
            <br />
            individuals with disabilities are seen, heard, and supported.
          </p>
          <div className="flex items-center gap-6 justify-center text-white ">
            {!token ? (
              <>
                <button
                  onClick={() => navigate("/signup")}
                  className="bg-gradient-to-l from-[#A82E75] to-[#3C043A] font-[500] h-[44px] w-[120px] rounded-[4px] text-[16px]"
                >
                  Sign up
                </button>
                <button
                  onClick={() => navigate("/login")}
                  className="bg-gradient-to-l from-[#A82E75] to-[#3C043A] font-[500] h-[44px] w-[120px] rounded-[4px] text-[16px]"
                >
                  Login
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  setIsAppointment(true);
                }}
                className="bg-gradient-to-l from-[#A82E75] to-[#3C043A] font-[500] h-[44px] py-3 px-3 rounded-[4px] text-[16px]"
              >
                Book an Appointment
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-cols  justify-center items-center mt-4 px-2 lg:px-32 lg:gap-x-12 ">
          <img
            src="/istockphoto-1141509310-612x612.jpg"
            alt=""
            className="h-[160px] w-[260px] lg:h-[300px] lg:w-[320px] object-cover border_gradient lg:block hidden"
          />
          <div className="text-center text-white lg:space-y-5 lg:pt-20">
            <h2 className="text-3xl lg:text-5xl font-bold">Our Mission</h2>
            <p className="text-base lg:text-[20px] ">
              At Empowerment Network Circle (ENC), we believe in the
              transformative power of perseverance, community, and opportunity.
              Our mission is to empower individuals with disabilities,
              marginalized communities, and professionals striving to break
              barriers in their personal and professional lives. ENC stands as a
              beacon of hope, advocacy, and empowerment.
            </p>
          </div>
        </div>
      </div>
      <BookAppointmentModal
        isAppointment={isAppointment}
        setIsAppointment={setIsAppointment}
        setIsPaymentMethod={setIsPaymentMethod}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        setClientSecret={setClientSecret}
      />
      <PaymentMethodModal
        selectedTime={selectedTime}
        isPaymentMethod={isPaymentMethod}
        setIsPaymentMethod={setIsPaymentMethod}
        ClientSecret={ClientSecret}
      />
    </div>
  );
};

export default Hero;
