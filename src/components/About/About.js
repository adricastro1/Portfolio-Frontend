import "./About.css"
import { useState, useEffect } from "react";

function About(props) {
  const [about, setAbout] = useState(null);

  const getAboutData = async () => {
    const response = await fetch("./about.json");
    const data = await response.json();
    setAbout(data);
  };

  useEffect(() => { getAboutData() } , []);

  const loaded = () => (
    <section className="About" id="about">
      <div className="About-info">
      <h3>A little about me</h3>
      <p>{about.bio}</p>
      </div>
      <img src="../../imgs/about-img.png"/>
    </section>
  );

  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;


