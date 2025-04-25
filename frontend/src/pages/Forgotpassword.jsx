import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Forgotpassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // To display success or error messages
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Validation
    if (!email) {
      setMessage("Email is required.");
      return;
    }

    setMessage(""); // Clear error messages
    setLoading(true); // Start loading

    try {
      const response = await fetch("http://localhost:8000/api/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        localStorage.setItem("reset-token", data["reset-token"]); // Store reset token in localStorage
        setMessage(data.message || "Password reset link sent successfully.");
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || "Failed to send reset password link.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 px-4">
      <form
        onSubmit={handleForgotPassword}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Forgot Password
        </h2>

        {message && (
          <p
            className={`text-sm mb-4 ${
              message.includes("success") ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Send Reset Link"}
        </button>
      </form>
    </div>
  );
}

export default Forgotpassword;
