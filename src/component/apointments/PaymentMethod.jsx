import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import AuthInput from "../authentication/AuthInput";
import AuthSubmitBtn from "../authentication/AuthSubmitBtn";
import { FiTrash } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import { CiCalendar, CiCreditCard1 } from "react-icons/ci";

export default function PaymentMethodModal({
  isPaymentMethod,
  setIsPaymentMethod,
  selectedTime
}) {
  const [step, setStep] = useState(1);

  return (
    isPaymentMethod && (
      <div className="w-screen h-screen flex items-center justify-center bg-[rgba(0,0,0,0.4)] fixed top-0 left-0 right-0 bottom-0 z-30 px-4">
        <div className="bg-[#FFFFFF] backdrop-blur-[100px] w-[540px] pb-10 pt-4 rounded-[12px] ">
          <div className="flex items-center flex-col px-5 justify-center gap-y-2 h-full">
            <div className="flex w-full justify-end">
              <button onClick={() => setIsPaymentMethod(!isPaymentMethod)}>
                <IoMdClose />
              </button>
            </div>
            <div className="flex flex-col gap-y-2 items-center">
              {step == 3 && (
                <img src={"/check_circle.png"} className="w-20" alt="" />
              )}
              <h3 className="text-[36px] font-[600] text-[#181818] capitalize">
                {step == 3 ? "You are scheduled" : "Payment Method"}
              </h3>
              <p className="font-[400] text-[16px] text-[#565656]">
                {step == 3
                  ? "A calendar invitation has been sent to your email address."
                  : " Please enter card details to continue"}
              </p>
            </div>

            {step == 1 && (
              <form
                className="mt-3 flex flex-col gap-y-4 w-[80%] mx-auto"
                onSubmit={(e) => {
                  e.preventDefault();
                  step < 3 && setStep((prev) => prev + 1);
                }}
              >
                <AuthInput placeholder={"Card holder Name"} type={"text"} />
                <AuthInput placeholder={"Card Number"} type={"text"} />
                <div className="grid grid-cols-2 gap-2">
                  <AuthInput placeholder={"Expiry"} type={"text"} />
                  <AuthInput placeholder={"CVC"} type={"text"} />
                </div>
                <button className="bg-[#000000]  text-white font-[500] h-[44px] w-full rounded-[4px] text-[16px]">
                  Next
                </button>
              </form>
            )}

            {step == 2 && (
              <div className="w-[90%] mt-3">
                <div>
                  <label
                    htmlFor=""
                    className="capitalize font-[500] text-[14px]"
                  >
                    attached Stripe
                  </label>
                  <div className="flex justify-between gap-2 mt-2 rounded-[2px] bg-[#F3F3F3] h-[45px] px-3 w-full items-center">
                    <div className="flex items-center gap-3 ">
                      <p>**** **** **** **72</p>
                      <img src="/Stripe.png" className="w-10" alt="Stripe" />
                    </div>
                    <div>
                      <button>
                        <FiTrash />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="rounded-[2px]  mt-4 mb-4 px-3 py-3 bg-[#F3F3F3] ">
                  <p className="capitalize py-2 border-b w-full font-[500] text-[14px]">
                    Payment Summary
                  </p>
                  <div className="mt-2 w-full">
                    <div className="flex justify-between w-full">
                      <p className="text-[#18181880] font-[500] text-[14px]">
                        Subtotal
                      </p>
                      <p className="text-[#18181880] font-[500] text-[14px]">
                        $300
                      </p>
                    </div>
                    <div className="flex justify-between mt-3 w-full">
                      <p className="text-[#181818] font-[500] text-[14px]">
                        Total
                      </p>
                      <p className="text-[#181818] font-[500] text-[14px]">
                        $300
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  onClick={() => {
                    step < 3 && setStep((prev) => prev + 1);
                  }}
                  className="bg-[#000000]  text-white font-[500] h-[44px] w-full rounded-[4px] text-[16px]"
                >
                  Book Now
                </button>
              </div>
            )}

            {step == 3 && (
              <div className="w-[90%]">
                <div className="border border-[#0000001A]  mb-4  mt-3 rounded-[8px] py-4 px-4">
                  <h3 className="font-[700] text-[18px] ">Booking Detail</h3>
                  <ul className="mt-2 flex flex-col gap-2">
                    <li className="flex items-center gap-2 text-[#1A1A1A99] font-[700] text-[16px]">
                      <FaRegClock /> 1hr{" "}
                    </li>
                    <li className="flex items-center gap-2 text-[#1A1A1A99] font-[700] text-[16px]">
                      <CiCalendar /> {selectedTime?.time + " " + new Date(selectedTime?.date).toDateString()}
                    </li>
                    <li className="flex items-center gap-2 text-[#1A1A1A99] font-[700] text-[16px]">
                      <CiCreditCard1 /> $300 USD{" "}
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => {
                    setIsPaymentMethod(false)
                  }}
                  type="submit"
                  className="bg-[#000000]  text-white font-[500] h-[44px] w-full rounded-[4px] text-[16px]"
                >
                  Download PDF
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
}
