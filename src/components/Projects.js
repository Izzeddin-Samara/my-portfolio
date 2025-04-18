import React from "react";
import { GiMuscleUp } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";

import Card from 'react-bootstrap/Card';

const ProjectCard = ({ icon, title, overview, stack, githubLink }) => (
    <div className="col-md-6 col-lg-6 col-xl-4 mb-4 d-flex align-items-stretch mt-5">
        <Card className="custom-card h-100 p-3">
            <Card.Body className="d-flex flex-column">
                <Card.Title>
                    <h2 className="text-center">{icon} {title}</h2>
                </Card.Title>
                <div className="flex-grow-1">
                    <Card.Text>
                        <h6><strong>Overview</strong></h6>
                        <p>{overview}</p>
                        <h6><strong>Technology Stack</strong></h6>
                        <ul>
                            {stack.map((tech, index) => (
                                <li key={index}><p>{tech}</p></li>
                            ))}
                        </ul>
                    </Card.Text>
                </div>
                <div className="mt-auto d-flex justify-content-center">
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-url">
                        <button>View on GitHub</button>
                    </a>
                </div>
            </Card.Body>
        </Card>
    </div>

);

const Projects = () => {
    const projects = [
        {
            icon: <GiMuscleUp aria-label="Fitness Track Icon" />,
            title: "FitnessTrack",
            overview: "A fitness web application, That allows users to book sessions with coaches, leave reviews, and includes features like coach applications, coach profile management, and a contact form.",
            stack: [
                "Frontend: HTML, CSS, JavaScript and Bootstrap",
                "Backend: Django / Python",
                "Database: MySQL"
            ],
            githubLink: "https://github.com/Izzeddin-Samara/Fitness_Track"
        },
        {
            icon: <FaTools aria-label="Technicians Hub Icon" />,
            title: "Technicians Hub",
            overview: " A web application that connects users with professional technicians across a variety of trades including electricians and more, It features appointments booking, reviews, and contact form",
            stack: [
                "Frontend: HTML, CSS, JavaScript and Bootstrap",
                "Backend: Django / Python",
                "Database: MySQL"
            ],
            githubLink: "https://github.com/talakh1798/Technicians-Hub"
        },
        {
            icon: <IoMdRocket aria-label="TechNova Icon" />,
            title: "TechNova",
            overview: "Technova is a modern software services website, offering a range of digital solutions including custom software development, cloud services, UI/UX design, cybersecurity, IT consulting, and digital transformation. It showcases company's services in a clean, responsive, and professional layout.",
            stack: [
                "Frontend: React, Tailwind CSS",
                
            ],
            githubLink: "https://github.com/Izzeddin-Samara/TechNova"
        }
    ];

    return (
        <div className="mt-5">
            <h1 className="text-center projects-head">Projects <i class="bi bi-folder-fill"></i></h1>
            <div className="container">
                <div className="row justify-content-center">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            icon={project.icon}
                            title={project.title}
                            overview={project.overview}
                            stack={project.stack}
                            githubLink={project.githubLink}
                        />
                    ))}
                </div>
            </div>

        </div>

    );
};

export default Projects;
