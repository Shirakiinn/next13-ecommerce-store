import React from 'react';

const TopBar = () => {
  return (
    <div className="bg-pink-100 py-2 flex justify-center items-center text-sm text-red-600">
      <div className="flex space-x-4 ml-8">
        <span>Vegano</span>
        <span>Slow Fashion</span>
        <span>Sustentável</span>
      </div>
      <div className="flex space-x-4 items-center ml-8">
      </div>
    </div>
  );
};

export default TopBar;
