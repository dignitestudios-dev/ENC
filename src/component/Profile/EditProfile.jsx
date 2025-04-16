import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import AuthInput from "../authentication/AuthInput";
import AuthSubmitBtn from "../authentication/AuthSubmitBtn";
import { useFormik } from "formik";
import { ProfileUpdateSchema } from "../../schema/authentication/AuthSchema";
import { useSignup } from "../../hooks/api/Put";

const EditProfileModal = ({ isOpen, setIsOpen, setProfileUpdated, user }) => {
  const [preview, setPreview] = useState(user?.profilePicture);
  const [step, setStep] = useState(1); // New state to manage steps
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
    initialValues: {
      fullName: user?.name || "",
      email: user?.email || "",
      profilePicture: user?.profilePicture || null,
      reason: user?.reason || "",
      accomodation: user?.accomodation || [],
      attendedBefore: user?.attendedBefore || "",
      specificGoals: user?.specificGoals || "",
    },
    validationSchema: ProfileUpdateSchema,
    enableReinitialize: true,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, actions) => {
      const form = new FormData();
      form.append("name", values.fullName);
      form.append("profilePicture", values.profilePicture);

      // ✅ Send each item individually as the same field name
      values.accomodation.forEach((item) => {
        form.append("accomodation", item);
      });

      form.append("attendedBefore", values.attendedBefore);
      form.append("reason", values.reason);
      form.append("specificGoals", values.specificGoals);

      const updateProfileResponse = await postData("users", true, form);
      if (updateProfileResponse?.success) {
        setIsOpen(false);
        setProfileUpdated(true);
      }
    },
  });

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setFieldValue("profilePicture", file);
    }
  };

  const goToNextStep = () => setStep(2);
  const goToPreviousStep = () => setStep(1);
  // console.log(user);

  return (
    isOpen && (
      <div className="w-screen h-screen flex items-center justify-center bg-[rgba(0,0,0,0.4)] fixed top-0 left-0 right-0 bottom-0 z-30 px-4">
        <div className="bg-[#FFFFFF] backdrop-blur-[100px] w-[540px] pb-10 pt-4 rounded-[12px] ">
          <div className="flex items-center flex-col px-5 justify-center gap-y-2 h-full">
            <div className="flex w-full justify-end">
              <button onClick={() => setIsOpen(false)}>
                <IoMdClose />
              </button>
            </div>
            <h3 className="text-[36px] font-[600] text-[#181818] capitalize mb-2">
              Edit Profile
            </h3>

            <form
              className="flex flex-col gap-y-4 w-[80%] mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                if (step == 1) {
                  goToNextStep();
                } else {
                  handleSubmit(e);
                }
              }}
            >
              {step === 1 && (
                <>
                  {/* Profile Picture Upload */}
                  <div className="w-full flex flex-col items-center gap-2 mt-3">
                    <label
                      htmlFor="profilePicture"
                      className="mx-auto relative cursor-pointer"
                    >
                      <img
                        src={preview || "/editProfile.png"}
                        alt="upload"
                        className="w-[80px] h-[80px] rounded-full"
                      />
                      <img
                        src="edit-profile.png"
                        alt="edit-icon"
                        className="w-10 h-10 absolute -bottom-4 -right-2"
                      />
                    </label>
                    <input
                      type="file"
                      id="profilePicture"
                      name="profilePicture"
                      value={""}
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>

                  <AuthInput
                    text={"Full name"}
                    type={"text"}
                    name={"fullName"}
                    placeholder={"Enter full name"}
                    error={errors.fullName}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    touched={touched?.fullName}
                    value={values.fullName || user?.name || ""}
                  />
                  <AuthInput
                    dissabled={true}
                    name={"email"}
                    text={"Email Address"}
                    placeholder={"Enter email address"}
                    type={"email"}
                    value={values.email || user?.email || ""}
                    error={errors.email}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    touched={touched?.email}
                  />
                </>
              )}

              {step === 2 && (
                <>
                  {/* Remaining Fields */}
                  {/* Reason for Appointment */}
                  <div>
                    <p className="font-[500] text-[13px]">
                      1- What is the primary reason for your appointment?
                    </p>
                    {/* Radio Buttons */}
                    {[
                      "Career Coaching & Professional Development",
                      "Disability Advocacy & Support",
                      "Personal Growth & Mentorship",
                      "Other",
                    ].map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 mt-2 text-sm"
                      >
                        <input
                          type="radio"
                          name="reason"
                          value={option}
                          checked={
                            values.reason
                              ? values.reason === option
                              : user?.reason === option
                          }
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {option}
                      </label>
                    ))}
                    {errors.reason && touched.reason && (
                      <div className="text-red-500 text-xs mt-1">
                        {errors.reason}
                      </div>
                    )}
                  </div>

                  {/* Accommodations */}
                  <div>
                    <p className="font-[500] text-[13px]">
                      2- Do you require any special accommodations?
                    </p>
                    {[
                      "Yes, I need closed captioning during the meeting.",
                      "Yes, I require an accessible meeting format (e.g., text-based or voice-only).",
                      "No special accommodations needed.",
                    ].map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 mt-2 text-sm"
                      >
                        <input
                          type="checkbox"
                          name="accomodation"
                          value={option}
                          checked={
                            values.accomodation.length > 0
                              ? values.accomodation.includes(option)
                              : user?.accomodation?.includes(option)
                          }
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFieldValue("accomodation", [
                                ...values.accomodation,
                                option,
                              ]);
                            } else {
                              setFieldValue(
                                "accomodation",
                                values.accomodation.filter(
                                  (item) => item !== option
                                )
                              );
                            }
                          }}
                          onBlur={handleBlur}
                        />
                        {option}
                      </label>
                    ))}
                    {errors.accomodation && touched.accomodation && (
                      <div className="text-red-500 text-xs mt-1">
                        {errors.accomodation}
                      </div>
                    )}
                  </div>

                  {/* Attended Before */}
                  <div>
                    <p className="font-[500] text-[13px]">
                      3- Have you attended an ENC session before?
                    </p>
                    {["Yes", "No, this is my first session"].map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 mt-2 text-sm"
                      >
                        <input
                          type="radio"
                          name="attendedBefore"
                          value={option}
                          checked={
                            values.attendedBefore
                              ? values.attendedBefore === option
                              : user?.attendedBefore === option
                          }
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {option}
                      </label>
                    ))}
                    {errors.attendedBefore && touched.attendedBefore && (
                      <div className="text-red-500 text-xs mt-1">
                        {errors.attendedBefore}
                      </div>
                    )}
                  </div>

                  {/* Specific Goals */}
                  <div>
                    <p className="font-[500] text-[13px]">
                      4- Specific goals or topics you'd like to discuss
                      (optional)
                    </p>
                    <textarea
                      rows={3}
                      className={`w-full py-2 px-3 resize-none rounded-[4px] border text-sm ${
                        errors.specificGoals && touched.specificGoals
                          ? "border-red-500"
                          : "border-[#D9D9D9]"
                      }`}
                      id="specificGoals"
                      name="specificGoals"
                      value={
                        values.specificGoals !== ""
                          ? values.specificGoals
                          : user?.specificGoals || ""
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your specific goals..."
                    />
                    {errors.specificGoals && touched.specificGoals && (
                      <div className="text-red-500 text-xs mt-1">
                        {errors.specificGoals}
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* Buttons */}
              <div className="flex justify-between items-center pt-4">
                {step === 2 && (
                  <button
                    type="button"
                    onClick={goToPreviousStep}
                    className="text-sm font-medium text-gray-600 hover:text-black"
                  >
                    ← Back
                  </button>
                )}
                <div className="ml-auto w-[30%]">
                  {step === 1 ? (
                    <AuthSubmitBtn text={"Next"} loading={false} />
                  ) : (
                    <AuthSubmitBtn text={"Save"} loading={loading} />
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default EditProfileModal;
