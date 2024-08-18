import React from 'react';
import Navbar from './MyComponents/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import ContactUs from './Pages/ContactUs';
import Project from './Pages/Project';
import Resume from './Pages/Resume';
import About from './Pages/About';

const App = () => {
  return (
    <Router>
      <div >
        <Navbar/> {/* Navbar को यहां जोड़ें */}
        <Routes>
          <Route />
          
          <Route  path="/" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/About" element={<About />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
        
        
      </div>
    </Router>
  );
};

export default App;
