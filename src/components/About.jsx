import '../components/about.css';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

export default function About() {




    return (
        <motion.div
            className={` about container-fluid p-2`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >


            <h3>About Me</h3>

            <div className='w-75'>
                <p>
                    Hi, I’m Bhanuprasad Boda, a passionate React Developer. I enjoy
                    building clean and user-friendly web experiences, with skills in
                    HTML, CSS, JavaScript and React.
                </p>

                <p>
                    During my journey, I completed a 3-month training internship
                    focused on aptitude and communication skills, which helped me grow
                    not only technically but also in problem-solving and teamwork.
                </p>

                <p>
                    My career objective is to pursue a rewarding career as a software
                    developer in a reputed company where I can apply my knowledge and
                    skills to contribute to organizational goals while continuously
                    learning and improving.
                </p>
            </div>

            <div className='button-container'>
                <div className='a1'>
                    <Link to='/'><button>Home</button></Link>
                    <Link to='/skills'><button>Skills</button></Link>
                </div>
                <div className='a2'>
                    <Link to='/projects'><button>Projects</button></Link>
                    <Link to='/contact'><button>Contact</button></Link>
                </div>
            </div>
        </motion.div>
    );
}
