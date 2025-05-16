import React from 'react';
import './Resume.css'; 

const Resume = () => {
    return (
        <div className="resume-container">
            <header className="resume-header">
                <h1>Ajay Kumar Sharma</h1>
                <p>Frontend Developer | React.JS | MERN</p>
                <div className="contact-info">
                    <p>Email: <a href="mailto:ajaysharma987077@gmail.com">ajaysharma987077@gmail.com</a></p>
                    <p>Phone: +91 9557922701</p>
                    <p>LinkedIn: <a href="https://linkedin.com/in/ajay-sharma7489" target="_blank" rel="noopener noreferrer">linkedin.com/in/ajay-sharma7489</a></p>
                    <p>GitHub: <a href="https://github.com/7489-Ajay" target="_blank" rel="noopener noreferrer">github.com/7489-Ajay</a></p>
                    <p>Address: Shivpuram Gali No. 4, Budaun, Uttar Pradesh, 243601</p> {/* Address added */}
                </div>
            </header>

            <section className="resume-section skills-section">
                <h2>Skills</h2>
                <ul className="skills-list">
                    <li>HTML5 & CSS3</li>
                    <li>JavaScript (ES6+)</li>
                    <li>Bootstrap, Tailwind CSS</li>
                    <li>MongoDB, Express.js, React.js, Node.js</li>
                    <li>Git & Github</li>
                </ul>
            </section>

            <section className="resume-section education-section">
                <h2>Education</h2>
                <div className="education-item">
                    <h3>Master of Computer Applications (MCA)</h3>
                    <h4>Inverties University, Bareilly[Up] - 2024 to 2026 [pursuing]</h4>
                    <p>• Relevant coursework: Advanced Programming, Data Structures, Algorithms, Web Development</p>
                </div>
                <div className="education-item">
                    <h3>Bachelor of Computer Applications (BCA)</h3>
                    <h4>Ganga Institute of Technology and Management, Jhajjar [Haryana] - 2020 to 2023</h4>
                    <p>• Relevant coursework: Programming Principles, Database Management, Software Engineering</p>
                </div>
            </section>

            <section className="resume-section projects-section">
                <h2>Projects</h2>
                <div className="project-item">
                    <h3>Portfolio Website</h3>
                    <p>• Developed a personal portfolio website using React.js, showcasing my skills, projects, and contact information.</p>
                    <p>• Implemented responsive design to ensure compatibility across various devices.</p>
                </div>
                <div className="project-item">
                    <h3> Interior Catalogue Website</h3>
                    <p>• Developed a fully responsive personal portfolio using React.js and Tailwind CSS,</p>
                    <p>• showcasing live projects with GitHub and LinkedIn integration. Deployed on netlify.</p>
                </div>
            </section>

            <section className="resume-section hackathon-section">
                <h2>Hackathon Achievement</h2>
                <div className="hackathon-item">
                    <h3>College Hackathon</h3>
                    <p>• Led my team to secure 2nd position in a college-level Hackathon, demonstrating leadership and technical problem-solving skills.</p>
                    <p>• Built a smart solution to automate student attendance using React.js and Node.js, focusing on real-time efficiency and user-friendly design.</p>
                </div>
            </section>

            <section className="resume-section certification-section">
                <h2>Certifications</h2>
                <div className="certification-item">
                    <h3>React.js</h3>
                    <p>• Greatlearning - Completed with distinction</p>
                </div>
                <div className="certification-item">
                    <h3>JavaScript</h3>
                    <p>• Simplilearn - Completed with distinction</p>
                </div>
            </section>
        </div>
    );
};

export default Resume; 