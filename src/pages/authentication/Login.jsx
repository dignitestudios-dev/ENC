import AuthInput from "../../component/authentication/AuthInput";
import AuthSubmitBtn from "../../component/authentication/AuthSubmitBtn";
import { useNavigate } from "react-router";
import { IoMdArrowBack } from "react-icons/io";
import Cookies from "js-cookie";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <div className="w-full flex flex-col justify-center  h-full items-center " >
        <form
          onSubmit={(e) =>{
            e.preventDefault();
            Cookies.set('auth', true)
            navigate("/")
          }}
          className="bg-white w-full px-10 lg:px-0 lg:w-[400px] flex flex-col justify-start items-center gap-8"
        >
          <div className="flex w-full items-center ">
            <div  onClick={()=>navigate(-1)} className="cursor-pointer" >
              <IoMdArrowBack size={25} />
            </div>
            <div className="w-full text-center">
              <h1 className=" text-4xl font-bold text-black ">
                Log in
              </h1>
              <span className="text-[14px] text-[#868686]  -mt-3">
                Please enter your details to log in.
              </span>
            </div>
          </div>
          <div className="flex flex-col w-full h-auto justify-start items-start gap-4  ">
            <AuthInput
              text={"Email Address"}
              placeholder={"Enter email address"}
              type={"email"}
            />
            <AuthInput
              text={"password"}
              placeholder={"Enter password here"}
              type={"password"}
              forgetPassword={true}
            />
            {/* <div className="flex flex-col w-full lg:w-[434px] justify-start items-end gap-1">
            <AuthInput
              text={"Password"}
              placeholder={"Enter Password"}
              type={"password"}
            />
            <button
              type="button"
              onClick={() => navigate("auth/forgot-password")}
              className="text-sm font-medium text-[#109BFF]"
            >
              Forgot Password?
            </button>
          </div> */}
          </div>
          <div className=" gap-4 w-full">
            <AuthSubmitBtn text={"Log In"} />
          <p className="text-center w-full mt-3 font-[400] text-[#565656] text-[12px]" >Don’t have an account? <span className="font-[600] text-black" > Sign Up </span></p>
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

export default Login;
