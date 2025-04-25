// import React, { useState } from "react";
// import Forms from "../components/Forms";
// import { useSearchParams, useNavigate } from "react-router-dom";

// function Resetpassword() {
//   const [searchParams] = useSearchParams(); // To get query parameters from the URL
//   const navigate = useNavigate();

//   // States for form inputs and messages
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Extract the token and email from the query parameters
//   const token = searchParams.get("token");
//   const email = searchParams.get("email");

//   // Handle Reset Password Form Submission
//   const handleResetPasswordSubmit = async (e) => {
//     e.preventDefault(); // Prevent page reload

//     // Validation
//     if (!password) {
//       setMessage("Password is required.");
//       return;
//     }

//     if (password !== confirmPassword) {
//       setMessage("Passwords do not match.");
//       return;
//     }

//     setMessage(""); // Clear error messages
//     setLoading(true); // Start loading

//     try {
//       const response = await fetch("http://localhost:8000/api/reset-password", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, token, password }),
//       });

//       if (response.ok) {
//         const data = await response.json();

//         setMessage(data.message || "Password reset successfully.");
//         setTimeout(() => navigate("/login"), 3000); // Redirect to login after success
//       } else {
//         const errorData = await response.json();
//         setMessage(errorData.message || "Failed to reset password.");
//       }
//     } catch (error) {
//         console.error("Fetch Error:", error); 
//       setMessage("An error occurred. Please try again.");
//     } finally {
//       setLoading(false); // End loading
//     }
//   };

//   return (
//     <div>
//       <Forms
//         formTitle="Reset Password"
//         fieldOneLabel="New Password"
//         fieldTwoLabel="Confirm Password"
//         fieldOneValue={password}
//         fieldTwoValue={confirmPassword}
//         setFieldOneValue={setPassword}
//         setFieldTwoValue={setConfirmPassword}
//         onSubmit={handleResetPasswordSubmit}
//         loading={loading}
//         errorMessage={message}
//       />
//     </div>
//   );
// }

// export default Resetpassword;
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Resetpassword() {
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Extract token and email from query parameters
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  const email = queryParams.get("email");
  

  const handleResetPassword = async (e) => {
    e.preventDefault();

    // Validation
    if (!password || !password_confirmation) {
      setMessage("Both password fields are required.");
      return;
    }

    if (password !== password_confirmation) {
      setMessage("Passwords do not match.");
      return;
    }

    setMessage("");
    setLoading(true);

    console.log(email);
    console.log(token);

    try {
      const response = await fetch("http://localhost:8000/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          email,
          password,
          password_confirmation
        }),
      });

      if (response.ok) {
        // console.log("error!!")
        const data = await response.json();
        setMessage(data.message || "Password reset successfully.");
        setTimeout(() => navigate("/login"), 2000); // Redirect to login after 2 seconds
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || "Failed to reset password.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
        {message && (
          <div className={`p-2 mb-4 rounded ${message.includes("success") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
            {message}
          </div>
        )}
        <form onSubmit={handleResetPassword}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">New Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              value={password_confirmation}
              onChange={(e) => setPassword_confirmation(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 text-white rounded-lg ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"}`}
            disabled={loading}
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Resetpassword;
