/*
** E.Marques PROJECT, 2024
** esteban-marques-web-cv
** File description:
** AboutMe
*/

import axios from 'axios';
import profilepic from './../../../assets/images/prophilepic.png';
import { ReactTyped } from "react-typed";
import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import SocialMedia from '../../SocialMedia';

export default function AboutMe() {
  const [dataModule, setDataModule] = useState([]);
  const projectsRef = useRef();
  const technologiesRef = useRef();
  const yearsRef = useRef();
  const aboutTextRef = useRef();
  const headerRef = useRef();

  const yearsOfFormation = new Date().getFullYear() - 2021;

  useEffect(() => {
    const res = [];
    axios.get("http://localhost:5000/modules")
      .then((response) => {
        response.data.rows.forEach((module) => {
          res.push(module.name);
        });
        setDataModule(res);
      })
      .catch((error) => {
        res.push("Developper");
        setDataModule(res);
      });

    gsap.fromTo(projectsRef.current, 
      { innerText: 0 }, 
      { innerText: 100, duration: 2, snap: { innerText: 1 }, ease: "power1.inOut" }
    );

    gsap.fromTo(technologiesRef.current, 
      { innerText: 0 }, 
      { innerText: 25, duration: 2, snap: { innerText: 1 }, ease: "power1.inOut", delay: 0.5 }
    );

    gsap.fromTo(yearsRef.current, 
      { innerText: 0 }, 
      { innerText: yearsOfFormation, duration: 2, snap: { innerText: 1 }, ease: "power1.inOut", delay: 1 }
    );

    gsap.fromTo(aboutTextRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", delay: 0.5 }
    );

    gsap.fromTo(headerRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", delay: 0 }
    );

  }, [yearsOfFormation]); 

  return (
    <div className="h-screen">
      <div ref={headerRef} className="container mx-auto p-5 my-10 bg-pdark-black">
        <div className="flex flex-wrap">
          <div className="md:w-1/10">
            <img src={profilepic} alt="about me" className="mt-8 md:mt-0 rounded-xl shadow-lg mx-5" />
          </div>
          <div className="w-full md:w-1/2">
            <div className="text-white">
              <h1 className="text-4xl font-bold uppercase">ESTEBAN<br />MARQUES</h1>
              <div className="flex flex-wrap">
                <ReactTyped strings={dataModule} typeSpeed={60} backSpeed={50} loop className="text-xl mt-1 ml-2 text-pmid-purple font-bold" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={aboutTextRef} className="container mx-auto p-5 my-10 bg-pdark-black flex flex-col md:flex-row">
        <div className="text-pmid-gray md:w-1/3 bg-pmid-black p-4 mx-4 rounded-lg flex flex-col justify-between">
          <div className="text-center font-bold my-10 flex-grow">
            <h2 className="text-5xl flex justify-center items-baseline">
              <span className="text-2xl ml-1">+</span>
              <span className="text-5xl" ref={projectsRef}>0</span>
            </h2>
            <p className="text-sm">PROJECTS</p>
          </div>
          <div className="text-center font-bold my-10 flex-grow">
            <h2 className="text-5xl flex justify-center items-baseline">
              <span className="text-2xl ml-1">+</span>
              <span className="text-5xl" ref={technologiesRef}>0</span>
            </h2>
            <p className="text-sm">TECHNOLOGIES</p>
          </div>
          <div className="text-center font-bold my-12 flex-grow">
            <h2 className="text-5xl flex justify-center items-baseline">
              <span className="text-2xl ml-1">+</span>
              <span className="text-5xl" ref={yearsRef}>0</span>
            </h2>
            <p className="text-sm">YEARS OF STUDY</p>
          </div>
        </div>
        <div className=" flex-grow p-4 overflow-auto text-pmid-gray">
          <h1 className="text-4xl font-bold uppercase mb-10">ABOUT ME</h1>
          <p className="text-xl mb-10">
            Hello, I'm Esteban Marques,<br/>
            A student and teaching assistant at EPITECH Paris.<br/><br/>
            Passionate about new technologies, I have had the opportunity to work on various projects throughout my studies, covering areas such as Software Development, Web Development, and DevOps.<br/>
            Alongside my studies, I hold a position as a teaching assistant, which allows me to share my knowledge while continuing to learn.<br/><br/>
            I have also completed internships to immerse myself in the professional world, further strengthening my technical skills and teamwork abilities.
          </p>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}
