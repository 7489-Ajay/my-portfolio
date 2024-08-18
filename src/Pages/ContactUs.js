import React from 'react';
import './Contact Us.css'; // Ensure your CSS file is named correctly

const ContactUs = () => {
    return (
        <div className="contact-container">
            <h2>Contact Me</h2>
            <div className="contact-options">
                {/* Gmail Contact Option */}
                <div className="contact-option">
                    <a href="mailto:ajaysharma987077@gmail.com" className="contact-link">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" 
                             alt="Gmail" 
                             className="contact-icon"/>
                        <p>Send me an Email</p>
                    </a>
                </div>

                {/* WhatsApp Contact Option */}
                <div className="contact-option">
                    <a href="https://wa.me/9557922701" className="contact-link">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                             alt="WhatsApp" 
                             className="contact-icon"/>
                        <p>Chat with me on WhatsApp</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
