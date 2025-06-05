import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './MyComponents/Navbar';
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import Project from './Pages/Project';
import Resume from './Pages/Resume';
import About from './Pages/About';
import Footer from './Pages/Footer';
import Skills from './Pages/Skills';
import Certificates from './Pages/Certificates';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

