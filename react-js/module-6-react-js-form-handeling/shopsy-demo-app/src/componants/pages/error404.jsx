import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
      
      {/* 🔢 404 Text */}
      <h1 className="text-7xl md:text-9xl font-bold text-blue-600">
        404
      </h1>

      {/* 📄 Message */}
      <h2 className="text-2xl md:text-3xl font-semibold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2 max-w-md">
        Oops! The page you are looking for does not exist or has been moved.
      </p>

      {/* 🖼️ Image */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="404"
        className="w-64 mt-6"
      />

      {/* 🔙 Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}