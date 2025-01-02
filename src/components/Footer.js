import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div>
            <ul>
                <li><a href="https://github.com/Izzeddin-Samara" ><FaGithub/></a></li>
                <li><a href="https://www.linkedin.com/in/izzeddin-samara"><FaLinkedin/></a></li>
                <li><a href="mailto:izzidinsamara@gmail.com"><MdOutlineAlternateEmail/></a></li>
                <li><a href="https://api.whatsapp.com/send/?phone=00972595484832&text&type=phone_number&app_absent=0"><FaWhatsapp/></a></li>
            </ul>
                <p>Izzeddin Samara, All Rights Reserved 2025  ©  </p>

        </div>
    );
}
export default Footer