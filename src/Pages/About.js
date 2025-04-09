
import React from 'react';
import './About.css'; 

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="about-header">
                    <h2>About Me</h2>
                    <p>Discover more about my journey, education, career goals, interests, and hobbies.</p>
                </div>
                <div className="about-content">
                    <div className="about-item">
                        <div className="about-text">
                            <h3>Education</h3>
                            <p><strong>10th Grade:</strong> [Shri Krishna Inter School], [2018]</p>
                            <p><strong>12th Grade:</strong> [Shri Krishna Inter School], [2020]</p>
                            <p><strong>Graduation:</strong> [Ganga Institute Of technology And Management], [2020-2023]</p>
                            <p><strong>Post-Graduation:</strong> [Inverties University], [2024-2026]</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="about-text">
                            <h3>Career Goals</h3>
                            <p>I aspire to become a skilled Frontend Developer. [My goal] is to apply my web development knowledge to create clean, responsive interfaces and grow by contributing to real-world projects.</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="about-text">
                            <h3>Interests</h3>
                            <p>I am passionate about [frontend development], especially creating responsive user interfaces using React.js. I enjoy exploring new web technologies and improving user experience through clean design.</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="about-text">
                            <h3>Hobbies</h3>
                            <p>I enjoy listening to music as it helps me stay relaxed and manage stress during work. It often sparks creative ideas while designing user interfaces, allowing me to stay focused and inspired throughout the development process.</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="about-text">
                            <h3>Location</h3>
                            <p>I am currently based in [Budaun], actively exploring opportunities to grow as a frontend developer and staying connected with the latest trends in web development.</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="about-text">
                            <h3>Personal Philosophy</h3>
                            <p>I believe in lifelong learning, staying curious, and turning challenges into growth opportunities. For me, consistency, adaptability, and a positive mindset are key to personal and professional success.</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="about-text">
                            <h3>Achievements</h3>
                            <p>Throughout my academic journey, I led my team to secure 2nd position in a college-level Hackathon and successfully built multiple frontend projects. These milestones reflect my dedication to continuous learning and real-world application of my skills..</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;


