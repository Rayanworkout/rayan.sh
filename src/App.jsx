
// Resume file
import Resume from "./resume.json";

// Components
import Header from "./components/structure/Header";
import About from "./components/structure/About";
import Skills from "./components/structure/Skills";
import Experience from "./components/structure/Experience";
import Projects from "./components/structure/Projects";

import './index.css'

function App() {

  document.title = [
    Resume.basics.name,
    Resume.basics.label,
    [Resume.basics.location.region, Resume.basics.location.country].join(", ")
  ].join(" | ");

  return (
    <div>
      <Header />
      <About />
      <Skills />
      {/* <Experience /> */}
      <Projects />
    </div>
  )
}

export default App
