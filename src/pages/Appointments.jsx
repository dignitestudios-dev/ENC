import { FaArrowLeft } from "react-icons/fa6";
import ApointmentsList from "../component/apointments/AppointmentsList";
import { useNavigate } from "react-router-dom";

export default function Appointments() {
    const navigate=useNavigate("");
  return (
    <div className="px-24 py-20 h-screen ">
      <div className="flex justify-between">
        <div onClick={()=>navigate(-1)} className="cursor-pointer flex items-center gap-4">
          <FaArrowLeft />
          <h3 className="font-[600] text-[32px]">My Appointments</h3>
        </div>        
      </div>
      <div className="bg-[#E3E3E3] h-[500px] px-5 py-5 mt-5">
        <ApointmentsList />
      </div>
     
    </div>
  );
}
