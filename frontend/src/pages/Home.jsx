
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LicenseCard from '../card/Licensecard';
import CitizenshipCard from '../card/Citizenshipcard';
import Votercard from '../card/Votercard';
import Pancard from '../card/Pancard';
import Plustwocard from '../card/Plustwocard';
import BirthCertificate from '../card/Birthcertificatecard';

const Home = () => {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
const location = useLocation();
  const { data,type } = location.state || {}; 

  
  useEffect(() => {
    console.log(type);

    const urlParams = new URLSearchParams(window.location.search);
    const typeParam = urlParams.get('type');
    console.log(type);
    if (!type) {
      // navigate('/select-option'); // If type is missing, redirect to select-option
      console.log('type is missing')
      return;
    }

    // Simulate fetching data for the type
    const fetchDetails = async () => {
      const loginToken = localStorage.getItem('login-token'); // Get the login token from localStorage
      const verificationToken = new URLSearchParams(window.location.search).get('Verification-Token'); // Get the verification token from URL
    
      console.log('Verification Token:', verificationToken);  // Log verification token for debugging
      console.log('Login Token:', loginToken);  // Log login token for debugging
    
      if (!loginToken) {
        console.log('Missing login token');
        return; // Exit if the login token is missing
      }
      
      if (!verificationToken) {
        console.log('Missing verification token');
        return; // Exit if the verification token is missing
      }
    
      try {
        const response = await fetch(`http://localhost:8000/api/home/${type}?Verification-Token=${verificationToken}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${loginToken}`, // Add the Authorization header
          },
        });
    
        if (response.ok) {
          const data = await response.json();
          setDetails(data.data);
          console.log(details) // Set the details state with the fetched data
        } else {
          const errorResponse = await response.json();
          setError(errorResponse.error || 'Something went wrong with the API');
        }
      } catch (err) {
        console.error('Error fetching details:', err);
        setError('Something went wrong'); // Display a generic error if something goes wrong with the fetch
      }
    };
    

    fetchDetails();
  }, [type, navigate]);

  // Render loading state or error message if necessary
  // if (!details && !error) {
  //   return <div>Loading...</div>;
  // }

  if (error) {
    return <div>{error}</div>;
  }

  // Render details for each type
  const renderDetails = () => {
    if (!details) {
      return <div className="text-center text-gray-500">Loading...</div>; // Loading indicator
    }
  
    switch (type) {
      case 'citizenship':
        return (
          <CitizenshipCard details={details}/>
        );
  
      case 'license':
        return (
          <LicenseCard details={details}/>
        );
  
      case 'voter':
        return (
          <Votercard details={details}/>
        );
  
      case 'pan':
        return (
          <Pancard details={details}/>
        );
  
      case 'birthcertificate':
        return (
          <BirthCertificate details={details}/>
        );
        case 'plus2':
          return (
           <Plustwocard details={details}/>
          );
  
      default:
        return <div className="text-center text-gray-500">No details available for this type</div>;
    }
  };
  
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <button 
        onClick={() => navigate(-1)} 
        className="mb-6 bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
      >
        Go Back
      </button>
      <div>{renderDetails()}</div>
    </div>
  );
  
};

export default Home;
