import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-description">
        Feel free to reach out for collaborations or just a friendly hello!
      </p>
      
      <form className="contact-form">
        <input type="text" placeholder="Your Name" className="contact-input" required />
        <input type="email" placeholder="Your Email" className="contact-input" required />
        <textarea placeholder="Your Message" className="contact-textarea" required></textarea>
        <button type="submit" className="contact-button">Send Message</button>
      </form>

      <div className="contact-links">
        <a href="zakaria.laasrawi@gmail.com" className="contact-link">📧 Email</a>
        <a href="https://www.linkedin.com/in/zakaria-ait-laasri-941734262/" className="contact-link">💼 LinkedIn</a>
        <a href="https://github.com/Zaki-dev23" className="contact-link">🐱 GitHub</a>
      </div>
    </section>
  );
}
