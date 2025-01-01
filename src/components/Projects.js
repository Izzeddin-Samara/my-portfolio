import React from "react";
import { GiMuscleUp } from "react-icons/gi";
import { FaTools } from "react-icons/fa";

const Projects = () => {
    return (
        <div>
            <h1>Projects</h1>
            <div>
                <div>
                    <h2><GiMuscleUp /> FitnessTrack</h2>
                    <h5>Overview</h5>
                    <p>FitnessTrack is a professional web application designed to connect users with certified fitness coaches to help them achieve their fitness goals. The platform allows users to browse coach profiles, book sessions, and leave reviews, all while maintaining a simple and intuitive user experience. Automated email notifications keep both users and coaches informed about session bookings, updates, and cancellations. Coaches are added to the platform by the admin, and they can log in to manage their profiles, view their schedules, and see user reviews. The platform also features a Contact Page for user support and a Coach Application Form for qualified professionals to join the platform.</p>
                    <h5>Technology Stack</h5>
                    <ul>
                        <li><p>Frontend: HTML, CSS, JavaScript and Bootstrap</p> </li>
                        <li><p>Backend: Django / Python</p> </li>
                        <li><p>Database: MySQL</p> </li>
                    </ul>
                    <p><a href="https://github.com/Izzeddin-Samara/Fitness_Track"><button>View on GitHub</button></a></p>
                </div>

                <div>
                    <h2><FaTools /> Technicians Hub</h2>
                    <h5>Overview</h5>
                    <p>Technicians Hub is an innovative web application that serves as a bridge between users and skilled technicians across a variety of trades including electricians, carpenters, plumbers, smiths, bricklayers, and maids. This platform facilitates seamless interaction by allowing users to conveniently book appointments with professionals based on their specific service needs. Each technician profile includes detailed information on skills, past work, and user reviews, ensuring transparency and trust. Whether you need urgent repairs, routine maintenance, or skilled labor for a special project, Technicians Hub provides a reliable, user-friendly solution.</p>
                    <h5>Technology Stack</h5>
                    <ul>
                        <li><p>Frontend: HTML, CSS, JavaScript and Bootstrap</p> </li>
                        <li><p>Backend: Django / Python</p> </li>
                        <li><p>Database: MySQL</p> </li>
                    </ul>
                    <p><a href="https://github.com/talakh1798/Technicians-Hub"><button>View on GitHub</button></a></p>
                </div>

            </div>
        </div>
    );
}

export default Projects;
