import { motion } from "motion/react" 
import '../components/projects.css';
import { useState } from "react";
import{Link} from 'react-router-dom';



 export default function Projects(){

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
        


      <motion.div className={`${mode}  container-fluid`} initial={{transform: 'translateY(-300px)', opacity: 0 }} animate={{transform: 'translateY(0)', opacity: 1 }}  transition={{ duration: 1 }}>
        <div className={` ${sample} p-2`} onClick={handleclick}></div>
         <h3 className="d-flex justify-content-center">PROJECTS</h3>

      <div className="projects container-fluid">
            <div className="project container-fluid">
               <div>
                 <span className="">BMI Calculator</span>
                 <div>A simple and responsive BMI Calculator application built with React, that allows users to calculate their Body Mass Index based on height and weight inputs.</div>
               </div>
               <div className=" d-flex justify-content-center align-items-center"><a className="btn btn-primary" href="https://bmi-drab-seven.vercel.app/">Click here</a></div>
            </div>
            <div className="project mt-3 container-fluid">
                <div>
                 <span className="">To-Do Application</span>
                 <div>
                    A productivity-focused To-Do list application built using React.js . It allows users to organize tasks, prioritize work, and track completion status.
                 </div>
               </div>
               <div className=" d-flex justify-content-center align-items-center"><a className="btn btn-primary" href="https://to-do-app-5wyo-bhanuprasad-bodas-projects.vercel.app/">Click here</a></div>
            </div>
      </div>
            
            <div className='container probtn w-50'>
                    <div className=' d-flex b1 justify-content-around'>
                        <Link to='/' className="c1"><div className=' col-6  d-flex justify-content-center'>Home</div></Link>
                        <Link to='/about' className="c1"><div className=' col-6 d-flex justify-content-center'>About</div></Link>
                    </div>
                    <div className='d-flex b2 justify-content-around'>
                        <Link to='/skills' className="c1"><div className='col-6 d-flex justify-content-center'>Skills</div></Link>
                        <Link to='/contact' className="c1"><div className='col-6  d-flex justify-content-center'>Contact</div></Link>
                    </div>
                </div>
        </motion.div>
        
        
        
    )
 }