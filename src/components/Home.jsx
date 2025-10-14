import React, { useState, useEffect } from 'react';
import '../components/home.css';
import { Link } from 'react-router-dom';

function Typewriter() {
  const fullText = "Hello Everyone! I am Bhanuprasad Boda Passionate Frontend Developer.";
  const [displayedText, setDisplayedText] = useState('');
  const typingSpeed = 100; // milliseconds per character

  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timer);
    }
  }, [displayedText, fullText, typingSpeed]);

  return (
    <div className='d-flex justify-content-center m-4'>
      <h3><i>{displayedText}</i></h3>
    </div>
  );
}

export default function Home() {

  const [sample, setSample] = useState('bi bi-sun');
  const [mode, setMode] = useState('');

  function handleclick(e){
    if(sample==='bi bi-sun'){
      setSample('bi bi-moon-fill')
      setMode('dark-mode')
    }else{
      setSample('bi bi-sun')
      setMode('')
    }
  }



  return (
    <div className={`home ${mode} `}>
      <div className={` ${sample} p-2`} onClick={handleclick}></div>
      <div className="w-100 container-fluid d-flex justify-content-between">
        
        <div className="w-100 d-flex justify-content-center align-items-center">
            
          <div className="container w-50">
            
            <div className="row r1 d-flex justify-content-center align-items-end">
              <Link to='/about' className='ab1'><div className="col-6 d-flex justify-content-center">About</div></Link>
              <Link to='/skills' className='ab1'><div className="col-6 d-flex justify-content-center">Skills</div></Link>
            </div>
            <div className="row r2 ">
              <Link to='/projects' className='ab'><div className="col-6 d-flex justify-content-center">Projects</div></Link>
              <Link to='/contact' className='ab'><div className="col-6 d-flex justify-content-center">Contact</div></Link>
            </div>
          </div>
        </div>
        <div className="w-100 d-flex justify-content-center align-items-center">
          <img className="rounded-circle" width={200} src="./images/Img.png" alt="Description" />
        </div>
      </div>
      <Typewriter />
    </div>
  );
}