import React from "react";
import AuthInput from "../authentication/AuthInput";
import { useFormik } from "formik";
import { AppointmentValues } from "../../init/app/AppointmentValues";
import { AppointmentSchema } from "../../schema/app/AppointmentSchema";

export default function Step2({ setStep, setPersonalDetail }) {
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
  } = useFormik({
    initialValues: AppointmentValues,
    validationSchema: AppointmentSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, actions) => {
      setPersonalDetail({
        name: values.name,
        email: values.email,
        note: values.note,
      });
      setStep((prev) => prev + 1)
    },
  });
  return (
    <div className="py-2">
      <h4 className="text-[18px] text-[#212121] font-[600] mb-2">
        Enter details
      </h4>
      <form
        className="flex flex-col gap-4 "
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <AuthInput
          text={"Name"}
          placeholder={"Mike Smith"}
          type={"text"}
          name={"name"}
          error={errors.name}
          handleBlur={handleBlur}
          handleChange={handleChange}
          touched={touched?.name}
          value={values.name}
        />
        <AuthInput
          text={"Email"}
          placeholder={"designer@dignitestudios.com"}
          type={"email"}
          name={"email"}
          error={errors.email}
          handleBlur={handleBlur}
          handleChange={handleChange}
          touched={touched?.email}
          value={values.email}
        />
        <div className="">
          <label className=" text-[16px] font-[700] text-black capitalize">
            Please share anything that will help prepare for our meeting.
            (Optional)
          </label>
          <textarea
            rows={5}
            name="note"
            onChange={handleChange}
            value={values.note}
            className={`w-full py-2 resize-none mt-2 outline-none border bg-white rounded-[4px] placeholder:text-[13px] placeholder:font-normal placeholder:text-[#6B737E] text-black bg-transparent h-full px-3 text-sm font-medium `}
            id=""
          ></textarea>
        </div>
        <div>
          <label className="ml-1 text-[16px] font-[700] text-black capitalize">
            Payment Information*
            <div className="px-3 py-2 rounded-[4px] border">
              <p className="font-[600] text-[13px] ">Price</p>
              <p className="font-[600] text-[13px] ">
                $300 <span className="text-[#ADADAD]"> USD</span>
              </p>
            </div>
          </label>
        </div>
        <div className="mt-6 w-full">
          <button
          type="submit"
            className="bg-gradient-to-r from-[#A82E75] to-[#3C043A] w-full text-white px-6 py-2 rounded-lg hover:bg-gray-800"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
