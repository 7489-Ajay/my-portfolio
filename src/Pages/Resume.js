import React from 'react';
import './Resume.css'; // Import the CSS file

const Resume = () => {
    return (
        <div className="resume-container">
            <header className="resume-header">
                <h1>Ajay Kumar Sharma</h1>
                <p>Software Developer | MCA Student</p>
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
                    <li>React.js</li>
                    <li>JavaScript (ES6+)</li>
                    <li>HTML5 & CSS3</li>
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>Version Control (Git)</li>
                </ul>
            </section>

            <section className="resume-section education-section">
                <h2>Education</h2>
                <div className="education-item">
                    <h3>Master of Computer Applications (MCA)</h3>
                    <h4>Inverties University - 2024 to Present</h4>
                    <p>• Relevant coursework: Advanced Programming, Data Structures, Algorithms, Web Development</p>
                </div>
                <div className="education-item">
                    <h3>Bachelor of Computer Applications (BCA)</h3>
                    <h4>Ganga Institute of Technology and Management - 2020 to 2023</h4>
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
                    <h3>Task Management App</h3>
                    <p>• Built a task management application using Node.js and Express, allowing users to manage tasks and track progress.</p>
                    <p>• Integrated a MongoDB database to store user data and tasks.</p>
                </div>
            </section>

            <section className="resume-section hackathon-section">
                <h2>Hackathon Achievement</h2>
                <div className="hackathon-item">
                    <h3>College Hackathon</h3>
                    <p>• Participated in the Intra-College Hackathon and secured 5th place among 50 teams.</p>
                    <p>• Developed a smart solution for automating student attendance using Node.js and React.js.</p>
                </div>
            </section>

            <section className="resume-section certification-section">
                <h2>Certifications</h2>
                <div className="certification-item">
                    <h3>Front-End Web Development with React</h3>
                    <p>• Coursera - Completed with distinction</p>
                </div>
                <div className="certification-item">
                    <h3>Python for Everybody</h3>
                    <p>• Coursera - Completed with distinction</p>
                </div>
            </section>
        </div>
    );
};

export default Resume; 