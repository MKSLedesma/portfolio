import React from "react";
import { FaLinkedin, FaFileAlt, FaGithub } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav>
            <div className="nav-container">
                <div className="nav-left"></div>
                <div className="nav-nav">
                    <a href="">Home</a>
                    <a href="">About me</a>
                    <a href="#projects">Projects</a>
                    <a href="">Contact</a>
                </div>
                <div className="nav-social">
                    <a href="https://docs.google.com/document/d/1pxDTXKSC-Wg_SN_2tkLq1x-i0fkg4btit9FtYmLrr_g/edit?usp=sharing"
                    target="_blank"> <FaFileAlt size={24} color="#747bff" /> </a>
                    <a href="https://github.com/MKSLedesma" target="_blank"> <FaGithub size={24} color="#747bff" /> </a>
                    <a href="https://www.linkedin.com/in/cranledesma" target="_blank"> <FaLinkedin size={24} color="#747bff" /> </a>
                </div>
            </div>
        </nav>
    );
}