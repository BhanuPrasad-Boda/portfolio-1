import { motion } from "framer-motion";
import '../components/skills.css';
import { useState } from "react";
import { Link } from 'react-router-dom';






export default function Skills(){

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
        <motion.div  className={`${mode}  container-fluid`} >
            <div className={` ${sample} p-2`} onClick={handleclick}></div>
            <h4 className="d-flex justify-content-center container-fluid">Technical Skills</h4>
            <div className="cards  d-flex  justify-content-around">
                <div className="card">
                    <div className="card-header bg-danger">HTML</div>
                    <div className='card-body'><img src="./images/html.png" alt='HTML' width={100} /></div>
                    <div className="card-footer">90%</div>
                </div>
                <div className="card">
                    <div className="card-header bg-primary w-100">CSS</div>
                    <div className='card-body'><img src="./images/css.jpeg" alt='CSS' width={90} height={100} /></div>
                    <div className="card-footer">85%</div>
                </div>
               
                
            </div>
            <div className="cards  d-flex  justify-content-around">
                <div className="card">
                    <div className="card-header bg-warning">JavaScript</div>
                    <div className='card-body'><img src="./images/js.jpeg" alt='JavaScript' width={100} height={100} /></div>
                    <div className="card-footer">80%</div>
                </div>
                <div className="card">
                    <div className="card-header bg-info">React</div>
                    <div className='card-body'><img src="./images/react.jpeg" alt='React' width={90} height={100} /></div>
                    <div className="card-footer bg-info">75%</div>
                </div>
               

            </div>
            <div className='container  w-100'>
                    <div className=' d-flex c1 justify-content-around'>
                        <Link className="link" to='/'><div className='col-6   d-flex justify-content-center'>Home</div></Link>
                        <Link className="link" to='/about'><div className='col-6   d-flex justify-content-center'>About</div></Link>
                    </div>
                    <div className='d-flex c2 justify-content-around'>
                        <Link className="link" to='/projects'><div className='col-6   d-flex justify-content-center'>Projects</div></Link>
                        <Link className="link" to='/contact'><div className='col-6  d-flex justify-content-center'>Contact</div></Link>
                    </div>
                </div>

        </motion.div>
    )
}