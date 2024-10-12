import React from 'react';
import './Contact Us.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <div className="contact-options">
                <div className="contact-item">
                    <h3>Connect with us on WhatsApp:</h3>
                    <a 
                        href="https://wa.me/9557922701" // Yahan apna WhatsApp number daalna hai (without country code)
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="contact-link"
                    >
                        Chat on WhatsApp
                    </a>
                </div>
                
                <div className="contact-item">
                    <h3>Or email us directly:</h3>
                    <a 
                        href="ajaysharma987077@gmail.com" // Yahan apna Gmail address daalna hai
                        className="gmail-link"
                    >
                        Send an Email
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
