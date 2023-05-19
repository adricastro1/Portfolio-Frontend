import { useState, useEffect } from "react";
import "./Projects.css";
import 'rsuite/dist/rsuite-no-reset.min.css';
import { Carousel } from 'rsuite';

function Projects(props) {
  const [projects, setProjects] = useState(null);

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
          <div className="Card">
            <h3>{project.name}</h3>
            <section className="project-content">
              <Carousel className="custom-slider" placement='right'>
                <img src={project.image} alt='carousel-project-img' />
                <img src={project.image1} alt='carousel-project-img' />
              </Carousel>
              <p>{project.description}</p>
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


  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;
