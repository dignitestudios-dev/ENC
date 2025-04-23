import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import BookAppointmentModal from "../apointments/BookAppointmentModal";
import PaymentMethodModal from "../apointments/PaymentMethod";
const BookingBtn = () => {
  const [isAppointment, setIsAppointment] = useState(false);
  const [isPaymentMethod, setIsPaymentMethod] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [ClientSecret, setClientSecret] = useState({});
  const token = Cookies.get("token");
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
        {token && (
          <button
            onClick={() => {
              setIsAppointment(true);
            }}
            className="bg-[#000000] font-[500] text-white h-[44px] py-3 px-3 rounded-[4px] text-[16px]"
          >
            Book an Appointment
          </button>
        )}
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

export default BookingBtn;
