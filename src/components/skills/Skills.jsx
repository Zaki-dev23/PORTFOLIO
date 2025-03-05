import React from 'react';
import "./skills.css"
// import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaNodeJs } from 'react-icons/fa'; // Adding icons for better UX

export default function Skills() {
  return (
    <div className="skills-container">
      <h2 className="title">My Skills</h2>
      
      {/* Front-End Skills Card */}
      <div className="skills-card">
        <h3 className="skills-card-title">Front-End Skills</h3>
        <ul className="category-skills">
          <li> HTML5, CSS3, JavaScript (ES6+)</li>
          <li> React.js</li>
          <li>Responsive Web Design (Flexbox, Grid, Media Queries)</li>
          <li>CSS Frameworks: Bootstrap, Tailwind CSS</li>
          <li> Version Control (Git, GitHub)</li>
        </ul>
      </div>

      {/* Back-End Skills Card */}
      <div className="skills-card">
        <h3 className="skills-card-title">Back-End Skills</h3>
        <ul className="category-skills">
          <li> Node.js, Express.js</li>
          <li>MongoDB {/* PostgreSQL, MySQL */}</li>
          <li>JWT, Passport.js {/* OAuth */}</li>
          <li>RESTful APIs, GraphQL</li>
          {/* <li>WebSockets, Real-Time Communication</li> */}
          {/* <li>Deployment: Docker</li> */}
        </ul>
      </div>
    </div>
  );
}
