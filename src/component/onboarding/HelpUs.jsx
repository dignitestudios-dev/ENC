import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AppointmentStep3Values } from "../../init/app/AppointmentValues";
import { AppointmentStep3Schema } from "../../schema/app/AppointmentSchema";
import { useAppointment} from "../../hooks/api/Post";
import AuthSubmitBtn from "../authentication/AuthSubmitBtn";

export default function HelpUsComponent() {
    const navigate=useNavigate("");
    const {loading, postData } = useAppointment();

    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
        useFormik({
          initialValues: AppointmentStep3Values,
          validationSchema: AppointmentStep3Schema, // Using the schema here
          validateOnChange: true,
          validateOnBlur: true,
          onSubmit: async (values, actions) => {
            const payload = {
              reason: values.reason,
              accomodation: values.accomodation,
              attendedBefore: values.attendedBefore,             
            };
    
            const res = await  postData(
              "auth/personalize",
              false,
              null,
              payload
            );
            if (res.success) {
              navigate("/login");
            }
           
          },
        });
  return (
    <div className="py-2">
      <h4 className="text-4xl  text-[#212121] font-[600] ">
        Help Us Personalize Your Session
      </h4>
      <p className="text-[#181818B2] font-[400] mb-6 text-[12px]">
        Answer a few quick questions so we can better understand your needs.
      </p>
      <form className="flex flex-col gap-1 " onSubmit={handleSubmit}>
        <div className="mt-1">
          <p className="font-[500] text-[13px] text-[#181818]">
            1- What is the primary reason for your appointment?
          </p>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 mt-2 font-[400] text-[13px] text-[#181818]">
              <input
                type="radio"
                name="reason"
                value="Career Coaching & Professional Development"
                checked={
                  values.reason === "Career Coaching & Professional Development"
                }
                onChange={handleChange}
                onBlur={handleBlur}
              />
              Career Coaching & Professional Development
            </label>
            <label className="flex items-center gap-2 mt-2 font-[400] text-[13px] text-[#181818]">
              <input
                type="radio"
                name="reason"
                value="Disability Advocacy & Support"
                checked={values.reason === "Disability Advocacy & Support"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              Disability Advocacy & Support
            </label>
            <label className="flex items-center gap-2 mt-2 font-[400] text-[13px] text-[#181818]">
              <input
                type="radio"
                name="reason"
                value="Personal Growth & Mentorship"
                checked={values.reason === "Personal Growth & Mentorship"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              Personal Growth & Mentorship
            </label>
            <label className="flex items-center gap-2 mt-2 font-[400] text-[13px] text-[#181818]">
              <input
                type="radio"
                name="reason"
                value="Other"
                checked={values.reason === "Other"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              Other
            </label>
            {errors.reason && touched.reason && (
              <div className="text-red-500 text-xs mt-1">{errors.reason}</div>
            )}
          </div>
        </div>

        <div className="mt-1">
          <p className="font-[500] text-[13px] text-[#181818]">
            2- Do you require any special accommodations for this session?
          </p>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 mt-2 font-[400] text-[13px] text-[#181818]">
              <input
                type="checkbox"
                name="accomodation"
                value="Yes, I need closed captioning during the meeting."
                checked={values.accomodation.includes(
                  "Yes, I need closed captioning during the meeting."
                )}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              Yes, I need closed captioning during the meeting.
            </label>
            <label className="flex items-center gap-2 mt-2 font-[400] text-[13px] text-[#181818]">
              <input
                type="checkbox"
                name="accomodation"
                value="Yes, I require an accessible meeting format (e.g., text-based or voice-only)."
                checked={values.accomodation.includes(
                  "Yes, I require an accessible meeting format (e.g., text-based or voice-only)."
                )}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              Yes, I require an accessible meeting format (e.g., text-based or
              voice-only).
            </label>
            <label className="flex items-center gap-2 mt-2 font-[400] text-[13px] text-[#181818]">
              <input
                type="checkbox"
                name="accomodation"
                value="No special accommodations needed."
                checked={values.accomodation.includes(
                  "No special accommodations needed."
                )}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              No special accommodations needed.
            </label>
            {errors.accomodation && touched.accomodation && (
              <div className="text-red-500 text-xs mt-1">
                {errors.accomodation}
              </div>
            )}
          </div>
        </div>

        <div className="mt-1">
          <p className="font-[500] text-[13px] text-[#181818]">
            3- Have you attended an ENC session before?
          </p>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 mt-2 font-[400] text-[13px] text-[#181818]">
              <input
                type="radio"
                name="attendedBefore"
                value="Yes"
                checked={values.attendedBefore === "Yes"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              Yes
            </label>
            <label className="flex items-center gap-2 mt-2 font-[400] text-[13px] text-[#181818]">
              <input
                type="radio"
                name="attendedBefore"
                value="No, this is my first session"
                checked={
                  values.attendedBefore === "No, this is my first session"
                }
                onChange={handleChange}
                onBlur={handleBlur}
              />
              No, this is my first session
            </label>
            {errors.attendedBefore && touched.attendedBefore && (
              <div className="text-red-500 text-xs mt-1">
                {errors.attendedBefore}
              </div>
            )}
          </div>
        </div>

        <div className="mt-1">
          <p className="font-[500] text-[13px] text-[#181818]">
            4- What specific goals or topics would you like to discuss?
            (optional)
          </p>
          <textarea
            rows={3}
            className={`w-full py-2 resize-none mt-2 outline-none border bg-white rounded-[4px] placeholder:text-[13px] placeholder:font-normal placeholder:text-[#6B737E] text-black bg-transparent h-full px-3 text-sm font-medium ${
              errors.specificGoals && touched.specificGoals
                ? "border-red-500"
                : "border-[#D9D9D9]"
            }`}
            id="specificGoals"
            name="specificGoals"
            value={values.specificGoals}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your specific goals..."
          ></textarea>
          {errors.specificGoals && touched.specificGoals && (
            <div className="text-red-500 text-xs mt-1">
              {errors.specificGoals}
            </div>
          )}
        </div>

        <div className="mt-3 w-full">
          <AuthSubmitBtn text={"Submit"} loading={loading} />
        </div>
      </form>
    </div>
  );
}
