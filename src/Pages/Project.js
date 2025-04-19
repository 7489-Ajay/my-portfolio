import React, { useState } from 'react';
import './Project.css'; 

const Project = () => {
    const [projects, setProjects] = useState([
        {
            id: 1,
            title: 'Responsive Landing Page',
            description: 'A modern, animated landing page using HTML, CSS, and JavaScript — featuring smooth scroll, hover effects, and responsive layout across all devices.',
            link: 'https://codvedalandingpage.netlify.app/',
        },

        {
            id: 1,
            title: 'Single Page Application (SPA)',
            description: 'A React.js-based portfolio-style SPA with smooth navigation, AOS animations, and component-based structure (Home, About, Contact).',
            link: 'https://codvedaspa.netlify.app/',
        },

        {
            id: 1,
            title: 'GitHub Repository Explorer (REST API Project)',
            description: 'A fully functional GitHub API Fetch app using React.js — includes search, sort by stars/forks, dark mode, animations, and live GitHub data display.',
            link: 'https://githubapifetch.netlify.app/',
        },

        
       
    ]);

    const [newProject, setNewProject] = useState({
        title: '',
        description: '',
        link: '',
    });

    const handleChange = (e) => {
        setNewProject({
            ...newProject,
            [e.target.name]: e.target.value,
        });
    };

    const addProject = () => {
        if (newProject.title && newProject.description && newProject.link) {
            const projectToAdd = {
                id: projects.length + 1,
                ...newProject,
            };
            setProjects([...projects, projectToAdd]);
            setNewProject({ title: '', description: '', link: '' }); 
        } else {
            alert('Please fill all fields.');
        }
    };

    return (
        <div className="projects-container">
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            View Project
                        </a>
                    </div>
                ))}
            </div>

            <div className="add-project-form">
                <h3>Add New Project</h3>
                <input
                    type="text"
                    name="title"
                    placeholder="Project Title"
                    value={newProject.title}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Project Description"
                    value={newProject.description}
                    onChange={handleChange}
                    required
                ></textarea>
                <input
                    type="url"
                    name="link"
                    placeholder="Project Link"
                    value={newProject.link}
                    onChange={handleChange}
                    required
                />
                <button onClick={addProject} className="add-project-btn">
                    Add Project
                </button>
            </div>
        </div>
    );
};

export default Project;

