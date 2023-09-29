import React from 'react';

const Spinner = () => {
  return (
    <div className=" h-100 w-100 flex items-center justify-center">
      <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600 content-center" />
    </div>
  );
};

export default Spinner;
