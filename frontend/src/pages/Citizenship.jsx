
import React, { useState } from "react";
import Forms from "../components/Forms";
import { useNavigate } from "react-router-dom";

function Citizenship() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmitCitizen = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Validation
    if (!name) {
      setMessage("Citizenship Name is required.");
      return;
    }

    if (!number) {
      setMessage("Citizenship Number is required.");
      return;
    }


    setMessage(""); // Clear error messages
    setLoading(true); // Start loading

    try {
      const response = await fetch("http://localhost:8000/api/citizenship/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, number }),
      });
      if (response.ok) {
        const data = await response.json();
        const citizenship_token = data['citizenship-token']; // Extract the login token

        // Save login token in localStorage
        localStorage.setItem('citizenship-token', citizenship_token);

        // Navigate to the home page and append the login token as a query parameter
        setMessage(data.message || "Login successful");

        // Redirect to home page with the token in the URL query parameters
        navigate(`/login?verification-token=${citizenship_token}`);
      }
     else {
        setMessage("Failed to verify citizenship");
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
        formTitle="Citizenship Form"
        fieldOneLabel="Citizenship Name"
        fieldTwoLabel="Citizenship Number"
        fieldOneValue={name}
        fieldTwoValue={number}
        setFieldOneValue={setName}
        setFieldTwoValue={setNumber}
        onSubmit={handleSubmitCitizen}
        loading={loading}
        errorMessage={message}
      />
    </div>
  );
}

export default Citizenship;
