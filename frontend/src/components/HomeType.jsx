import React, { useState, useEffect } from 'react';

const HomeType = ({ match }) => {
  const [formData, setFormData] = useState([]);
  const [verificationToken, setVerificationToken] = useState(localStorage.getItem('verification_token'));

  useEffect(() => {
    const { type } = match.params;

    if (!verificationToken) {
      console.log('Verification token is missing!');
      return;
    }

    fetch(`/home/${type}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Use your auth token
        'Verification-Token': verificationToken, // Send the verification token here
      }
    })
    .then(response => response.json())
    .then(data => setFormData(data.data)) // Assuming the response contains 'data' field
    .catch(error => console.error('Error fetching form data:', error));
  }, [match.params, verificationToken]);

  return (
    <div className="card-container">
      <h2>Details for {match.params.type}</h2>
      {formData.length === 0 ? (
        <p>No data available for this form type.</p>
      ) : (
        formData.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.name}</h3> {/* Adjust with actual field names */}
            <p>{item.description}</p> {/* Adjust with actual field names */}
            {/* Add more fields as required */}
          </div>
        ))
      )}
    </div>
  );
};

export default HomeType;
