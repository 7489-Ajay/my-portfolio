import React, { useState } from 'react';
import './Project.css'; // Import the CSS file

const Project = () => {
    const [projects, setProjects] = useState([
        {
            id: 1,
            title: 'Portfolio Website',
            description: 'A personal portfolio website built using React and styled-components.',
            link: 'https://github.com/yourusername/portfolio-website',
        },
        {
            id: 2,
            title: 'E-commerce App',
            description: 'An e-commerce platform with product listings, cart functionality, and payment integration.',
            link: 'https://github.com/yourusername/ecommerce-app',
        },
        // Add more projects here
    ]);

    const addProject = () => {
        const newProject = {
            id: projects.length + 1,
            title: 'New Project Title',
            description: 'Description of the new project.',
            link: 'https://github.com/yourusername/new-project',
        };
        setProjects([...projects, newProject]);
    };

    return (
        <div className="projects-container">
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
            <button onClick={addProject} className="add-project-btn">
                Add New Project
            </button>
        </div>
    );
};

export default Project;
