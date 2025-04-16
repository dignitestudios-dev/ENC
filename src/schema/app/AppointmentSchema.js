import * as Yup from "yup";

export const AppointmentSchema = Yup.object({
  name: Yup.string()
    .required("Please enter your full name.")
    .min(2, "Full name must be at least 2 characters long."),
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Please enter your email."),
  note: Yup.string(),
});


export const AppointmentStep3Schema = Yup.object({
  reason: Yup.string()
    .required("Please select the primary reason for your appointment."),
  accomodation: Yup.array()
    .of(Yup.string())
    .min(1, "Please select at least one accommodation option.")  // Ensures at least one checkbox is selected
    .required("Accommodations are required to be selected."),
  attendedBefore: Yup.string()    
    .required("Please select if you have attended an ENC session before."),
  specificGoals: Yup.string(),
});
