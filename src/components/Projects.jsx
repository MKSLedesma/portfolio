import React from 'react'

const PROJECTS = {
    1: {
        title: "Lasers Maze Game",
        description: "Un juego de estilo puzzle, que se desarrolla por turnos hasta que el jugador encuentra la solución del problema. En cada turno se puede mover un bloque (que no sea fijo) a cualquier celda que esté libre. El nivel es completado cuando todos los objetivos son alcanzados por al menos un rayo laser.",
        image: "https://via.placeholder.com/150",
        tags: "Java | JavaFX | UML | OOP | MVC | Principle Desing Patterns",
        link: "https://github.com/MKSLedesma/TP1-Lasers"
    },

    2: {
        title: "Project 2", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste perferendis recusandae quaerat doloribus quia eligendi. Ducimus corporis assumenda obcaecati quidem quasi! Dolorum veniam dolore, tenetur consequatur officia libero expedita laboriosam!",
        image: "https://via.placeholder.com/150",
        tags: "Java | JavaFX | UML | OOP | MVC | Principle Desing Patterns",
        link: "https://example.com/project2"
    },

    3: {
    title: "Need4Speed 2D", 
    description: "Need4Speed es un juego 2D inspirado en Need for Speed, desarrollado en C++ con SDL2, Qt y Box2D. El proyecto incluye tres aplicaciones principales: Cliente, Servidor y Editor de mapas. Consta de 3 mapas colisionables y elementos visuales interactivos, con varios vehiculos unicos para elegir.",
    image: "https://via.placeholder.com/150",
    tags: "C++ | SDL2 | OOP | Client-Server Architecture | Game Development",
    link: "https://example.com/project3"
    },

    4: {
    title: "PSA Finance Module", 
    description: "Modulo de finanzas para configuración de costos que permite administrar tarifas de mano de obra y vigencias, y reportes para ver el desglose de costos.",
    image: "https://via.placeholder.com/150",
    tags: "JavaScript | React | PostgreSQL | MVC | RESTful APIs",
    link: "https://agusdubo.github.io/tribu-A-front-end-deployment/#/"
}
}

const Projects = () => {
  return (
    <div id="projects" className='projects-container'>
        {Object.values(PROJECTS).map((item, index) => (
            <div className={`projects-item-${index % 2 === 0 ? 'left' : 'right'}`}> 
                <div className='project-description'>
                    <div className='project-image'>
                    <img src={item.image} alt={item.title} />
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p>{item.tags}</p>
                    <a href="https://github.com/MKSLedesma/TP1-Lasers" target="_blank">
                        <button>View Project</button>
                    </a>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Projects