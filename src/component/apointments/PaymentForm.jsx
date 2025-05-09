import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

import AuthSubmitBtn from "../authentication/AuthSubmitBtn";
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: "Arial, sans-serif",
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};
const PaymentForm = ({ clientSecret, setStep, step }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return; 
    setIsProcessing(true);
    const card = elements.getElement(CardElement);
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
        },
      }
    );

    if (error) {
      setErrorMessage(error.message);
      setIsProcessing(false);
    } else if (paymentIntent.status === "succeeded") {
      step < 3 && setStep((prev) => prev + 1);
    }
  };

  const handleChange = (event) => {
    if (event.error) {
      setErrorMessage(event.error.message);
    } else {
      setErrorMessage(null);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-[400px] mt-2" >
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Card Number
        </label>
        <div className="border rounded p-2 bg-white">
          <CardElement
            options={{
              ...CARD_ELEMENT_OPTIONS,
              hidePostalCode: true,
            }}
            onChange={handleChange}
            className="w-full"
          />
        </div>
      </div>

      {errorMessage && (
        <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
      )}

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full bg-gradient-to-r from-[#A82E75] to-[#3C043A] text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors font-medium mt-4"
      >
        {isProcessing ? "Processing..." : "Next"}
      </button>
    </form>
  );
};
export default PaymentForm;
