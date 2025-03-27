import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./component/global/Layout";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Login from "./pages/authentication/Login";
import ForgotPassword from "./pages/authentication/ForgotPassword";
import Verify from "./pages/authentication/Verify";
import ResetPassword from "./pages/authentication/ResetPassword";
import PasswordUpdated from "./pages/authentication/PasswordUpdated";
import SignUp from "./pages/onboarding/Signup";
import VerifyOtp from "./pages/onboarding/VerifyOtp";
import ProfileCreated from "./pages/onboarding/ProfileCreate";
import Setting from "./pages/Settings";
import Profile from "./pages/Profile";
import Appointments from "./pages/Appointments";
import HelpUs from "./pages/onboarding/HelpUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout pages={<Home />} />} />
      <Route path="about" element={<Layout pages={<AboutUs />} />} />
      <Route path="contact" element={<Layout pages={<Contact />} />} />
      <Route path="login" element={<Login />}/>
      <Route path="forgot-password"  element={<ForgotPassword />} />
      <Route path="verify-email"  element={<Verify />} />
      <Route path="reset-password"  element={<ResetPassword />} />
      <Route path="password-updated"  element={<PasswordUpdated />} />
      <Route path="signup"  element={<SignUp />} />
      <Route path="help-us"  element={<HelpUs />} />
      <Route path="verify-otp"  element={<VerifyOtp />} />
      <Route path="profile-created"  element={<ProfileCreated />} />
      <Route path="setting"  element={<Layout pages={<Setting />} />} />
      <Route path="profile"  element={<Layout pages={<Profile />} />} />
      <Route path="appointment"  element={<Layout pages={<Appointments />} />} />

    </Routes>
  );
}

export default App;
