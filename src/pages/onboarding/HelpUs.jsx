import HelpUsComponent from "../../component/onboarding/HelpUs";

export default function HelpUs() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex flex-col justify-center  h-full items-center ">
        <HelpUsComponent />
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
}
