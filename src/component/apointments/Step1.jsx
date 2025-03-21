import React, { useState } from "react";
import CustomCalendar from "./Calendar";

export default function Step1({selectedTime,setSelectedTime,setStep}) {
    const [startDate, setStartDate] = useState(new Date());
   
    
    const timeSlots = [
      "08:00 AM - 09:00 AM",
      "10:00 AM - 11:00 AM",
      "12:00 AM - 01:00 AM",
      "02:00 AM - 03:00 AM",
      "04:00 AM - 05:00 AM",
      "06:00 AM - 07:00 AM",
    ];
  
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
        <div className="grid grid-cols-2 gap-2">
          {timeSlots.map((time, index) => (
            <button
              key={index}
              onClick={() => setSelectedTime(
                {
                  time:time,
                  date:startDate
                })}
              className={`p-2 border rounded-lg ${
                selectedTime?.time == time
                  ? "bg-black text-white"
                  : "border-[#EAEAEA]"
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6 w-full">
        <button onClick={()=>setStep(prev=>prev+1)} className="bg-black w-full text-white px-6 py-2 rounded-lg hover:bg-gray-800">
          Next
        </button>
      </div>
    </div>
  );
}
