import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <div className="text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />

      <Contact />
      <Footer />
    </div>
  );
};

export default App;
