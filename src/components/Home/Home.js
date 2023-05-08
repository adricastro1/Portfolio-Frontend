import "./Home.css"
import { FaGithub, FaLinkedin } from "react-icons/fa"

function Home(props) {
  return (
    <section className="Home" id="home">
      <img src="../../imgs/home-img.jpeg"/>
      <div className="home-info">
        <h1>Adriana Castro</h1>
        <h3>Software Developer</h3>
        <div className="icons">
          <div className="icons-1">
            <a href="https://github.com/adricastro1" target="_blank">
              <FaGithub /> 
            </a>
              <p>Github</p>
          </div>
          <div className="icons-1">
            <a href="https://www.linkedin.com/in/adriana-s-castro/" target="_blank">
              <FaLinkedin /> 
            </a>
              <p>LinkedIn</p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Home;
