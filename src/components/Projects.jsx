import { motion } from "motion/react";
import "../components/projects.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
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
    <motion.div
      className={`${mode} projects-container container-fluid`}
      initial={{ transform: "translateY(-300px)", opacity: 0 }}
      animate={{ transform: "translateY(0)", opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* SUN ICON */}
      <div className={`sun-toggle ${sample}`} onClick={handleclick}></div>

      <h3 className="title">PROJECTS</h3>

      {/* PROJECTS GRID */}
      <div className="projects-grid">
        <div className="project-card">
          <img
            className="project-image"
            src="https://th.bing.com/th/id/OIP.FOuCu_sI-_00uAir6qaBSQHaEv?w=242&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.5&pid=1.7&rm=3&ucfimg=1"
            alt="BMI Calculator"
          />
          <div className="project-title">BMI Calculator</div>
          <div className="project-desc">
            A simple and responsive BMI Calculator application built with React,
            that allows users to calculate BMI.
          </div>
          <a
            href="https://bmi-drab-seven.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="project-button">Click here</button>
          </a>
        </div>

        <div className="project-card">
          <img
            className="project-image"
            src="https://th.bing.com/th/id/OIP.opB25csDZbkdrDPey1ZqNgHaEK?w=264&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.5&pid=1.7&rm=3&ucfimg=1"
            alt="To-Do App"
          />
          <div className="project-title">To-Do Application</div>
          <div className="project-desc">
            A productivity To-Do List app built with React.js to organize daily
            tasks and track progress.
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

      {/* NAVIGATION BUTTONS */}
      <div className="container probtn w-50 mt-5">
        <div className="d-flex b1 justify-content-around">
          <Link to="/" className="c1">
            <div className="col-6 d-flex justify-content-center">Home</div>
          </Link>
          <Link to="/about" className="c1">
            <div className="col-6 d-flex justify-content-center">About</div>
          </Link>
        </div>
        <div className="d-flex b2 justify-content-around">
          <Link to="/skills" className="c1">
            <div className="col-6 d-flex justify-content-center">Skills</div>
          </Link>
          <Link to="/contact" className="c1">
            <div className="col-6 d-flex justify-content-center">Contact</div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
