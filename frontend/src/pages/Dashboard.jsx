
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card'; // Import the Card component

const Dashboard = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loginToken = localStorage.getItem('login-token'); // Get the login token from localStorage
    const verificationToken = new URLSearchParams(window.location.search).get('verification-token'); // Get the verification token from URL



    if (!loginToken || !verificationToken) {
      setError('Missing login or verification token');
      navigate('/select-option');
      return;
    }
  }, [navigate]);
  const handleCardClick = async (type) => {
    const loginToken = localStorage.getItem('login-token'); // Get the login token from localStorage
    const verificationToken = new URLSearchParams(window.location.search).get('verification-token'); // Get the verification token from URL

    if (!loginToken || !verificationToken) {
      setError('Missing login or verification token');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/api/home/${type}?Verification-Token=${verificationToken}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${loginToken}`,
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        navigate(`/home/${type}?Verification-Token=${verificationToken}`, { state: { data: responseData.data, type: type } });
      } else {
        const errorResponse = await response.json();
        setError(errorResponse.error); // Show error if the response is not OK
      }
    } catch (error) {
      console.error('Something went wrong', error);
      setError('Something went wrong');
    }
  };
  const handlelogout = async () => {
    const loginToken = localStorage.getItem('login-token'); // Get the login token
    const licenseToken = localStorage.getItem('license-token'); // Get the login token
    const citizenshipToken = localStorage.getItem('citizenhsip-token'); // Get the login token



    try {
      // Perform the logout API request
      const response = await fetch('http://localhost:8000/api/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${loginToken}`, // Send the token to authenticate the logout request
        },
      });

      if (response.ok) {
        // If the logout is successful, remove the login token from localStorage
        localStorage.removeItem('login-token');
        localStorage.removeItem('license-token');
        localStorage.removeItem('citizenship-token');
        // You can redirect the user to the login page or home page after logout
        navigate('/select-option'); // or navigate('/') for home page
        console.log('Logged out successfully');
      } else {
        const errorResponse = await response.json();
        console.error('Logout failed:', errorResponse.error);
      }
    } catch (error) {
      console.error('Something went wrong during logout:', error);
    }
  };

  return (
    // <div>
    //   <nav className="bg-blue-600 text-white p-4 fixed top-0 left-0 w-full z-10 shadow-md">
    //     <div className="flex justify-between items-center">
    //       <div className="text-xl font-semibold">GOVEASE</div>
    //       <button onClick={handlelogout} className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-700 transition duration-200">
    //         Logout
    //       </button>
    //     </div>
    //   </nav>

    //   <div className="pt-16 px-4">
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

    //       <Card
    //         imageSrc="/license_card.webp"
    //         title="Smart Licenses"
    //         onClick={() => handleCardClick("license")}
    //       />
    //       <Card 
    //         imageSrc="/citizenship-details.jpg"
    //         title="Citizenship"
    //         onClick={() => handleCardClick("citizenship")}
    //       />
    //       <Card 
    //         imageSrc="/voter-details.jpeg"
    //         title="Voter Details"
    //         onClick={() => handleCardClick("voter")}
    //       />
    //       <Card 
    //         imageSrc="/pan-details.jpg"
    //         title="Pan Card"
    //         onClick={() => handleCardClick("pan")}
    //       />
    //       <Card 
    //         imageSrc="/plus2-details.jpeg"
    //         title="Plus Two Certificate"
    //         onClick={() => handleCardClick("plus2")}
    //       />
    //       <Card 
    //         imageSrc="/birth-certificate-details.jpg"
    //         title="Birth Certificate"
    //         onClick={() => handleCardClick("birthcertificate")}
    //       />
    //     </div>

    //     {error && <p>{error}</p>}
    //   </div>
    // </div>
    // <div>
    //   <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white p-4 fixed top-0 left-0 w-full z-10 shadow-lg">
    //     <div className="flex justify-between items-center">
    //       <div className="text-2xl font-bold tracking-wide hover:scale-110 transition transform duration-300">
    //         GOVEASE
    //       </div>
    //       <button
    //         onClick={handlelogout}
    //         className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-700 hover:scale-105 transition transform duration-200 shadow-md"
    //       >
    //         Logout
    //       </button>
    //     </div>
    //   </nav>

    //   <div className="pt-20 px-6">
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    //       <Card
    //         imageSrc="/license_card.webp"
    //         title="Smart Licenses"
    //         onClick={() => handleCardClick("license")}
    //       />
    //       <Card
    //         imageSrc="/citizenship-details.jpg"
    //         title="Citizenship"
    //         onClick={() => handleCardClick("citizenship")}
    //       />
    //       <Card
    //         imageSrc="/voter-details.jpeg"
    //         title="Voter Details"
    //         onClick={() => handleCardClick("voter")}
    //       />
    //       <Card
    //         imageSrc="/pan-details.jpg"
    //         title="Pan Card"
    //         onClick={() => handleCardClick("pan")}
    //       />
    //       <Card
    //         imageSrc="/plus2-details.jpeg"
    //         title="Plus Two Certificate"
    //         onClick={() => handleCardClick("plus2")}
    //       />
    //       <Card
    //         imageSrc="/birth-certificate-details.jpg"
    //         title="Birth Certificate"
    //         onClick={() => handleCardClick("birthcertificate")}
    //       />
    //     </div>

    //     {error && (
    //       <p className="mt-6 text-center text-red-600 font-semibold animate-pulse">
    //         {error}
    //       </p>
    //     )}
    //   </div>
    // </div>
    <div>
  {/* NAVBAR */}
  <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-4 fixed top-0 left-0 w-full z-10 shadow-lg">
    <div className="flex justify-between items-center">
      <div className="text-3xl font-extrabold tracking-wide hover:scale-110 hover:text-yellow-300 transition transform duration-500">
        GOVEASE
      </div>
      <button
        onClick={handlelogout}
        className="bg-gradient-to-r from-red-400 to-red-600 px-6 py-3 rounded-full text-lg font-medium hover:from-red-500 hover:to-red-700 hover:scale-105 shadow-xl transition-all duration-300 ease-in-out"
      >
        Logout
      </button>
    </div>
  </nav>

  {/* MAIN CONTENT */}
  <div className="pt-24 px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card
        imageSrc="/license_card.webp"
        title="Smart Licenses"
        onClick={() => handleCardClick("license")}
      />
      <Card
        imageSrc="/citizenship-details.jpg"
        title="Citizenship"
        onClick={() => handleCardClick("citizenship")}
      />
      <Card
        imageSrc="/voter-details.jpeg"
        title="Voter Details"
        onClick={() => handleCardClick("voter")}
      />
      <Card
        imageSrc="/pan-details.jpg"
        title="Pan Card"
        onClick={() => handleCardClick("pan")}
      />
      <Card
        imageSrc="/plus2-details.jpeg"
        title="Plus Two Certificate"
        onClick={() => handleCardClick("plus2")}
      />
      <Card
        imageSrc="/birth-certificate-details.jpg"
        title="Birth Certificate"
        onClick={() => handleCardClick("birthcertificate")}
      />
    </div>

    {error && (
      <p className="mt-6 text-center text-red-600 font-semibold animate-pulse">
        {error}
      </p>
    )}
  </div>
</div>


  );
};

export default Dashboard;
