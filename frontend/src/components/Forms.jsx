

// export default Forms;
import React from "react";

const Forms = ({
  formTitle,
  fieldOneLabel,
  fieldTwoLabel,
  fieldOneValue,
  fieldTwoValue,
  setFieldOneValue,
  setFieldTwoValue,
  onSubmit,
  loading,
  errorMessage,
  showfogetpassword,
  handleForgetPassword
}) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 px-4">
      <form
        onSubmit={onSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {formTitle}
        </h2>

        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">{fieldOneLabel}</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={fieldOneValue}
            onChange={(e) => setFieldOneValue(e.target.value)}
            placeholder={`Enter ${fieldOneLabel}`}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">{fieldTwoLabel}</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={fieldTwoValue}
            onChange={(e) => setFieldTwoValue(e.target.value)}
            placeholder={`Enter ${fieldTwoLabel}`}
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
        {showfogetpassword && (
           <div className="mb-4 text-center">
           <a
            
             onClick={handleForgetPassword}
             className="text-sm text-blue-600 hover:underline "
           >
             Forgot Password?
           </a>
         </div>
        )}

      </form>
    </div>
  );
};

export default Forms;
