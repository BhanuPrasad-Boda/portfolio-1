import React, { useState, useEffect } from 'react';
import '../components/home.css';
import { Link } from 'react-router-dom';

function Typewriter() {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) 
        return "Good Morning! 🌞 I am Bhanuprasad Boda, Passionate Frontend Developer.";
    else if (hour >= 12 && hour < 16) 
        return "Good Afternoon! 🌤 I am Bhanuprasad Boda, Passionate Frontend Developer.";
    else 
        return "Good Evening! 🌇 I am Bhanuprasad Boda, Passionate Frontend Developer.";
  }

  const fullText = getGreeting();
  const [displayedText, setDisplayedText] = useState('');
  const typingSpeed = 100;

  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timer);
    }
  }, [displayedText, fullText]);

  return (
    <div className='d-flex justify-content-center m-4'>
      <h3>
        <i>{displayedText}</i>
        <span className="cursor">|</span>
      </h3>
    </div>
  );
}

export default function Home() {
  const [sample, setSample] = useState('bi bi-sun');
  const [mode, setMode] = useState('');

  function handleclick() {
    if(sample === 'bi bi-sun'){
      setSample('bi bi-moon-fill');
      setMode('dark-mode');
    } else {
      setSample('bi bi-sun');
      setMode('');
    }
  }

  return (
    <div className={`home ${mode}`}>
      


      <div className="hero-section container-fluid d-flex justify-content-center flex-wrap">
        
        <div className="section-image w-100 d-flex justify-content-center align-items-center">
          <img className="rounded-circle" src="./images/image1.png " alt="Profile" />
        </div>

       
        <div className="section-typewriter w-100 d-flex justify-content-center">
          <Typewriter />
        </div>

        
        <div className="section-buttons w-100 d-flex justify-content-center align-items-center">
          <div className="button-container container w-50">
            <Link to='/about'><div className="col-6">About</div></Link>
            <Link to='/skills'><div className="col-6">Skills</div></Link>
            <Link to='/projects'><div className="col-6">Projects</div></Link>
            <Link to='/contact'><div className="col-6">Contact</div></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
