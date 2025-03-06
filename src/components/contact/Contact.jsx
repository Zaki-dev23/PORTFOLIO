import React, { useEffect, useState } from "react";
import "./Contact.css";
import { db } from "../../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";

function Contact() {
  const [users, setUsers] = useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [text, setText] = useState("")


  const sendMessage = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "user"), {
        name,
        email,
        message : text,
        createdAt : new Date(),
      })

      alert("Message sent successfully!")
    } catch (error) {
      console.error("Error sending message :", error);
      alert("Failed to send message")
      
    }
  }
  


  const getUsers = async () => {
    const snapshot = await getDocs(collection(db,"user"));
    return snapshot.docs.map((doc)=> ({ id : doc.id , ...doc.data()}))
  }

  useEffect(()=> {
    fetchUsers();

  }, [])
  const fetchUsers = async () =>{
    const data = await getUsers()
    setUsers(data)
  }
  console.log({users});
  

  return (
    <section className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-description">
        Feel free to reach out for collaborations or just a friendly hello!
      </p>

      <form className="contact-form" onSubmit={sendMessage}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your Name" className="contact-input" required />
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your Email" className="contact-input" required />
        <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Your Message" className="contact-textarea" required></textarea>
        <button type="submit" className="contact-button">Send Message</button>
      </form>

      <div className="contact-links">
        <a href="mailto:zakaria.laasrawi@gmail.com" className="contact-link">📧 Email</a>
        <a href="https://www.linkedin.com/in/zakaria-ait-laasri-941734262/" className="contact-link">💼 LinkedIn</a>
        <a href="https://github.com/Zaki-dev23" className="contact-link">🐱 GitHub</a>
      </div>

    </section>
  );
}

export default Contact;
