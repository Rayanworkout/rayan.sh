// Resume file
import Resume from "./resume.json";

// Components
import Header from "./components/structure/Header";
// import Skills from "./components/structure/Skills";
// import Projects from "./components/structure/Projects";
import Experience from "./components/structure/Experience";
import Articles from "./components/structure/Articles";

import React, { Suspense } from 'react';

const Skills = React.lazy(() => import("./components/structure/Skills"));
const Projects = React.lazy(() => import("./components/structure/Projects"));

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
      <Suspense fallback={<div className="text-center text-xl">Loading Skills...</div>}>
        <Skills />
      </Suspense>
      <Experience />
      <Suspense fallback={<div className="text-center text-xl">Loading Projects...</div>}>
        <Projects />
      </Suspense>
      <Articles />
    </div>
  )
}

export default App;
