import "./App.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Technologies from "./components/Technologies/Techs";


function App() {
  const URL = "http://localhost:4000/";

  return (
    <div className="App">
      <>
        <Header />
        <Home />
        <About URL={URL} />
        <Projects URL={URL} />
        <Technologies />
        <Contact />
      </>
    </div>
  );
}

export default App;
