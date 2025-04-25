import React from "react";

const Pancard = ({ details }) => {
  return (
    <div>
      {details.map((item, index) => (
        <div
          key={index}
          className="max-w-3xl mx-auto mt-10 border-4 border-yellow-500 rounded-lg shadow-lg bg-white p-8"
          style={{
            backgroundImage: "url('../background-pattern.webp')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <img
                src="../emblem.webp"
                alt="Nepal Emblem"
                className="w-16"
              />
            </div>
            <div className="text-center">
              <h1 className="text-xl font-bold">नेपाल सरकार</h1>
              <h2 className="text-lg">आर्थिक राजस्व कार्यालय</h2>
              <h3 className="text-lg">स्थायी लेखा नम्बर (PAN) प्रमाण पत्र</h3>
            </div>
            <div>
              <img
                src={item.photo || "../user_avatar.webp"}
                alt="User"
                className="w-20 h-20 border border-gray-300 rounded"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="text-sm space-y-2">
            <p>
              <strong>स्थायी लेखा नम्बर:</strong>{" "}
              <span>{item.pan_number || "XXXX-XXXX-XXXX"}</span>
            </p>
            <p>
              <strong>कार्यालय:</strong>{" "}
              <span>{item.office || "आर्थिक राजस्व कार्यालय"}</span>
            </p>
            <p>
              <strong>व्यवसायको नाम:</strong>{" "}
              <span>{item.business_name || "ABC Company"}</span>
            </p>
            <p>
              <strong>ठेगाना:</strong>{" "}
              <span>{item.address || "काठमाडौं, नेपाल"}</span>
            </p>
            <p>
              <strong>जारी मिति:</strong>{" "}
              <span>{item.issue_date || "YYYY-MM-DD"}</span>
            </p>
          </div>

          {/* Footer */}
          <div className="mt-6 text-sm space-y-4">
            <p>
              <strong>व्यवसायको प्रकृति:</strong>{" "}
              {item.business_type || "व्यक्तिगत"}
            </p>
            <div className="flex justify-between items-center mt-6">
              <div>
                <p>कार्यालय प्रमुख</p>
                <p className="mt-4">______________________</p>
              </div>
              <div>
                <p>नासु</p>
                <p className="mt-4">______________________</p>
              </div>
            </div>
          </div>

          {/* Additional Details at the Bottom */}
          <div className="mt-10 text-xs border-t pt-4 text-justify text-gray-700">
            <p>
              १. यो प्रमाणपत्र कुनै पनि वित्तीय कारोबार गर्न, विभिन्न करहरुको
              आवश्यकता पूरा गर्न, पत्रहरु, निवेदनहरु, तथा अन्य कानूनी प्रक्रियामा
              प्रस्तुत गर्न मान्य हुनेछ।
            </p>
            <p>
              २. व्यवसाय बन्द भएमा, ३० दिनभित्र यो कार्यालयलाई जानकारी गराउनु पर्नेछ।
            </p>
            <p>
              ३. यो प्रमाणपत्रको कुनै पनि प्रतिलिपि बनाउन, वा यसलाई नष्ट गर्न,
              यो कार्यालयको पूर्वस्वीकृति आवश्यक हुनेछ।
            </p>
            <p>
              ४. करारपश्चात, प्यान नम्बर जारी भएको मितिबाट लागु हुने कुरा
              सम्झनुहोस्।
            </p>
            <p>
              ५. जारी भएको मितिबाट यो प्रमाणपत्रका सम्बन्धित प्रावधानहरु पालना गर्नु
              अनिवार्य छ।
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pancard;
