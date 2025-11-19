import '../components/Education.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default function Education() {
    return (
        <motion.div
            className="education container-fluid p-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >

            <h2 className="edu-title">My Education</h2>

            <div className="edu-card">
                <h3>B.Sc. Computer Science</h3>
                <p><b>College:</b> Acharya Nagarjuna University,guntur</p>
                <p><b>Percentage:</b> 92.4%</p>
                <p><b>Year:</b> 2021 – 2024</p>
            </div>

            <div className="edu-card">
                <h3>Intermediate (MPC)</h3>
                <p><b>College:</b> Sri Gayatri Junior College ,kandukur</p>
                <p><b>Percentage:</b> 96.2%</p>
                <p><b>Year:</b> 2019 – 2021</p>
            </div>

            <div className="edu-card">
                <h3>SSC (10th Class)</h3>
                <p><b>School:</b> Vignan Vihar  English Medium High School</p>
                <p><b>Percentage:</b> 9.8 GPA</p>
                <p><b>Year:</b> 2018 – 2019</p>
            </div>

            <Navbar active="education" />

        </motion.div>
    );
}
