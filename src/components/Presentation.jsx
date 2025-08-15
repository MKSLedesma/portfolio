import React from "react";
import image from "../assets/image.png";

export default function Presentation() {
    return (
        <div className="presentation-container">
            <div className="presentation-text">
                <h1 id="presentation-name">Cristian Ledesma</h1>
                <p id="presentation-description">I have a deep passion for
                    programming and a constant drive to learn and improve my skills.
                    I'm looking for an environment where I can apply my knowledge
                    in solving real-world situations, and I'm eager to collaborate in
                    teams that challenge me to grow while contributing to meaningful projects.
                     I value opportunities that allow me to learn and expand my programming skills.</p>
            <a href="#projects">
                <button id="presentation-button"> View Projects</button>
            </a>
            </div>
            <div className="presentation-image">
                <img src={image} alt="Cristian Ledesma" />
            </div>
        </div>
    );
}