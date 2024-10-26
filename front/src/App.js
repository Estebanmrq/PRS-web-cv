/*
** E.Marques PROJECT, 2024
** cv-web
** File description:
** App
*/

import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";

import Contact from "./components/Section/Contact/Contact";
import Skills from "./components/Section/Skills/Skills";
import Projects from "./components/Section/Projects/Projects";
import AboutMe from "./components/Section/AboutMe/AboutMe";

function App() {
  return (
    <div className="font-monster-arabic min-h-screen" style={{ background: 'linear-gradient(to bottom right, #000000, #000000, #000000, #010020, #2f0050)'}}>
      <Router>
        <Navbar />
        <div className="pt-40">
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about me" element={<AboutMe />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;