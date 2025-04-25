import React, { useState } from "react";
import Forms from "../components/Forms";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Validation
    if (!email) {
      setMessage("email is required.");
      return;
    }

    if (!password) {
      setMessage("Password is required.");
      return;
    }

    setMessage(""); // Clear error messages
    setLoading(true); // Start loading

    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const loginToken = data['login-token']; // Extract the login token

        // Save login token in localStorage
        localStorage.setItem('login-token', loginToken);

        // Navigate to the home page and append the login token as a query parameter
        setMessage(data.message || "Login successful");

        // Redirect to home page with the token in the URL query parameters
        navigate(`/dashboard?verification-token=${localStorage.getItem('citizenship-token')||localStorage.getItem('license-token')}&login-token=${loginToken}`);
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || "Failed to login");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false); // End loading
    }
  };
  const handleForgetPassword =()=>{
    navigate('/forgotpassword');
  }

  return (
    <div>
      <Forms
        formTitle="Login Form"
        fieldOneLabel="email"
        fieldTwoLabel="Password"
        fieldOneValue={email}
        fieldTwoValue={password}
        setFieldOneValue={setEmail}
        setFieldTwoValue={setPassword}
        onSubmit={handleLoginSubmit}
        loading={loading}
        errorMessage={message}
        showfogetpassword={true}
        handleForgetPassword={handleForgetPassword}
      />
    </div>
  );
}

export default Login;
