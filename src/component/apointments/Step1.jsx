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

export default function Step1({ selectedTime, setSelectedTime, setStep }) {
  const [startDate, setStartDate] = useState(new Date());
  const swiperRef = useRef(null); // Create a reference for the swiper

  const timeSlots = useSlote("appointments/slots", 1);

  return (
    <div>
      <div className="mt-3">
        <h4 className="text-[18px] text-[#212121] font-[600] mb-2">
          Select Date
        </h4>
        <CustomCalendar startDate={startDate} setStartDate={setStartDate} />
      </div>

      {/* {/ Time Slot Selection /} */}
      <div>
        <h4 className="text-md font-semibold mb-2">Select Time</h4>
        <div className="">
          <Swiper
            ref={swiperRef} // Attach the ref to Swiper
            slidesPerView={2}
            navigation={{
              prevEl: ".custom-prev", // Custom prev button
              nextEl: ".custom-next", // Custom next button
            }}
            modules={[FreeMode, Navigation, Pagination]} // Include Pagination if you want pagination dots
            className="mySwiper !z-40 !w-[90%]"
          >
            {timeSlots?.data?.map((time, index) => (
              <SwiperSlide key={index}>
                <button
                  onClick={() =>
                    setSelectedTime({
                      startTime: time?.startTime,
                      endTime: time?.endTime,
                      date: formatDate(startDate),
                    })
                  }
                  className={`p-2 font-[400] text-[14px] border rounded-lg ${
                    selectedTime?.startTime === time?.startTime
                      ? "bg-black text-white"
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
      <div className="mt-6 w-full">
        <button
          onClick={() => setStep((prev) => prev + 1)}
          disabled={!startDate || !selectedTime} // Disable if either is missing
          className={`w-full px-6 py-2 rounded-lg ${
            !startDate || !selectedTime
              ? "bg-gray-400 text-white cursor-not-allowed" // Disabled styles
              : "bg-black text-white hover:bg-gray-800" // Enabled styles
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
