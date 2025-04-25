import React from "react";

const CitizenshipCard = ({ details }) => {
  if (!details) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[500px] h-auto bg-yellow-100 border border-gray-400 rounded-lg shadow-md p-6 relative">
        {/* Watermark Grid */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-4 opacity-20">

          <div className="text-yellow-400 text-xl font-small  ">
            नेपाली नागरिकता को प्रमाण पत्र
          </div>
          <div className="text-yellow-400 text-xl font-small  ">
            नेपाली नागरिकता को प्रमाण पत्र
          </div>
          <div className="text-yellow-400 text-xl font-small  ">
            नेपाली नागरिकता को प्रमाण पत्र
          </div>
          <div className="text-yellow-400 text-xl font-small  ">
            नेपाली नागरिकता को प्रमाण पत्र
          </div>
          <div className="text-yellow-400 text-xl font-small  ">
            नेपाली नागरिकता को प्रमाण पत्र
          </div>
          <div className="text-yellow-400 text-xl font-small  ">
            नेपाली नागरिकता को प्रमाण पत्र
          </div>
          <div className="text-yellow-400 text-xl font-small  ">
            नेपाली नागरिकता को प्रमाण पत्र
          </div>
          <div className="text-yellow-400 text-xl font-small  ">
            नेपाली नागरिकता को प्रमाण पत्र
          </div>
          <div className="text-yellow-400 text-xl font-small  ">
            नेपाली नागरिकता को प्रमाण पत्र
          </div>
          <div className="text-yellow-400 text-xl font-small  ">
            नेपाली नागरिकता को प्रमाण पत्र
          </div>
          <div className="text-yellow-400 text-xl font-small  ">
            नेपाली नागरिकता को प्रमाण पत्र
          </div>
          <div className="text-yellow-400 text-xl font-small  ">
            नेपाली नागरिकता को प्रमाण पत्र
          </div>
          <div className="text-yellow-400 text-xl font-small  ">
            नेपाली नागरिकता को प्रमाण पत्र
          </div>
          <div className="text-yellow-400 text-xl font-small  ">
            नेपाली नागरिकता को प्रमाण पत्र
          </div>
          <div className="text-yellow-400 text-xl font-small  ">
            नेपाली नागरिकता को प्रमाण पत्र
          </div>
          <div className="text-yellow-400 text-xl font-small  ">
            नेपाली नागरिकता को प्रमाण पत्र
          </div>

          {/* Add more as needed */}
        </div>

        {/* Header */}
        <div className="mb-4 flex items-center">
          {/* Emblem on the Left */}
          <img src="../emblem.webp" alt="emblem" className="w-16 h-16 mr-4" />

          {/* Text Container in Center */}
          <div className="flex justify-center items-center mb-4">
            <div className="flex flex-col justify-center text-center">
              <h1 className="text-red-600 font-bold text-lg">
                नेपाल सरकार
              </h1>
              <p className="text-gray-700 text-sm font-semibold">
                गृह मन्त्रालय
              </p>
              <p className="text-gray-700 text-sm font-semibold">
                जिल्ला प्रशासन कार्यालय
              </p>
              <h2 className="text-red-600 font-bold text-md mt-2">
                नेपाली नागरिकताको प्रमाणपत्र
              </h2>
            </div>
          </div>

        </div>



        {/* Content Section */}
        <div>
          {/* Photo Placeholder */}
          <div className="flex">
            <div className="w-24 h-32 border border-gray-400 bg-gray-200 mr-4"></div>
            {details.map((item) => (
              <div className="w-full">
                <p className="text-sm">
                  <span className="font-bold">ना. प्र. नं.:</span> {item.number}
                </p>
                <p className="text-sm mt-2">
                  <span className="font-bold">नाम थर:</span> {item.name}
                </p>
                <p className="text-sm mt-2">
                  <span className="font-bold">जन्म मिति:</span> {item.dob}
                </p>
                <p className="text-sm mt-2">
                  <span className="font-bold">ठेगाना:</span> {item.address}
                </p>
                <p className="text-sm mt-2">
                  <span className="font-bold">जारी मिति:</span> {item.issue_date}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-700">जारी गर्ने अधिकारी</p>
            <div className="mt-2 border-t border-gray-400 w-32"></div>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-700">
              प्रमाणपत्र वाहकको सही
            </p>
            <div className="mt-2 border-t border-gray-400 w-32"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitizenshipCard;
