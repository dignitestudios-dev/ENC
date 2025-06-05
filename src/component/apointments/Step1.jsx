import { useRef, useState } from "react";
import CustomCalendar from "./Calendar";
import { useSlote } from "../../hooks/api/Get";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Ensure Navigation styles are imported
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { formatDate, formatTimeRange } from "../../lib/utils";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { PiSpinnerBold } from "react-icons/pi";

export default function Step1({ selectedTime, setSelectedTime, setStep }) {
  const [startDate, setStartDate] = useState(new Date());
  const swiperRef = useRef(null); // Create a reference for the swiper

  const { data, loading } = useSlote("appointments/slots", 1);

  return (
    <div>
      <div className="mt-3">
        <h4 className="text-[18px] text-[#212121] font-[600] mb-2">
          Select Date
        </h4>
        <CustomCalendar startDate={startDate} setStartDate={setStartDate} />
      </div>

      <div className="relative">
        <h4 className="text-md font-semibold mb-2">Select Time</h4>
        {loading && (
          <div className="flex justify-center items-center">
            <PiSpinnerBold className="animate-spin" />
          </div>
        )}
        <div className="w-full">
          <Swiper
            ref={swiperRef}
            slidesPerView={2}
            navigation={{
              prevEl: ".custom-prev", // Custom prev button
              nextEl: ".custom-next", // Custom next button
            }}
            modules={[ Navigation, Pagination]} // Include Pagination if you want pagination dots
            className="mySwiper  !z-40  !w-[250px] md:!w-[90%]"
           
          >
            {data?.map((time, index) => (
              <SwiperSlide key={index}>
                <button
                  onClick={() =>
                    setSelectedTime({
                      startTime: time?.startTime,
                      endTime: time?.endTime,
                      date: formatDate(startDate),
                    })
                  }
                  className={`p-2 font-[400] text-nowrap text-[14px] border rounded-lg ${
                    selectedTime?.startTime === time?.startTime
                      ? "bg-[#49274A0D] text-[#3C043A] border-[#A82E75]"
                      : "border-[#EAEAEA]"
                  }`}
                >
                  {formatTimeRange(time?.startTime, time?.endTime)}
                </button>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="navigation-buttons relative flex items-center justify-between top-[-30px] z-10 ">
            <button className="custom-prev">
              <MdKeyboardArrowLeft size={25} />
            </button>
            <button className="custom-next">
              <MdKeyboardArrowRight size={25} />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-2 w-full">
        <button
          onClick={() => setStep((prev) => prev + 1)}
          disabled={!startDate || !selectedTime} // Disable if either is missing
          className={`w-full px-6 py-2 rounded-lg ${
            !startDate || !selectedTime
              ? "bg-[#752d57] text-white cursor-not-allowed" // Disabled styles
              : "bg-gradient-to-r from-[#A82E75] to-[#3C043A] text-white hover:bg-[#af3f80]" // Enabled styles
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
