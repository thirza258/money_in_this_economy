import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white fixed top-0 left-0 w-full text-black h-12 flex items-center px-4 border-b-2 border-black justify-between z-10">
      <h1 className="text-lg font-bold">MoneyInThisEconomy</h1>
      <button className="text-black px-4 py-2 hover:bg-gray-600 hover:text-white rounded transition-colors duration-200">
        Login
      </button>
    </nav>
  );
};



export default NavBar;
