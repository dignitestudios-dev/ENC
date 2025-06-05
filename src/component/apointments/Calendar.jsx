import React, { useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomCalendar = ({
  startDate,
  setStartDate,
}) => {
  const modalRef = useRef(null);

 

  return (
    <div className="">
      <div
        ref={modalRef}
        className="w-full "
      >
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          inline
          calendarClassName=" md:p-5 pb-0 custom-calendar w-full"
          minDate={new Date()}
        />

      
      </div>
    </div>
  );
};

export default CustomCalendar;
