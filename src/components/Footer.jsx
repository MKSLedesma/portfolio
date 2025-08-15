import React from 'react'
import { FaLinkedin, FaFileAlt, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src="https://avatars.githubusercontent.com/u/100000000?v=4" alt="Cristian Ledesma" />
        </div>

        <div className='footer-links'>
            <div className='footer-nav'></div>
            <a href='#projects'>Projects</a>
            <a href=''>About Me</a> 
            <a href=''>Contact Me</a>
            </div>
        <div className='footer-social'>
            <a href="https://docs.google.com/document/d/1pxDTXKSC-Wg_SN_2tkLq1x-i0fkg4btit9FtYmLrr_g/edit?usp=sharing"
            target="_blank"> <FaFileAlt size={24} color="#747bff" /> </a>
            <a href="https://github.com/MKSLedesma" target="_blank"> <FaGithub size={24} color="#747bff" /> </a>
            <a href="https://www.linkedin.com/in/cranledesma" target="_blank"> <FaLinkedin size={24} color="#747bff" /> </a> 
        </div>

    </div>
  )
}

export default Footer