import * as Yup from "yup";

export const ContactUsSchema = Yup.object({
  fname: Yup.string()
    .required("Please enter your full name.")
    .min(2, "Full name must be at least 2 characters long."),
  lname: Yup.string()
    .required("Please enter your full name.")
    .min(2, "Full name must be at least 2 characters long."),
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Please enter your email."),
  phone: Yup.string()
    .matches(
      /^(\+1)?[-.\s]?(\(?\d{3}\)?)[-.\s]?\d{3}[-.\s]?\d{4}$/,
      "Please enter a valid US phone number."
    )
    .required("Please enter your phone number."),
  description: Yup.string()
    .required("Please enter your description.")
    .min(2, "description must be at least 2 characters long."),
});
