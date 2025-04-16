import React from "react";
import { ContactUsValues } from "../../init/app/ContactUsValues";
import { ContactUsSchema } from "../../schema/app/ContactSchema";
import { useAppointment, useFinanlizeAppointment } from "../../hooks/api/Post";
import AuthSubmitBtn from "../authentication/AuthSubmitBtn";
import AuthInput from "../authentication/AuthInput";
import { useFormik } from "formik";

export default function ContactUs() {
  const { loading, postData } = useAppointment();

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: ContactUsValues,
      validationSchema: ContactUsSchema, // Using the schema here
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, actions) => {
        const payload = {
          firstName: values.fname,
          lastName: values.lname,
          email: values.email,
          phone: values.phone.toString(),
          message: values.description,
        };
        const res = await postData("landing/contact", false, null, payload);       
        if (res.success) {
          // console.log("Message sent successfully.");
          actions.resetForm(); // ← Reset form here
        }
      },
    });

  return (
    <div className="bg-[#AFAFAF] relative flex gap-5 px-10 mt-40 py-10 h-[450px] ">
      <div className="flex flex-col w-full justify-between h-full">
        <div>
          <h3 className="font-[500] text-[32px] text-white">
            Have questions or need <br /> assistance?
          </h3>
          <p className="mt-2 font-[400] text-[14px] text-white">
            Contact our support team at <br /> enc@empowermentnetworkcircle.com
          </p>
        </div>
        <div>
          <h3 className="font-[500] text-[16px] text-white">LinkedIn</h3>
          <div className="flex items-center mt-3 gap-3">
            <img src="/linkedIn.png" className="w-8" alt="linkedIn" />
            <p className="font-[400] text-[14px] text-white">
              https://www.linkedin.com/in/rose-m-handon-phd?
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-[500] text-[16px] text-white">Business Phone</h3>
          <div className="flex items-center mt-3 gap-3">
            <img src="/calling.png" className="w-8" alt="linkedIn" />
            <p className="font-[400] text-[14px] text-white">(614) 560-6609</p>
          </div>
        </div>
      </div>
      <div className=" w-full ">
        <div className="bg-white absolute w-[560px] -top-10 px-3 py-5 shadow-[0px_20px_62px_0px_#00000024] rounded-[12px]">
          <h3 className="font-[700] text-[32px]">Get in Touch</h3>
          <p className="text-[20px] font-[400]">You can reach us anytime.</p>
          <form
            className="md:col-span-8 pt-5"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e);
            }}
          >
            <div className="flex flex-wrap -mx-3 ">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <AuthInput
                  holder={"Enter Your First Name"}
                  text={""}
                  type={"text"}
                  name={"fname"}
                  error={errors.fname}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  touched={touched?.fname}
                  value={values.fname}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <AuthInput
                  holder={"Enter Your Last Name"}
                  text={""}
                  type={"text"}
                  name={"lname"}
                  error={errors.lname}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  touched={touched?.lname}
                  value={values.lname}
                />
              </div>
            </div>
            <div className="flex flex-wrap mt-3 -mx-3 ">
              <div className="w-full px-3 mb-6 md:mb-0 ">
                <AuthInput
                  holder={"Enter Your Email"}
                  text={""}
                  type={"text"}
                  name={"email"}
                  error={errors.email}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  touched={touched?.email}
                  value={values.email}
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mt-3">
              <div className="w-full px-3 flex items-center  md:mb-0 ">
                <div className="bg-[#FFFFFF] flex items-center justify-center border h-[48px] rounded-[4px] rounded-r-none py-3 px-4 ">
                  <img src="/flag.png" className="w-10" alt="flag" />
                </div>
                <input
                  id="grid-phone"
                  type="number"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full h-[48px]  bg-transparent  outline-none border order rounded-[4px] rounded-l-none  text-[#262626] px-3 text-[16px] font-normal leading-[20.4px] ${
                    errors.phone && touched.phone
                      ? "border-red-500"
                      : "border-[#D9D9D9]"
                  } `}
                  placeholder="Phone Number"
                />
              </div>
              {errors.phone && touched.phone ? (
                <p className="text-red-700  mt-2 mx-3 text-sm font-medium">
                  {errors.phone}
                </p>
              ) : null}
            </div>
            <div className="flex flex-wrap mt-3 -mx-3 ">
              <div className="w-full px-3">
                <textarea
                  rows={6}
                  className={`w-full  bg-transparent py-2 outline-none border order border rounded-[4px]  text-[#262626] px-3 text-[16px] font-normal leading-[20.4px] ${
                    errors.description && touched.description
                      ? "border-red-500"
                      : "border-[#D9D9D9]"
                  } `}
                  // className="appearance-none resize-none block w-full bg-[#FFFFFF]  border-[#35353540] border rounded-[4px] py-3 px-4 mb-3 leading-tight  focus:bg-white focus:outline-[#62466B]"
                  defaultValue={""}
                  placeholder="How can we help?"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.description && touched.description ? (
                  <p className="text-red-700  mb-2 text-sm font-medium">
                    {errors.description}
                  </p>
                ) : null}
              </div>
              <div className="flex justify-between w-full mt-2 px-3">
                <AuthSubmitBtn text={"Send Message"} loading={loading} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
