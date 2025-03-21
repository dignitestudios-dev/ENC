import React from "react";
import AppointmentListItem from "./AppointmentListItem";

export default function ApointmentsList() {
  return (
    <div className="relative overflow-auto rounded-[8px] max-h-[100%] bg-[#FFFFFF] px-3 py-3 shadow-[6px_6px_54px_0px_rgba(0,0,0,0.03)]">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3 text-[14px] font-medium text-[#000000] whitespace-nowrap rounded-s-lg">
              #
            </th>
            <th scope="col" className="px-6 py-3 text-[14px] font-medium text-[#000000] whitespace-nowrap">
              Booker
            </th>
            <th scope="col" className="px-6 py-3 text-[14px] font-medium text-[#000000] whitespace-nowrap">
              Booking Date
            </th>
            <th scope="col" className="px-6 py-3 text-[14px] font-medium text-[#000000] whitespace-nowrap">
              Booking Time{" "}
            </th>
            <th scope="col" className="px-6 py-3 text-[14px] font-medium text-[#000000] whitespace-nowrap">
              Total Duration{" "}
            </th>
            <th scope="col" className="px-6 py-3 rounded-e-lg">
              Payment
            </th>
          </tr>
        </thead>
        <tbody>
          <AppointmentListItem />
          <AppointmentListItem />
        </tbody>
      </table>
    </div>
  );
}
