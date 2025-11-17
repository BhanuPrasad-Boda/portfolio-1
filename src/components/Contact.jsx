import React, { useState } from "react";
import CheckBoxBackground from "./CheckBoxBackground";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const [sample, setSample] = useState("bi bi-sun");
  const [mode, setMode] = useState("");

  function handleclick() {
    if (sample === "bi bi-sun") {
      setSample("bi bi-moon-fill");
      setMode("dark-mode");
    } else {
      setSample("bi bi-sun");
      setMode("");
    }
  }

  return (
    <div className={`${mode} contact-page`}>

      
        <CheckBoxBackground />

      <div className="contact-container">
        <h2 className="contact-title" style={{ fontFamily: "Times New Roman" }}>
          CONTACT ME
        </h2>

        <p className="contact-subtitle">
          I'd love to hear from you! Fill out the form below or reach me directly.
        </p>

        <div className="contact-content d-flex flex-wrap justify-content-between">

          
          <div className="contact-form-left flex-grow-1 me-4">
            <form
              className="contact-form"
              action="mailto:Sivabhanuboda@gmail.com"
              method="POST"
              encType="text/plain"
            >
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>

          
          <div className="contact-info text-center">
            <h3>Get in Touch</h3>
            <p>📧 <a href="mailto:Sivabhanuboda@gmail.com">Sivabhanuboda@gmail.com</a></p>
            <p>📞 <a href="tel:+919014399400">+91 90143 99400</a></p>
            <p>📍 Andhra Pradesh, India</p>
          </div>
        </div>

        
        <div className="nav-buttons d-flex flex-column align-items-center gap-3 mt-4">
          <Link to="/" className="btn nav-btn">Home</Link>
          <Link to="/about" className="btn nav-btn">About</Link>
          <Link to="/skills" className="btn nav-btn">Skills</Link>
          <Link to="/projects" className="btn nav-btn">Projects</Link>
          <Link to="/resume" className="btn nav-btn resume-btn">Resume</Link>
        </div>

      </div>
    </div>
  );
};

export default Contact;
