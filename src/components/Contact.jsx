import React from "react";



import "./Contact.css";
import Navbar from "./Navbar";

import ContactWaveBackground from "./ContactWaveBackground";



const Contact = () => {



  return (
    <div className={` contact-page`}>

      
      <ContactWaveBackground />

      <div className="contact-container">
        <h2 className="contact-title" style={{ fontFamily: "Times New Roman" }}>
          CONTACT ME
        </h2>

        <p className="contact-subtitle">
          I'd love to hear from you! Fill out the form below or reach me directly.
        </p>

        <div className="contact-content d-flex flex-wrap justify-content-between">

          
          <div className="contact-form">
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
          <div className="d-flex justify-content-evenly"> <p> <a href="mailto:Sivabhanuboda@gmail.com" className="bi-envelope-at fs-3" > </a></p>
            <p> <a href="tel:+919014399400" className="bi-telephone fs-3"> </a></p>
            <p><a href="https://wa.me/919014399400" className="bi-whatsapp fs-3"> </a></p></div>
            <p>📍 Andhra Pradesh, India</p>
          <Navbar active={['contact','home','skills','about','projects','education']} />
          </div>
          
        </div>

        
        <Navbar active={['contact','resume']} className='resume-btn' />

      </div>
    </div>
  );
};

export default Contact;
