
import React from "react";

function Card({ imageSrc, title, description, onClick }) {
  return (
    <div
      className="relative max-w-sm rounded-xl overflow-hidden shadow-lg bg-white m-4 cursor-pointer transform hover:scale-105 hover:shadow-2xl transition-transform duration-500 group hover:ring-4 hover:ring-indigo-300"
      onClick={onClick}
    >
      {/* Image Section */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-50 transition-opacity duration-500"></div>
      </div>

      {/* Title & Description Section */}
      <div className="p-6 bg-white transition-all duration-700">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center group-hover:text-indigo-600 transition-colors duration-500 transform group-hover:scale-105 group-hover:translate-y-1">
          {title}
        </h3>
        <p className="text-gray-600 text-base group-hover:text-gray-800 transition-colors duration-500">
          {description}
        </p>
      </div>

      {/* Animated Glow Effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 blur-xl group-hover:opacity-0 group-hover:scale-105 transition-all duration-700"></div>
      
      {/* Inner Shadow Effect */}
      <div className="absolute inset-0 rounded-xl bg-black opacity-10 group-hover:opacity-10 blur-lg transition-all duration-300"></div>
    </div>
  );
}

export default Card;

