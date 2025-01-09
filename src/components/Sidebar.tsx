import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="text-black w-32 h-screen p-4 fixed top-12 border-r-2 border-black">
      <ul>
        <li className="mb-4"><Link to="/">Home</Link></li>
        <li className="mb-4"><Link to="/dashboard">Dashboard</Link></li>
        <li className="mb-4"><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
