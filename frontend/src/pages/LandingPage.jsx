import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate('/home');
  };

  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-center items-center p-10">
      <div className="max-w-full flex flex-col justify-around max-h-full h-full w-full p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">
        Library Management System
        </h1>
        <p className="text-gray-600 mb-6">
          Organize your books seamlessly with our intuitive book management app.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-200 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Add Books Easily</h2>
            <p>Quickly add new books to your library with just a few clicks.</p>
          </div>
          <div className="p-4 bg-gray-200 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Effortless Editing</h2>
            <p>Edit book details effortlessly whenever you need.</p>
          </div>
          <div className="p-4 bg-gray-200 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Simple Deletion</h2>
            <p>Remove books from your library with a single click.</p>
          </div>
        </div>

        <div className="mt-8">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white text-2xl py-2 px-5 rounded-full"
            onClick={handleClick}
          >
            Get Started
          </button>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600">
            We are passionate about making book management simple and enjoyable.
            Our app is designed with you in mind, providing a hassle-free
            experience for organizing your library.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
