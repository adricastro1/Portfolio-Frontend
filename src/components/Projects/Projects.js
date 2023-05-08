import { useState, useEffect } from "react";
import "./Projects.css";

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
            <img src={project.image} />
            <div className="site-btns">
              <button>
                <a href={project.git} target="_blank">Github</a>
              </button>
              <button>
                <a href={project.live} target="_blank">Live Site</a>
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
