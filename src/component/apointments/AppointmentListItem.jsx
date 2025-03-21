import React from "react";

export default function AppointmentListItem() {
  return (
    <tr className="bg-white dark:bg-gray-800">
      <th
        scope="row"
        className="px-6 py-4 text-[14px] font-[400] text-[#000000] whitespace-nowrap"
      >
        1
      </th>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <div>
            <img src="/dr.jpg" className="w-8 h-8 rounded-full" alt="dr.jpg" />
          </div>
          <div>
            <h3 className="font-[400] text-[14px]">Mike Smith</h3>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-[14px] font-[400] text-[#000000] whitespace-nowrap">16-March-2025 </td>
      <td className="px-6 py-4 text-[14px] font-[400] text-[#000000] whitespace-nowrap">10:00 Am </td>
      <td className="px-6 py-4 text-[14px] font-[400] text-[#000000] whitespace-nowrap">1hrs </td>
      <td className="px-6 py-4 text-[14px] font-[400] text-[#000000] whitespace-nowrap">$300 </td>
    </tr>
  );
}
