import React from "react";
import "./about.css";

export default function About() {
    return (
        <section className="about-section">
            <div className="about-card">
                <h2 className="about-title">About Me</h2>
                <p className="about-description">
                    Hi, I'm <strong>Zakaria Ait Laasri</strong>, a passionate Full Stack Developer with a focus on building
                    modern web applications that are fast, scalable, and user-friendly.
                    I specialize in JavaScript, React.js, Node.js, and UI/UX design.
                </p>
                <p className="about-description">
                    My goal is to create seamless digital experiences that not only function efficiently but also provide users with intuitive interactions. I am always eager to learn new technologies and improve my skills.
                </p>
                <button className="about-btn">See My Work</button>
            </div>
        </section>
    );
}
