import React, { useState } from "react";
import Forms from "../components/Forms";
import { useNavigate } from "react-router-dom";

function SetPassword() {
    const navigate=useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Validation

    if (!password) {
      setMessage("Password is required.");
      return;
    }
    if (!confirmPassword) {
      setMessage("Confirm Password is required.");
      return;
    }
    if (password !== confirmPassword) {
        setMessage("Passwords do not match.");
        return;
      }

    setMessage(""); // Clear error messages
    setLoading(true); // Start loading

    try {
        const token=localStorage.getItem('token');

        if (!token) {
            setMessage("Token not found. Please try again.");
            setLoading(false);
            return;
          }
        
      const response = await fetch("http://localhost:8000/api/setup-password", {
        
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({  password }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message ||"Password setup successful.");
        console.log("Password setup response:", data);
        const {password_token}=data;
        localStorage.setItem("password_token",password_token);
        navigate('/select-option');
        // Optionally clear token after successful password setup (if required)
        // localStorage.removeItem("token");
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || "Failed to set password.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false); // End loading
    }
  };
 

  return (
    <div>
      <Forms
        formTitle="Set-up New Password"
        fieldOneLabel="New Password"
        fieldTwoLabel="Confirm New Password"
        fieldOneValue={password}
        fieldTwoValue={confirmPassword}
        setFieldOneValue={setPassword}
        setFieldTwoValue={setConfirmPassword}
        onSubmit={handleSubmit}
        loading={loading}
        errorMessage={message}
      />
    </div>
  );
}

export default SetPassword;
