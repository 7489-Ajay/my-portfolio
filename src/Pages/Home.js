import React, { useEffect, useState } from 'react';
import './Home.css';
import ajaycrop from '../assets/ajaycrop.png';

const Home = () => {
    const [role, setRole] = useState('');

    useEffect(() => {
        const roles = "Frontend Developer";
        let index = 0;

        const typingEffect = setInterval(() => {
            setRole(roles.slice(0, index + 1));
            index++;
            if (index === roles.length) {
                clearInterval(typingEffect);
            }
        }, 150);

        return () => clearInterval(typingEffect);
    }, []);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}/Ajay_Sharma_Frontend_Developer_Resume_.pdf`;
        link.download = 'Ajay_Sharma_Frontend_Developer_Resume_.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="home-container">
            <div className="left-section">
                <div className="static-text">
                    <h1>Hi, Myself</h1>
                    <h1><span className="dynamic-role">{role}</span></h1>
                </div>
                <div className="introduction">
                    <p>Hello, I'm Ajay Sharma, currently pursuing my MCA with a deep passion for technology and software development. My academic journey has sharpened my skills in programming and problem-solving, and I'm eager to apply this knowledge to real-world challenges. I thrive on innovation and am committed to continuous learning, aiming to contribute meaningfully to the tech industry.</p>
                </div>
                <div className="social-links">
                    <a href="https://github.com/7489-Ajay" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i> 
                    </a>
                    <a href="https://linkedin.com/in/ajay-sharma7489" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://instagram.com/ajay___sharma90" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i> 
                    </a>
                    <a href="https://facebook.com/profile.php?id=100011119093566&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i> 
                    </a>
                </div>
                <div className="download-cv">
                    <button onClick={handleDownload}>Download CV</button>
                </div>
            </div>
            <div className="right-section">
                <div className="photo-container">
                    <img src={ajaycrop} alt="Ajay Sharma" />
                </div>
            </div>
        </div>
    );
};

export default Home;


