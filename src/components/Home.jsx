import React, { useState, useEffect } from 'react';
import '../components/home.css';
import { Link } from 'react-router-dom';

function Typewriter() {
  const fullText = "Hello Everyone! I am Bhanuprasad Boda Passionate Frontend Developer.";
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
    if(sample==='bi bi-sun'){
      setSample('bi bi-moon-fill')
      setMode('dark-mode')
    } else {
      setSample('bi bi-sun')
      setMode('')
    }
  }

  return (
    <div className={`home ${mode}`}>
      {/* Dark mode toggle */}
      <div className={`toggle-icon ${sample}`} onClick={handleclick}></div>

      <div className="hero-section container-fluid d-flex justify-content-center flex-wrap">
        {/* IMAGE */}
        <div className="section-image w-100 d-flex justify-content-center align-items-center">
          <img className="rounded-circle" src="./images/Img.png" alt="Profile" />
        </div>

        {/* TYPEWRITER */}
        <div className="section-typewriter w-100 d-flex justify-content-center">
          <Typewriter />
        </div>

        {/* BUTTONS */}
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
  )
}
