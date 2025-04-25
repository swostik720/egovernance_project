import React, { useState } from "react";
import OTP_form from "./OTP_form";
import { useNavigate } from "react-router-dom";

function Verification() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerifyOtp = async () => {
    setLoading(true); // Start loading
    setMessage(""); // Clear previous messages

    if (!otp) {
        setLoading(false);
        setMessage("OTP is required.");
        return;
      }
      if (otp.length !== 6 || isNaN(otp)) {
        setLoading(false);
        setMessage("Please enter a valid 6-digit numeric OTP.");
        return;
      }

    try {
      const response = await fetch("http://localhost:8000/api/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });
      const result=await response.json();

      if (response.ok) {
        const {token} =result;
        setMessage(result.message || "Email verified successfully!");
        localStorage.setItem("token",token)

        navigate("/setpassword");

        
      } else {
        setMessage("Verification failed. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div>
      <OTP_form
        className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
        handleVerifyOtp={handleVerifyOtp}
        message={message}
        setMessage={setMessage}
        email={email}
        setEmail={setEmail}
        otp={otp}
        setOtp={setOtp}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  );
}

export default Verification;
