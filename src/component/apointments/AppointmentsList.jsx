import React from "react";
import AppointmentListItem from "./AppointmentListItem";
import { useAppointment } from "../../hooks/api/Get";
import { FaSpinner } from "react-icons/fa6";

export default function ApointmentsList() {
  const appointments = useAppointment("appointments", 1);
  console.log(appointments, "appointments");

  return (
    <div className="relative overflow-auto rounded-[8px] h-[400px] max-h-[100%] bg-[#FFFFFF] px-3 py-3 shadow-[6px_6px_54px_0px_rgba(0,0,0,0.03)]">
      {/* Show spinner if loading */}
      {appointments.loading ? (
        <div className="flex justify-center items-center h-full w-full absolute top-0 left-0 bg-white bg-opacity-50 z-10">
          <FaSpinner className="animate-spin " size={30} />
        </div>
      ) : (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs uppercase bg-gray-100">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-[14px] font-medium text-[#000000] whitespace-nowrap rounded-s-lg"
              >
                #
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-[14px] font-medium text-[#000000] whitespace-nowrap"
              >
                Booker
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-[14px] font-medium text-[#000000] whitespace-nowrap"
              >
                Booking Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-[14px] font-medium text-[#000000] whitespace-nowrap"
              >
                Booking Time
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-[14px] font-medium text-[#000000] whitespace-nowrap"
              >
                Total Duration
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-medium text-[#000000] rounded-e-lg"
              >
                Payment
              </th>
            </tr>
          </thead>
          <tbody>
            {appointments?.data?.map((item, i) => (
              <AppointmentListItem key={i} index={i} item={item} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
