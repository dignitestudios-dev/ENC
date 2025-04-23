import AuthInput from "../../component/authentication/AuthInput";
import AuthSubmitBtn from "../../component/authentication/AuthSubmitBtn";
import { useNavigate } from "react-router";
import { IoMdArrowBack } from "react-icons/io";
import { useFormik } from "formik";
import { useSignup } from "../../hooks/api/Post";
import { signUpValues } from "../../init/authentication/AuthValues";
import { signUpSchema } from "../../schema/authentication/AuthSchema";
import { processSignup } from "../../lib/utils";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);

  const { loading, postData } = useSignup();
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    errors,
    touched,
  } = useFormik({
    initialValues: signUpValues,
    validationSchema: signUpSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, actions) => {
      // console.log(values, "data");
      const form = new FormData();
      form.append("name", values.fullName);
      form.append("email", values.email);
      form.append("password", values.password);
      form.append("profilePicture", values.profilePicture);
      form.append("role", "user");
      postData("auth/signUp", false, null, form, processSignup);
    },
  });

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file)); // Set preview URL
      setFieldValue("profilePicture", file); // Store file in Formik state
    }
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex flex-col justify-center  h-full items-center ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
          className="bg-white w-full px-10 lg:px-0 lg:w-[400px] flex mt-5 flex-col justify-start items-center gap-8"
        >
          <div className="flex w-full items-center ">
            <div onClick={() => navigate(-1)} className="cursor-pointer">
              <IoMdArrowBack size={25} />
            </div>
            <div className="w-full text-center">
              <h1 className=" text-4xl font-bold text-black capitalize">
                sign up
              </h1>
              <span className="text-[14px] text-[#868686]  -mt-3">
                Please enter your details to create an account.
              </span>
            </div>
          </div>
          <div className="flex flex-col w-full h-auto justify-start items-start gap-4">
            <div className="w-full flex cursor-pointer items-center gap-2  mt-3">
              <label
                htmlFor="profilePicture"
                className="flex items-center gap-2"
              >
                <img
                  src={preview?preview:"/upload.png"}
                  alt="upload photo"
                  className="w-[80px]"
                />

                <p className="w-full text-[#181818] font-medium underline text-[14px] leading-[100%]">
                  Upload Profile Picture
                </p>
              </label>
              <div>
                <input
                  type="file"
                  id="profilePicture"
                  name="profilePicture"
                  value={""}
                  onChange={handleFileChange}
                  className=" bg-transparent hidden rounded-full placeholder:text-[#FFFFFF] outline-none text-white  px-3 text-[14px] font-normal leading-[20.4px]"
                  placeholder="Enter Title"
                />
              </div>
            </div>
            {errors.profilePicture && touched.profilePicture ? (
              <p className="text-red-700 text-sm font-medium">
                {errors.profilePicture}
              </p>
            ) : null}
            <AuthInput
              name={"fullName"}
              text={"Full Name"}
              placeholder={"Enter full name"}
              type={"text"}
              error={errors.fullName}
              handleBlur={handleBlur}
              handleChange={handleChange}
              touched={touched?.fullName}
              value={values.fullName}
            />
            <AuthInput
              name={"email"}
              text={"Email Address"}
              placeholder={"Enter email address"}
              type={"email"}
              value={values.email}
              error={errors.email}
              handleBlur={handleBlur}
              handleChange={handleChange}
              touched={touched?.email}
            />
            <AuthInput
              name={"password"}
              text={"password"}
              placeholder={"Enter password here"}
              type={"password"}
              forgetPassword={false}
              value={values.password}
              error={errors.password}
              handleBlur={handleBlur}
              handleChange={handleChange}
              touched={touched?.password}
            />
          </div>
          <div className=" gap-4 w-full">
            <AuthSubmitBtn text={"Sign Up"} loading={loading} />
            <p className="text-center w-full mt-3 font-[400] text-[#565656] text-[12px]">
              Already have an account?{" "}
              <span className="font-[600] text-black">Log In </span>
            </p>
            <p className="font-[400] text-center mt-5 text-[#565656] text-[12px]">
              I accept the Terms & conditions and Privacy policy
            </p>
          </div>
        </form>
      </div>
      <div className="hidden w-full lg:flex flex-col justify-center bg-[#F9FAFA] items-center h-full relative">
        <div className="relative flex justify-center items-center h-full mb-28">
          <img
            src={"/loginBg.png"}
            alt="login_mockup"
            className="relative w-[80%] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
