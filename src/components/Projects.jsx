import { motion } from "motion/react";
import "../components/projects.css";
import { Link } from "react-router-dom";

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
            src="https://th.bing.com/th/id/OIP.FOuCu_sI-_00uAir6qaBSQHaEv?w=242&h=180"
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

      </div>

      
      <div className="container probtn w-50 mt-5">
        <div className="d-flex b1 justify-content-around">
          <Link to="/" className="c1">
            <div className=" d-flex justify-content-center">Home</div>
          </Link>
          <Link to="/about" className="c1">
            <div className=" d-flex justify-content-center">About</div>
          </Link>
        </div>

        <div className="d-flex b2 justify-content-around">
          <Link to="/skills" className="c1">
            <div className=" d-flex justify-content-center">Skills</div>
          </Link>
          <Link to="/contact" className="c1">
            <div className=" d-flex justify-content-center">Contact</div>
          </Link>
        </div>
      </div>

    </motion.div>
  );
}
