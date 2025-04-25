import React from "react";

const Plustwocard = ({ details }) => {
  return (
    <div className="p-4 bg-gray-100">
      {details.map((item, index) => (
        <div
          key={index}
          className="max-w-2xl mx-auto mt-10 border border-gray-400 rounded-lg bg-white shadow-md p-6"
        >
          {/* Header Section */}
          <div className="text-center">
            <img
              src="../emblem.webp"
              alt="Nepal Emblem"
              className="w-20 mx-auto mb-4"
            />
            <h2 className="font-bold text-lg">Government of Nepal</h2>
            <h3 className="font-semibold text-md">
              National Examination Board
            </h3>
            <h4 className="font-medium text-sm text-gray-600 mt-2">
              School Leaving Certificate, Grade-12
            </h4>
          </div>

          {/* Certificate Title */}
          <div className="text-center my-6">
            <h1 className="text-3xl font-bold uppercase">Certificate</h1>
          </div>

          {/* Certificate Body */}
          <div className="text-gray-800 text-base leading-7">
            <p>
              This is to certify that <strong>{item.name || "John Doe"}</strong>,
              a student of <strong>{item.college || "ABC Higher Secondary School"}</strong>, has duly completed the School Leaving Certificate, Grade-12 in the year <strong>{item.passed_year || "YYYY"}</strong> with Grade Point Average (GPA) <strong>{item.gpa || "4.00"}</strong>.
            </p>
            <p className="mt-4">
              According to the record of this office, his/her date of birth is
              <strong> {item.dob || "YYYY-MM-DD"}</strong>.
            </p>
          </div>

          {/* Symbol Number and Issue Date */}
          <div className="flex justify-between mt-6 text-gray-700">
            <p>
              <strong>Symbol Number:</strong> {item.symbol_number || "SYM-XXXX"}
            </p>
            <p>
              <strong>Date of Issue:</strong> {item.date_issued || "DD-MM-YYYY"}
            </p>
          </div>

          {/* Footer Section */}
          <div className="flex justify-between items-center mt-10">
            <div className="text-center">
              <p className="text-gray-600">Checked By:</p>
              <p className="mt-4">______________________</p>
              <p className="text-sm text-gray-500">NEB, Sanothimi, Bhaktapur</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600">Controller of Examinations</p>
              <p className="mt-4">______________________</p>
              <p className="text-sm text-gray-500">Authorized Signature</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Plustwocard;
