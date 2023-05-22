import { useState, useEffect } from "react";
import "./Projects.css";
import 'rsuite/dist/rsuite-no-reset.min.css';
import { Carousel } from 'rsuite';

function Projects(props) {
  const [projects, setProjects] = useState([]);

  const getProjectsData = async () => {
    const response = await fetch("./projects.json");
    const data = await response.json();
    setProjects(data);
  };

  useEffect(() => { getProjectsData() }, []);

  const loaded = () => {
    return (
      <section className="Projects" id="projects">
        {projects.map((project) => (
          <div className="Card" key={project.id}>
            <h3>{project.name}</h3>
            <section className="project-content">
              <Carousel className="custom-slider" placement='right' shape='bar'>
                <img src={project.image1} alt='carousel-project-img' />
                <img src={project.image2} alt='carousel-project-img' />
                <img src={project.image3} alt='carousel-project-img' />
              </Carousel>
              <p className="desc">{project.description}</p>
              <p className="tech">Build with: {project.technologies}</p>
            </section>
            <div className="site-btns">
              <button>
                <a href={project.git} target="_blank" rel="noreferrer noopener">Github</a>
              </button>
              <button>
                <a href={project.live} target="_blank" rel="noreferrer noopener">Live Site</a>
              </button>
            </div>
          </div>
        ))}
      </section>
    );
  };


  return projects.length > 0 ? loaded() : <h1>Loading...</h1>;
}

export default Projects;
