import { motion } from "framer-motion";
import '../components/skills.css';
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Skills() {
  const [sample, setSample] = useState('bi bi-sun');
  const [mode, setMode] = useState('');
  const [activeCard, setActiveCard] = useState(null);

  function handleclick(e) {
    if(sample==='bi bi-sun'){
      setSample('bi bi-moon-fill')
      setMode('dark-mode')
    } else {
      setSample('bi bi-sun')
      setMode('')
    }
  }

  const cards = [
    { name: "HTML", img: "./images/html.png", percent: "90%" },
    { name: "CSS", img: "./images/css.jpeg", percent: "85%" },
    { name: "JavaScript", img: "./images/js.jpeg", percent: "80%" },
    { name: "React", img: "./images/react.jpeg", percent: "75%" },
  ];

  return (
    <motion.div 
      className={`${mode} skills-bg  `} 
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
            <div className="card-footer">{card.percent}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className='container w-100'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className='d-flex c1 justify-content-around'>
          <Link className="link" to='/'><div className='nav-btn'>Home</div></Link>
          <Link className="link" to='/about'><div className='nav-btn'>About</div></Link>
        </div>
        <div className='d-flex c2 justify-content-around'>
          <Link className="link" to='/projects'><div className='nav-btn'>Projects</div></Link>
          <Link className="link" to='/contact'><div className='nav-btn'>Contact</div></Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
