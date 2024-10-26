import React, { useEffect, useState } from 'react';
import './Home.css';
import Img74 from '../assets/Img74.png';

const Home = () => {
    const [role, setRole] = useState(''); // State to handle dynamic text

    useEffect(() => {
        const roles = "Full Stack Developer"; // Text to type
        let index = 0;

        const typingEffect = setInterval(() => {
            setRole(roles.slice(0, index + 1)); // Reset text at every step
            index++;
            if (index === roles.length) {
                clearInterval(typingEffect); // Stop typing effect when the text is fully typed
            }
        }, 150); // Adjust the speed of typing effect (in milliseconds)

        return () => clearInterval(typingEffect); // Cleanup interval when component unmounts
    }, []);

    // Function to handle CV download
    const handleDownload = () => {
        const link = document.createElement('a'); // Create a link element
        link.href = `${process.env.PUBLIC_URL}/cv-ajay-sharma.pdf`; // Set the URL to the CV file
        link.download = 'cv-ajay-sharma.pdf'; // Set the download attribute
        document.body.appendChild(link); // Append the link to the body
        link.click(); // Trigger the click event
        document.body.removeChild(link); // Remove the link after triggering
    };

    return (
        <div className="home-container">
            <div className="left-section">
                <div className="static-text">
                    <h1>Hi, Myself</h1>
                    <h1><span className="dynamic-role">{role}</span></h1> {/* Dynamic role */}
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
                    <button onClick={handleDownload}>Download CV</button> {/* Call the download function */}
                </div>
            </div>
            <div className="right-section">
                <div className="photo-container">
                    <img src={Img74} alt="Ajay Sharma" />
                </div>
            </div>
        </div>
    );
};

export default Home;

