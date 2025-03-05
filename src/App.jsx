import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Clients from "./sections/Clients";

const App = () => {
  return (
    <div className="text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
    </div>
  );
};

export default App;
