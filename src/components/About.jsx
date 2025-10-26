import '../components/about.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';





export default function About(){


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

    return(
        <motion.div className={`${mode}  p-2 about container-fluid`} initial={{ opacity: 0 }} animate={{ opacity: '100%' }}  transition={{ duration: 1 }}>
          <div className={`${sample}`} onClick={handleclick} ></div>

            <h3 className='d-flex justify-content-center'>About Me</h3>
            
            <div className='w-75'>
                            <p className=''>Hi, I’m Bhanuprasad Boda, a passionate React Developer. I enjoy
            building clean and user-friendly web experiences,
            with skills in HTML, CSS, JavaScript and React.</p>

            <p className=''>During my journey, I completed a 3-month training
            internship focused on aptitude and communication skills,
            which helped me grow not only technically
            but also in problem-solving and teamwork.</p>

            <p className=''>My career objective is to pursue a rewarding
            career as a software developer in a reputed 
            company where I can apply my knowledge and 
            skills to contribute to organizational goals
            while continuously learning and improving.</p>
            </div>
            <div className='container  w-100'>
                    <div className=' d-flex a1 justify-content-around'>
                        <Link to='/'><div className=' col-6  d-flex justify-content-center'>Home</div></Link>
                        <Link to='/skills'><div className=' col-6 d-flex justify-content-center'>Skills</div></Link>
                    </div>
                    <div className='d-flex a2 justify-content-around'>
                        <Link to='/projects'><div className='col-6 m-2 d-flex justify-content-center'>Projects</div></Link>
                        <Link to='/contact'><div className='col-6 m-2 d-flex justify-content-center'>Contact</div></Link>
                    </div>
                </div>
                
        </motion.div>
    )
}