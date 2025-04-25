import React from "react";

const Votercard = ({ details }) => {
  return (
    <div>
      {details.map((item, index) => (
        <div
          key={index}
          className="max-w-md mx-auto mt-10 border-2 border-gray-300 rounded-lg shadow-lg"
        >
          {/* Header Section */}
          <div className="bg-blue-50 p-4 rounded-t-lg flex items-center justify-between">
            <img src="../emblem.webp" alt="Nepal Logo" className="w-12" />
            <h1 className="text-xl font-bold text-red-600">
              मतदाता परिचय - पत्र
            </h1>
            <img src="../nibrachan_aayog.webp" alt="Election Logo" className="w-12" />
          </div>

          {/* Details Section */}
          <div className="p-6 flex">
            <div className="flex-grow">
              <p className="text-sm text-gray-700">
                <strong>मतदाता न. :</strong> {item.voter_number || "*************"}
              </p>
              <p className="text-sm text-gray-700 mt-2">
                <strong>नामथर :</strong> {item.name || "****** *****"}
              </p>
              <p className="text-sm text-gray-700 mt-2">
                <strong>जन्म मिति :</strong> {item.name || "****** *****"}
              </p>
              <p className="text-sm text-gray-700 mt-2">
                <strong>जारी मिति :</strong> {item.issue_date || "****-**-**"}
              </p>
              <p className="text-sm text-gray-700 mt-2">
                <strong>ठेगाना :</strong> {item.address || "********, ********"}
              </p>
            </div>
            <div className="flex flex-col items-center ml-4">
              <img
                src={item.photo || "../user_avatar.webp"}
                alt="User"
                className="w-20 h-20 border border-gray-300 rounded mb-4"
              />
              <img
                src="../qr_scanner.webp"
                alt="QR Code"
                className="w-20 h-20"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Votercard;
