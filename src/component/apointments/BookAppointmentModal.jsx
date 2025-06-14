import { IoMdClose } from "react-icons/io";
import Step1 from "./Step1";
import { useState } from "react";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { FaRegClock } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { formatTimeRange } from "../../lib/utils";

export default function BookAppointmentModal({
  isAppointment,
  setIsAppointment,
  setIsPaymentMethod,
  setSelectedTime,
  selectedTime,
  setClientSecret,
}) {
  const [step, setStep] = useState(1);
  const [personalDetail, setPersonalDetail] = useState({});
  const [SessionDetail, setSessionDetail] = useState({});
  console.log(selectedTime, "time");
  return (
    isAppointment && (
      <div className="w-screen h-screen flex items-center justify-center bg-[rgba(0,0,0,0.4)] fixed top-0 left-0 right-0 bottom-0 z-30 px-4">
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 px-4">
          <div className="bg-white overflow-auto h-[600px] md:h-auto p-6 md:p-5 rounded-lg shadow-lg max-w-4xl w-full mx-4 relative">
            {/* {/ Close Button /} */}
            <div className="flex border-b-[1px] items-center justify-between">
              <div>
                <h2 className="text-lg md:text-xl font-semibold mb-2 text-[#A82E75]">
                  Book Appointment
                </h2>
              </div>
              <div>
                <button
                  onClick={() => {
                    setStep(1)
                    setIsAppointment(false)
                  }}
                  className=" text-black hover:text-gray-600"
                >
                  <IoMdClose className="text-2xl" />
                </button>
              </div>
            </div>

            <div
              className={`grid ${
                step != 3 ? "md:grid-cols-2" : "md:grid-cols-1"
              }  gap-6`}
            >
              {/* {/ Calendar Section /} */}
              {step != 3 && (
                <div className="border-r-[1px] px-5">
                  <p className="text-[#49274A] text-[18px] font-[300] mb-4  mt-4">
                    Welcome to my scheduling page. Please follow the
                    instructions to add an event to my calendar.
                  </p>

                  {/* {/ Doctor Information /} */}
                  <div className="flex flex-col justify-center  gap-2 md:mt-20">
                    <div className="w-12 h-12 bg-gray-300 rounded-full">
                      <img src="/rose-handon.png" alt="rose-handon" className="w-full h-full rounded-full" />
                    </div>
                    <div>
                      <p className="text-[15px] font-[700] text-[#1A1A1A99]   ">
                        Rose Handon
                      </p>
                      <h3 className="text-[27px] font-[700] text-[#A82E75]">
                        Dr Rose Handon
                      </h3>
                      <ul className="mt-2 flex flex-col gap-2">
                        <li className="flex items-center gap-2 text-[#3C043A] font-[700] text-[16px]">
                          <FaRegClock color="#A82E75" /> 1hr{" "}
                        </li>
                        {selectedTime && step > 1 && (
                          <li className="flex items-center gap-2 text-[#3C043A] font-[700] text-[16px]">
                            <CiCalendar color="#A82E75" />{" "}
                            {formatTimeRange(
                              selectedTime?.startTime,
                              selectedTime?.endTime
                            ) +
                              " " +
                              new Date(selectedTime?.date).toDateString()}
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              {step == 1 && (
                <Step1
                  step={step}
                  setStep={setStep}
                  setSelectedTime={setSelectedTime}
                  selectedTime={selectedTime}
                />
              )}
              {step == 2 && (
                <Step2
                  step={step}
                  setStep={setStep}
                  setSelectedTime={setSelectedTime}
                  selectedTime={selectedTime}
                  setPersonalDetail={setPersonalDetail}
                />
              )}
              {step == 3 && (
                <Step3
                  step={step}
                  setStep={setStep}
                  setSelectedTime={setSelectedTime}
                  selectedTime={selectedTime}
                  setIsPaymentMethod={setIsPaymentMethod}
                  setIsAppointment={setIsAppointment}
                  personalDetail={personalDetail}
                  setClientSecret={setClientSecret}
                />
              )}
            </div>

            {/* {/ Submit Button /} */}
          </div>
        </div>
      </div>
    )
  );
}
