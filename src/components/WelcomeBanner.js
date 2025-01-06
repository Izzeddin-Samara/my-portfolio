import React from "react";
import { FaLaptopCode } from "react-icons/fa";

const WelcomeBanner = () => {
    return (
        <div className="welcome">
            <h1>Welcome to Izzeddin's Portfolio</h1>
            <p>A Junior Full Stack Developer</p>
            <FaLaptopCode size={100} />
        </div>
    );
}
export default WelcomeBanner;