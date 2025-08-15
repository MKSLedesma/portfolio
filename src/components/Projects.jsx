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