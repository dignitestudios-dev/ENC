import React, { useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import AuthInput from "../authentication/AuthInput";
import AuthSubmitBtn from "../authentication/AuthSubmitBtn";
import { FiTrash } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import { CiCalendar, CiCreditCard1 } from "react-icons/ci";
import PaymentForm from "./PaymentForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useValidateAppointment } from "../../hooks/api/Post";
import { PiSpinnerBold } from "react-icons/pi";
import { formatTimeRange, TotalDuration } from "../../lib/utils";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
export default function PaymentMethodModal({
  isPaymentMethod,
  setIsPaymentMethod,
  selectedTime,
  ClientSecret,
}) {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isPdf, setIsPdf] = useState(false);
  const stripePromise = loadStripe(import.meta.env.VITE_APP_STRIPE_KEY);
  const { loading, ValidAppointment } = useValidateAppointment();

  const appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: "#0ea5e9",
    },
  };

  const pdfRef = useRef(null);

  const downloadPDF = async () => {
    if (!pdfRef.current) return;

    setIsLoading(true);

    try {
      // Wait for custom fonts to load before capturing
      await document.fonts.ready;

      setIsPdf(true)
      const canvas = await html2canvas(pdfRef.current, {
        scale: 3, // higher scale = better quality
        useCORS: true,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const contentWidth = pdfWidth - 30; // with some margin
      const contentHeight = (canvas.height * contentWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 15, 15, contentWidth, contentHeight);
      pdf.save("Booking.pdf");
      setStep(1);
      setIsPaymentMethod(!isPaymentMethod);
    } catch (err) {
      console.error("Failed to generate PDF:", err);
    } finally {
      setIsPdf(false)
      setIsLoading(false);
    }
  };

  return (
    isPaymentMethod && (
      <div className="w-screen h-screen flex items-center justify-center bg-[rgba(0,0,0,0.4)] fixed top-0 left-0 right-0 bottom-0 z-30 px-4">
        <div className="bg-[#FFFFFF] backdrop-blur-[100px] w-[540px] pb-10 pt-4 rounded-[12px] ">
          <div className="flex items-center flex-col px-5 justify-center gap-y-2 h-full">
            <div className="flex w-full justify-end">
              <button
                onClick={() => {
                  setStep(1);
                  setIsPaymentMethod(!isPaymentMethod);
                }}
              >
                <IoMdClose />
              </button>
            </div>
            <div className="flex flex-col gap-y-2 items-center">
              <h3 className="text-[36px] font-[600] text-[#181818] capitalize">
                {step == 3 ? "" : "Payment Method"}
              </h3>
              <p className="font-[400] text-[16px] text-[#565656]">
                {step == 3 ? "" : " Please enter card details to continue"}
              </p>
            </div>

            {step == 1 && (
              <>
                <Elements stripe={stripePromise} options={appearance}>
                  <PaymentForm
                    clientSecret={ClientSecret?.clientSecret}
                    step={step}
                    setStep={setStep}
                  />
                </Elements>

                {/* <form
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
                </form> */}
              </>
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
                  onClick={async () => {
                    const res = await ValidAppointment(
                      `appointments/validate/${ClientSecret?.paymentIntentId}`
                    );
                    if (res.success) {
                      step < 3 && setStep((prev) => prev + 1);
                    }
                  }}
                  className="bg-gradient-to-r from-[#A82E75] to-[#3C043A]  flex items-center justify-center gap-2  text-white font-[500] h-[44px] w-full rounded-[4px] text-[16px]"
                >
                  Book Now{" "}
                  {loading && <PiSpinnerBold className="animate-spin" />}
                </button>
              </div>
            )}

            {step == 3 && (
              <div className="w-[90%]">
                <div ref={pdfRef} className="mb-4 rounded-[8px]">
                  <div className="flex flex-col gap-y-2 items-center">
                    <img
                      src={"/check_circle.png"}
                      className="w-20"
                      alt="status"
                    />
                    <p className="font-[400] text-center text-[16px] text-[#565656]">
                      {step === 3
                        ? "A calendar invitation has been sent to your email address."
                        : "Please enter card details to continue"}
                    </p>
                  </div>

                  <h3 className="text-[36px] text-center font-[600] text-[#181818] capitalize">
                    {step === 3 ? "You are scheduled" : "Payment Method"}
                  </h3>

                  <div className="border border-[#A82E75] mb-4 mt-6 rounded-[8px] py-4 px-4">
                    <h3 className="font-[700] text-[#3C043A] text-[18px]">Booking Detail</h3>
                    <ul className="mt-2 flex flex-col justify-center w-full">
                      <li className="flex items-center gap-3 text-[#3C043A] font-[700] text-[16px] ">
                        {/* <FaRegClock /> */}
                        <img
                          src="/time.png"
                          alt=""
                          className={`w-4 ${isPdf ? "mt-4" : ""}`}
                        />

                        <span>
                          {TotalDuration(
                            selectedTime?.startTime,
                            selectedTime?.endTime
                          )}
                        </span>
                      </li>

                      <li className="flex items-center gap-3 text-[#3C043A] font-[700] text-[16px] ">
                        {/* <CiCalendar /> */}
                        <img
                          src="/calendar.png"
                          alt=""
                          className={`w-4 ${isPdf ? "mt-4" : ""}`}
                        />
                        <span>
                          {new Date(selectedTime?.date).toDateString()}
                        </span>
                      </li>

                      <li className="flex items-center gap-3 text-[#3C043A] font-[700] text-[16px] ">
                        {/* <CiCreditCard1 /> */}
                        <img
                          src="/card-tick.png"
                          alt=""
                          className={`w-4 ${isPdf ? "mt-4" : ""}`}
                        />

                        <span className="font-mono">$300 USD</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <button
                  onClick={downloadPDF}
                  type="button"
                  className="bg-gradient-to-r from-[#A82E75] to-[#3C043A] flex items-center justify-center text-white font-[500] h-[44px] w-full rounded-[4px] text-[16px]"
                >
                  Download PDF{" "}
                  {isLoading && <PiSpinnerBold className="animate-spin ml-2" />}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
}
