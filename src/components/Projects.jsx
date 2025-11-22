import { motion } from "motion/react";
import "../components/projects.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Projects() {
  return (
    <motion.div
      className="projects-container "
      initial={{ transform: "translateY(-300px)", opacity: 0 }}
      animate={{ transform: "translateY(0)", opacity: 1 }}
      transition={{ duration: 1 }}
    >

      <h3 className="title">PROJECTS</h3>

      
      <div className="projects-grid">
        
       
        <div className="project-card">
          <img
            className="project-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjfvv5CGQAvr-oC1nkQLvHY2ulKOs38gSCUw&s"
            alt="BMI Calculator"
          />
          <div className="project-title">BMI Calculator</div>
          <div className="project-desc">
            A simple and responsive BMI Calculator application built with React.
          </div>
          <a
            href="https://bmi-nine-taupe.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="project-button">Click here</button>
          </a>
        </div>

        
        <div className="project-card">
          <img
            className="project-image"
            src="https://th.bing.com/th/id/OIP.opB25csDZbkdrDPey1ZqNgHaEK?w=264&h=180"
            alt="To-Do App"
          />
          <div className="project-title">To-Do Application</div>
          <div className="project-desc">
            A productivity To-Do List app built with React.js to organize daily tasks.
          </div>
          <a
            href="https://to-do-app-5wyo-bhanuprasad-bodas-projects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="project-button">Click here</button>
          </a>
        </div>

                <div className="project-card">
          <img
            className="project-image"
            src="https://image.shutterstock.com/image-vector/portfolio-word-banner-vector-illustration-260nw-1200433627.jpg"
            alt="Personal Portfolio"
          />
          <div className="project-title">Personal Portfolio</div>
          <div className="project-desc">
            Turning pixels into experiences—frontend development with purpose and precision
          </div>
          <a
            href="https://portfolio-1-livid-phi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="project-button">Click here</button>
          </a>
        </div>
                

      </div>

      
    <Navbar active={['projects','resume']} />


    </motion.div>
  );
}
