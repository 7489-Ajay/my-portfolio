import React from 'react';
import './Footer.css'; // Footer ke CSS file ko import karein

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="about">
                    <h3>About Me</h3>
                    <p>
                        Hello! I'm Ajay Kumar Sharma, a passionate web developer dedicated to building exceptional digital experiences.
                    </p>
                </div>
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <ul>
                        <li>Email: <a href="mailto:ajay@example.com">ajaysharma987077@gmail.com</a></li>
                        <li>Phone: <a href="tel:+1234567890">+91 9557922701</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Ajay Kumar Sharma. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;

