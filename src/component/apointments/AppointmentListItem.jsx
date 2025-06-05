import React from "react";
import { formatDate, formatTime, TotalDuration } from "../../lib/utils";

export default function AppointmentListItem({ item, index }) {
  return (
    <tr className="bg-white">
      <th
        scope="row"
        className="px-6 py-4 text-[14px] font-[400] text-[#000000] whitespace-nowrap"
      >
        {index + 1}
      </th>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <div>
            <img
              src={
                item?.user?.profilePicture
                  ? item?.user?.profilePicture
                  : "/dr.jpg"
              }
              className="md:w-8 md:h-8 rounded-full"
              alt="dr.jpg"
            />
          </div>
          <div>
            <h3 className="font-[400] text-black text-[14px]">{item?.user?.name}</h3>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-[14px] font-[400] text-[#000000] whitespace-nowrap">
        {formatDate(new Date(item?.date))}
      </td>
      <td className="px-6 py-4 text-[14px] font-[400] text-[#000000] whitespace-nowrap">
        {formatTime(item?.startTime)}{" "}
      </td>
      <td className="px-6 py-4 text-[14px] font-[400] text-[#000000] whitespace-nowrap">
        {TotalDuration(item?.startTime, item?.endTime)}
      </td>

      <td className="px-6 py-4 text-[14px] font-[400] text-[#000000] whitespace-nowrap">
        ${item?.fee}
      </td>
    </tr>
  );
}
