import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SelectionPage = () => {
  const [option, setOption] = useState(""); // To store the selected option
  const navigate = useNavigate();

  const handleOption = async (selectedOption) => {
    setOption(selectedOption); // Update the state with the selected option

    try {
      const response = await fetch("http://localhost:8000/api/select-option", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ option: selectedOption }), // Send the selected option
      });

      if(response.ok)
      {
        const data = await response.json(); // Parse the response body

        console.log(data);
  
        if (data.option === "license") {
          console.log("License selected");
          navigate("/license"); // Navigate to License page
        } else if (data.option === "citizenship") {
          console.log("Citizenship selected");
          navigate("/citizenship"); // Navigate to Citizenship page
        } else {
          console.log("Unknown option selected.");
        }
      }
      else
      {
        console.log('ERROR !!')
      }
     
    } catch (error) {
      console.error("An error occurred while processing the request:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-green-500 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-6">
          Choose an Option
        </h1>
        <p className="text-gray-600 mb-8">
          Please select one of the following options:
        </p>

        {/* Options */}
        <div className="flex flex-col gap-4">
          <button
            className={`w-full py-3 text-lg font-semibold rounded-lg border-2 ${
              option === "citizenship"
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white text-blue-500 border-blue-500"
            } hover:bg-blue-500 hover:text-white transition duration-300`}
            onClick={() => handleOption("citizenship")} // Pass the selected option
          >
            Citizenship
          </button>

          <button
            className={`w-full py-3 text-lg font-semibold rounded-lg border-2 ${
              option === "license"
                ? "bg-green-500 text-white border-green-500"
                : "bg-white text-green-500 border-green-500"
            } hover:bg-green-500 hover:text-white transition duration-300`}
            onClick={() => handleOption("license")} // Pass the selected option
          >
            License
          </button>
        </div>

        {/* Selected Option Display */}
        {option && (
          <p className="mt-8 text-lg font-medium text-gray-700">
            You selected:{" "}
            <span
              className={`${
                option === "citizenship" ? "text-blue-500" : "text-green-500"
              }`}
            >
              {option}
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default SelectionPage;
