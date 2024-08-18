import React from 'react';
import './Home.css';
import Crop from '../assets/Crop.png';

const Home = () => {
    return (
        <div className="home-container">
            <div className="left-section">
                <div className="static-text">
                    <h1>Hi, Myself</h1>
                    <h1><span className="dynamic-role">Full stack Developer</span></h1> {/* You can change this text to any role you want */}
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
                    <button>Download CV</button>
                </div>
            </div>
            <div className="right-section">
                <div className="photo-container">
                    <img src={Crop} alt="Ajay Sharma" />
                </div>
            </div>
        </div>
    );
};

export default Home;
