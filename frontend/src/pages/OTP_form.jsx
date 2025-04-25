import React, { useState } from "react";

const OTPForm = ({
  className,
  handleVerifyOtp,
  message,
  setMessage,
  email,
  setEmail,
  otp,
  setOtp,
  loading,
  setLoading,
}) => {
  const [isOtpSent, setIsOtpSent] = useState(false);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSendOtp = async () => {
    setLoading(true);
    setMessage("");

    if (!email) {
      setLoading(false);
      setMessage("Email is required.");
      return;
    }
    if (!isValidEmail(email)) {
      setLoading(false);
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email}),
      });
     
      if (response.ok) {
        setIsOtpSent(true);
        setMessage("OTP sent successfully!");
        
      } else {
        setMessage("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          OTP Verification
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        {!isOtpSent && (
          <button
            onClick={handleSendOtp}
            className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300"
            disabled={loading}
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>
        )}

        <p
          className={`mt-4 text-center text-sm ${
            message.includes("successfully") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>

        {isOtpSent && (
          <>
            <div className="mt-4 mb-4">
              <label className="block text-gray-700">Enter OTP</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter the OTP"
              />
            </div>

            <button
              className={className}
              onClick={handleVerifyOtp}
              disabled={loading}
            >
              {loading ? "Verifying OTP..." : "Verify OTP"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default OTPForm;
