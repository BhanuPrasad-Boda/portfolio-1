import React, { useState } from "react";
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
    <div className={`${mode} container-fluid contact-page`}>
      
      {/* Theme Icon */}
      <div className={`${sample} theme-icon`} onClick={handleclick}></div>

      <div className="contact-container">
        <h2 className="contact-title" style={{ fontFamily: "Times New Roman" }}>
          CONTACT ME
        </h2>

        <p className="contact-subtitle">
          I'd love to hear from you! Fill out the form below or reach me directly.
        </p>

        <div className="contact-content d-flex flex-wrap justify-content-between">

          {/* CONTACT FORM */}
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

            {/* NAV BUTTONS */}
            <div className="d-flex flex-column align-items-center gap-3 mt-3">
              <Link to="/" className="btn btn-outline-primary w-50">Home</Link>
              <Link to="/about" className="btn btn-outline-primary w-50">About</Link>
              <Link to="/skills" className="btn btn-outline-primary w-50">Skills</Link>
              <Link to="/projects" className="btn btn-outline-primary w-50">Projects</Link>
              <Link to="/resume" className="btn btn-outline-success w-50">Resume</Link>
            </div>
          </div>

          {/* RIGHT SIDE INFO BOX */}
          <div className="contact-info text-center">
            <h3>Get in Touch</h3>
            <p>📧 <a href="mailto:Sivabhanuboda@gmail.com">Sivabhanuboda@gmail.com</a></p>
            <p>📞 <a href="tel:+919014399400">+91 90143 99400</a></p>
            <p>📍 Andhra Pradesh, India</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
