import AuthInput from "../../component/authentication/AuthInput";
import AuthSubmitBtn from "../../component/authentication/AuthSubmitBtn";
import { useNavigate } from "react-router";
import { IoMdArrowBack } from "react-icons/io";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex flex-col justify-center  h-full items-center ">
        <form
          onSubmit={(e) =>{
            e.preventDefault();
            navigate("/help-us")
          }}
          className="bg-white w-full px-10 lg:px-0 lg:w-[400px] flex mt-5 flex-col justify-start items-center gap-8"
        >
          <div className="flex w-full items-center ">
            <div onClick={()=>navigate(-1)} className="cursor-pointer" >
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
              <label htmlFor="img" className="">
                <img
                  src={"/upload.png"}
                  alt="upload photo"
                  className="w-[80px]"
                />
              </label>
              <div>
                <input
                  type="file"
                  id="img"
                  name="img"
                  value={""}
                  className=" bg-transparent hidden rounded-full placeholder:text-[#FFFFFF] outline-none text-white  px-3 text-[14px] font-normal leading-[20.4px]"
                  placeholder="Enter Title"
                />
              </div>
              <p className="w-full text-[#181818] font-medium underline text-[14px] leading-[100%]">
              Upload Profile Picture
              </p>
            </div>
            <AuthInput
              text={"Full Name"}
              placeholder={"Enter full name"}
              type={"text"}
            />
            <AuthInput
              text={"Email Address"}
              placeholder={"Enter email address"}
              type={"email"}
            />
            <AuthInput
              text={"password"}
              placeholder={"Enter password here"}
              type={"password"}
              forgetPassword={false}
            />
            <AuthInput
              text={"Confirm password"}
              placeholder={"Re-enter password here"}
              type={"password"}
            />
          </div>
          <div className=" gap-4 w-full">
            <AuthSubmitBtn text={"Sign Up"} />
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
