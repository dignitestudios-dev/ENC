import * as Yup from "yup";

export const signUpSchema = Yup.object({
  profilePicture: Yup.mixed().required("Please enter your Profile Picture."),
  fullName: Yup.string()
    .required("Please enter your full name.")
    .min(2, "Full name must be at least 2 characters long."),
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Please enter your email."),
  password: Yup.string()
    .matches(/^(?!\s)(?!.*\s$)/, "Password must not begin or end with spaces")
    .min(8, "Password must contain at least 8 characters.")
    .required("Please enter your password."),
});
export const ProfileUpdateSchema = Yup.object({
  profilePicture: Yup.mixed().required("Please enter your Profile Picture."),
  fullName: Yup.string()
    .required("Please enter your full name.")
    .min(2, "Full name must be at least 2 characters long."),
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Please enter your email."),
  reason: Yup.string().required(
    "Please select the primary reason for your appointment."
  ),
  accomodation: Yup.array()
    .of(Yup.string())
    .min(1, "Please select at least one accommodation option.") // Ensures at least one checkbox is selected
    .required("Accommodations are required to be selected."),
  attendedBefore: Yup.string().required(
    "Please select if you have attended an ENC session before."
  ),
  specificGoals: Yup.string(),
});

export const signInSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Please enter your email"),
  password: Yup.string()
    .matches(/^(?!\s)(?!.*\s$)/, "Password must not begin or end with spaces")
    .min(6, "Password must contain atleast 6 alphanumeric characters.")
    .required("Please enter your password"),
});
export const emailVerificationSchema = Yup.object({
  otp: Yup.string()
    .matches(/^(?!\s)(?!.*\s$)/, "OTP must not begin or end with spaces")
    .min(6, "OTP must contain at least 6 digits.")
    .required("Please enter the OTP"),
});

export const forgotSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Please enter your email"),
});

export const ChangedSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmpassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
export const UpdatePasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  newPassword: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmpassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
});
