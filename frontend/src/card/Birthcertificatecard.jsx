import React from "react";

const BirthCertificate = ({ details }) => {
  return (
    <div>
      {details.map((item, index) => (
        <div
          key={index}
          className="max-w-4xl mx-auto mt-10 border border-black p-6 bg-white"
        >
          <div className="text-center">
          <img src="../emblem.webp" alt="emblem" className="w-16 h-16 mr-4" />
            <h1 className="text-lg font-bold">जन्म दर्ताको प्रमाण पत्र</h1>
            <p>स्थानीय तहको कार्यालय</p>
            <p>मन्त्रालय, नेपाल सरकार</p>
          </div>

          <div className="flex justify-between mt-4">
            <div>
              <p>
                <strong>वडा नं:</strong> {item.ward_number || "N/A"}
              </p>
              <p>
                <strong>पञ्जिकाधिकारी:</strong> {item.registrar_name || "N/A"}
              </p>
            </div>
            <div>
              <p>
                <strong>दर्ता नं:</strong>{" "}
                {item.birthcertificate_number || "N/A"}
              </p>
              <p>
                <strong>दर्ता मिति:</strong> {item.issue_date || "YYYY-MM-DD"}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <p>
              यो प्रमाणित गरिन्छ कि श्री/श्रीमती{" "}
              <strong>{item.father_name || "N/A"}</strong> र श्रीमती{" "}
              <strong>{item.mother_name || "N/A"}</strong> को सन्तान{" "}
              <strong>{item.name || "N/A"}</strong> को स्थायी ठेगाना{" "}
              <strong>{item.address || "N/A"}</strong> हो।
            </p>
            <p>
              जन्म मिति <strong>{item.birth_date_in_words || "N/A"}</strong>{" "}
              (वर्णमालामा) र <strong>{item.birth_date_in_digits || "N/A"}</strong>{" "}
              (अंकमा) रहेको छ।
            </p>
            <p>
              बालक/बालिकाको जन्मको समय{" "}
              <strong>{item.birth_time || "N/A"}</strong> हो।
            </p>
            <p>
              बालक/बालिकाको लिङ्ग: <strong>{item.gender || "N/A"}</strong>।
            </p>
            <p>
              बालक/बालिकाको धर्म: <strong>{item.religion || "N/A"}</strong>।
            </p>
            <p>
              बालक/बालिकाको जात: <strong>{item.caste || "N/A"}</strong>।
            </p>
            <p>
              यो प्रमाणित गरिन्छ कि माथि उल्लेखित सबै विवरण सही छन्।
            </p>
            <p>
              पञ्जीकृत गर्ने व्यक्तिको नाम:{" "}
              <strong>{item.registrar_name || "N/A"}</strong>।
            </p>
            <p>
              पञ्जीकृत मिति: <strong>{item.registration_date || "YYYY-MM-DD"}</strong>।
            </p>
            <p>
              यस प्रमाण पत्रलाई कुनै पनि सरकारी प्रयोजनका लागि प्रयोग गर्न
              सकिन्छ।
            </p>
          </div>

          <div className="flex justify-between mt-10">
            <div>
              <p>
                <strong>पञ्जिकाधिकारीको नाम:</strong>{" "}
                {item.registrar_name || "N/A"}
              </p>
              <p>मिति: {item.issue_date || "YYYY-MM-DD"}</p>
            </div>
            <div>
              <p>दस्तखत:</p>
              <img
                src={item.signature || "../signature.webp"}
                alt="Signature"
                className="h-12 mt-2"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BirthCertificate;
