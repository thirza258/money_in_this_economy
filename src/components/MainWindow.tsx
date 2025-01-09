import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import Dashboard from './Dashboard';
import Profile from './Profile';

const MainWindow: React.FC = () => {
  return (
    <div className="ml-64 mt-12 p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default MainWindow;
