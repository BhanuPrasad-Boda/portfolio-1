import { motion } from "framer-motion";
import '../components/skills.css';
import { useState } from "react";

import Navbar from "./Navbar";

export default function Skills() {

  const [activeCard, setActiveCard] = useState(null);



  const cards = [
    { name: "HTML", img: "./images/html-.jpeg", percent: "90%" },
    { name: "CSS", img: "./images/css-.webp", percent: "85%" },
    { name: "JavaScript", img: "./images/js.jpeg", percent: "80%" },
    { name: "React", img: "./images/react-.webp", percent: "75%" },
  ];

  return (
    <motion.div 
      className={` skills-bg  `} 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >

      <motion.h4
        className="d-flex skills-heading justify-content-center container-fluid"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Technical Skills
      </motion.h4>

      <div className="cards">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={`card ${activeCard === index ? 'active' : ''}`}
            onMouseEnter={() => setActiveCard(index)}
            onMouseLeave={() => setActiveCard(null)}
            onClick={() => setActiveCard(index)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
          >
            <div className="card-header">{card.name}</div>
            <div className="card-body">
              <img src={card.img} alt={card.name} />
            </div>
           
          </motion.div>
        ))}
      </div>

      <Navbar active={['skills','resume']} />
    </motion.div>
  );
}
