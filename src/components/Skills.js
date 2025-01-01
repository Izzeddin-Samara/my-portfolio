import React from "react";


const Skills = () => {
    const skillIcons = {
        Python: "https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white",
        JavaScript: "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black",
        HTML5: "https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white",
        CSS3: "https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white",
        SQL: "https://img.shields.io/badge/SQL-003B57?style=flat&logo=databricks&logoColor=white",
        Django: "https://img.shields.io/badge/Django-092E20?style=flat&logo=django&logoColor=white",
        Flask: "https://img.shields.io/badge/Flask-000000?style=flat&logo=flask&logoColor=white",
        Express: "https://img.shields.io/badge/Express.js-404D59?style=flat&logo=express&logoColor=white",
        React: "https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB",
        "Leaflet.js": "https://img.shields.io/badge/Leaflet.js-199900?style=flat&logo=leaflet&logoColor=white",
        Jinja2: "https://img.shields.io/badge/Jinja2-B41717?style=flat&logo=jinja&logoColor=white",
        Jazzmin: "https://img.shields.io/badge/Jazzmin-000000?style=flat&logo=django&logoColor=white",
        jQuery: "https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white",
        Bootstrap: "https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white",
        MySQL: "https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white",
        MongoDB: "https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white",
        AJAX: "https://img.shields.io/badge/AJAX-005571?style=flat&logo=javascript&logoColor=white",
        "REST API": "https://img.shields.io/badge/REST%20API-005571?style=flat&logo=postman&logoColor=white",
        JSON: "https://img.shields.io/badge/JSON-000000?style=flat&logo=json&logoColor=white",
        "Amazon AWS": "https://img.shields.io/badge/Amazon%20AWS-232F3E?style=flat&logo=amazonaws&logoColor=white",
        "MySQL Workbench": "https://img.shields.io/badge/MySQL%20Workbench-4479A1?style=flat&logo=mysql&logoColor=white",
        Postman: "https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=postman&logoColor=white",
        Git: "https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white",
        GitHub: "https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white",
        Mailjet: "https://img.shields.io/badge/Mailjet-003399?style=flat&logo=mailjet&logoColor=white",
        Mailtrap: "https://img.shields.io/badge/Mailtrap-000000?style=flat&logo=mailtrap&logoColor=white",
    };

    const skillsData = [
        {
            category: "Languages",
            skills: ["Python", "JavaScript", "HTML5", "CSS3", "SQL"],
        },
        {
            category: "Frameworks/Libraries",
            skills: [
                "Django",
                "Flask",
                "Express",
                "React",
                "Leaflet.js",
                "Jinja2",
                "Jazzmin",
                "jQuery",
                "Bootstrap",
            ],
        },
        {
            category: "Databases",
            skills: ["MySQL", "MongoDB"],
        },
        {
            category: "Tools",
            skills: [
                "AJAX",
                "REST API",
                "JSON",
                "Amazon AWS",
                "MySQL Workbench",
                "Postman",
                "Git",
                "GitHub",
                "Mailjet",
                "Mailtrap",
            ],
        },
    ];

    return (
        <div>
            <h1>Skills and Technologies</h1>
            {skillsData.map((category, index) => (
                <div key={index}>
                    <h2>{category.category}</h2>
                    <ul>
                        {category.skills.map((skill, skillIndex) => (
                            <li key={skillIndex}>
                                <img
                                    src={skillIcons[skill]}
                                    alt={skill}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Skills;
