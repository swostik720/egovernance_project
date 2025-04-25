
// import React, { useState } from "react";
// import Forms from "../components/Forms";

// function License() {
//   const [name, setName] = useState("");
//   const [license_number, setLicense_number] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmitLicense = async (e) => {
//     e.preventDefault(); // Prevent page reload

//     // Validation
//     if (!name) {
//       setMessage("License Name is required.");
//       return;
//     }

//     if (!license_number) {
//       setMessage("License Number is required.");
//       return;
//     }

//     setMessage(""); // Clear error messages
//     setLoading(true); // Start loading

  
//     try {
//       const response = await fetch("http://localhost:8000/api/license/verify", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, license_number }),
//       });
      
//       if (response.ok) {
//         const data = await response.json();
//         const license_token = data['license-token']; // Extract the login token

//         // Save login token in localStorage
//         localStorage.setItem('license-token', license_token);

//         // Navigate to the home page and append the login token as a query parameter
//         setMessage(data.message || "Login successful");

//         // Redirect to home page with the token in the URL query parameters
//         navigate(`/login?verification-token=${license_token}`);
//       } else {
//         const errorData = await response.json();
//         setMessage(errorData.message || "Failed to verify license");
//       }
//     } catch (error) {
//       setMessage("An error occurred. Please try again.");
//     } finally {
//       setLoading(false); // End loading
//     }
//   };

//   return (
//     <div>
//       <Forms
//         formTitle="License Form"
//         fieldOneLabel="License Name"
//         fieldTwoLabel="License Number"
//         fieldOneValue={name}
//         fieldTwoValue={license_number}
//         setFieldOneValue={setName}
//         setFieldTwoValue={setLicense_number}
//         onSubmit={handleSubmitLicense}
//         loading={loading}
//         errorMessage={message}
//       />
//     </div>
//   );
// }

// export default License;
import React, { useState } from "react";
import Forms from "../components/Forms";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function License() {
  const [name, setName] = useState("");
  const [license_number, setLicense_number] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmitLicense = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Validation
    if (!name) {
      setMessage("License Name is required.");
      return;
    }

    if (!license_number) {
      setMessage("License Number is required.");
      return;
    }

    setMessage(""); // Clear error messages
    setLoading(true); // Start loading

    try {
      const response = await fetch("http://localhost:8000/api/license/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, license_number }),
      });
      
      // 
      if (response.ok) {
        const data = await response.json();
        console.log('License verification data:', data);  // Log the response data
      
        const license_token = data['license-token']; // Extract the license token
        console.log('Extracted license token:', license_token); // Log the token
      
        // Save license token in localStorage
        localStorage.setItem('license-token', license_token);
      
        setMessage(data.message || "License verification successful");
      
        // Redirect to home page with the token in the URL query parameters
        navigate(`/login?verification-token=${license_token}`);
      } else {
        const errorData = await response.json();
        console.log('Error response:', errorData);  // Log error data
        setMessage(errorData.message || "Failed to verify license");
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
        formTitle="License Form"
        fieldOneLabel="License Name"
        fieldTwoLabel="License Number"
        fieldOneValue={name}
        fieldTwoValue={license_number}
        setFieldOneValue={setName}
        setFieldTwoValue={setLicense_number}
        onSubmit={handleSubmitLicense}
        loading={loading}
        errorMessage={message}
      />
    </div>
  );
}

export default License;
