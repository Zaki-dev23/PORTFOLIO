import React from "react";
import "./project.css";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A fully functional e-commerce website with secure payments, product management, and user authentication.",
    techStack: ["React.js", "Node.js", "MongoDB", "Stripe"],
    image: "https://source.unsplash.com/400x300/?technology",
    link: "#"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A modern personal portfolio website showcasing projects, skills, and contact details.",
    techStack: ["React.js", "Tailwind CSS", "Framer Motion"],
    image: "https://source.unsplash.com/400x300/?coding",
    link: "#"
  },
  {
    id: 3,
    title: "Chat Application",
    description: "A real-time chat application using WebSockets for instant messaging.",
    techStack: ["React.js", "Socket.io", "Express.js"],
    image: "https://source.unsplash.com/400x300/?chat",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-tech">
                {project.techStack.map((tech, index) => (
                  <li key={index} className="tech-item">{tech}</li>
                ))}
              </ul>
              <a href={project.link} className="project-link">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
