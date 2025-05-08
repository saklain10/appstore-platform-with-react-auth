import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="flex flex-col rounded justify-center items-center min-h-[calc(100vh-64px)] bg-red-500 py-8 text-center">
      <div className="bg-white rounded-md shadow-md p-12 max-w-md w-full">
        <div className="text-6xl font-bold text-red-500 mb-4 leading-none">
          404
        </div>
        <h1 className="text-3xl font-semibold text-gray-800 mb-3">
          Page Not Found!
        </h1>
        <p className="text-gray-500 mb-6">
          Oops! The page you are looking for could not be found.
        </p>
        <Link to='/' className="bg-red-500 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md focus:outline-none focus:shadow-outline transition duration-200 ease-in-out">
          Go Back Home
        </Link >
      </div>
    </div>
  );
};

export default ErrorPage;