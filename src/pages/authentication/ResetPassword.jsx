import { useState } from "react";
import AuthInput from "../../component/authentication/AuthInput";
import AuthSubmitBtn from "../../component/authentication/AuthSubmitBtn";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router";
import PasswordUpdateModal from "../../component/authentication/PasswordUpdateModal";
import { useFormik } from "formik";
import { ChangedValues } from "../../init/authentication/AuthValues";
import { ChangedSchema } from "../../schema/authentication/AuthSchema";
import { useResetPassword } from "../../hooks/api/Post";
import { processError } from "../../lib/utils";
import { IoMdArrowBack } from "react-icons/io";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [PasswordUpdate, setPasswordUpdate] = useState(false);
  const { loading, postData } = useResetPassword();
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: ChangedValues,
      validationSchema: ChangedSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        const data = {
          password: values?.password,
        };

        try {
          const res = await postData(
            "auth/updatePassword",
            false,
            null,
            data,
            ""
          );
          if (res?.success) {
            setPasswordUpdate(true);
          } else {
            processError("Failed to update password. Please try again.");
          }
        } catch (error) {
          console.error("Error while updating password", error);
          processError("An error occurred while updating password.");
        }
      },
    });

  return (
    <div className="flex w-full h-screen overflow-hidden">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
        className="w-full  h-full bg-white px-4 py-4 lg:p-20 z-10 flex flex-col overflow-y-auto justify-center items-center gap-8"
      >
        <div className="lg:w-[450px]">
          <button
            onClick={() => navigate(-1)}
            type="button"
            className="w-full flex justify-start items-start flex-col"
          >
            <IoMdArrowBack size={25} className="text-[#A82E75]" />
          </button>

          <div className="w-full flex justify-center mb-10 items-center flex-col">
            <h1 className="text-[36px] font-bold capitalize text-black leading-[64.8px] tracking-[-1.2px]">
              create new password
            </h1>
            <p className="text-[#868686]">Enter new password to reset.</p>
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start mb-10 gap-4">
            <AuthInput
              text={"New Password"}
              placeholder={"Enter Password"}
              type={"password"}
              name={"password"}
              error={errors.password}
              handleBlur={handleBlur}
              handleChange={handleChange}
              touched={touched?.password}
              value={values.password}
            />
            <AuthInput
              text={"Confirm Password"}
              placeholder={"Enter Password"}
              type={"password"}
              name={"confirmpassword"}
              error={errors.confirmpassword}
              handleBlur={handleBlur}
              handleChange={handleChange}
              touched={touched?.confirmpassword}
              value={values.confirmpassword}
            />
          </div>

          <AuthSubmitBtn text={"Update "} loading={loading} />
        </div>
      </form>

      <div className="hidden w-full lg:flex flex-col justify-center items-center h-full relative">
        <div className="relative flex justify-center items-center w-full h-full mb-28">
          <img
            src={"/loginBg.png"}
            alt="login_mockup"
            className="relative w-[100%] object-cover h-full "
          />
        </div>
      </div>
      <PasswordUpdateModal
        PasswordUpdate={PasswordUpdate}
        setPasswordUpdate={setPasswordUpdate}
      />
    </div>
  );
};

export default ResetPassword;
