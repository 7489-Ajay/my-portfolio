// About.js
import React from 'react';
import './About.css'; // Make sure to include the CSS file

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
                            <p>I aspire to become a [Desire Position/role] in the [Fullstack Developer]. My goal is to leverage my skills to drive innovation and make a meaningful impact in the industry.</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="about-text">
                            <h3>Interests</h3>
                            <p>I am passionate about [Your Interests], including [Specific Technologies, Fields, or Hobbies]. These interests fuel my enthusiasm and keep me engaged with the latest trends and advancements.</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="about-text">
                            <h3>Hobbies</h3>
                            <p>In my leisure time, I enjoy [Songs,Cricket], which help me maintain a balanced lifestyle and inspire creativity. Whether it's [Cricket], or [Song], these hobbies contribute to my personal growth.</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="about-text">
                            <h3>Location</h3>
                            <p>I am currently based in [Budaun], where I continue to explore new opportunities and contribute to local tech communities.</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="about-text">
                            <h3>Personal Philosophy</h3>
                            <p>I believe in continuous learning and adapting to change. My philosophy is to stay curious, embrace challenges, and strive for excellence in everything I do.</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="about-text">
                            <h3>Achievements</h3>
                            <p>Throughout my journey, I have achieved [Highlight a Major Achievement] and [Another Achievement]. These milestones reflect my commitment to personal and professional growth.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;


