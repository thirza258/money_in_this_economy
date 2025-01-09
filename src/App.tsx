import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import MainWindow from './components/MainWindow';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="flex">
          <Sidebar />
          <MainWindow />
        </div>
      </div>
    </Router>
  );
};

export default App;
