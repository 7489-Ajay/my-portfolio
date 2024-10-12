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
            setNewProject({ title: '', description: '', link: '' }); // Reset form
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

