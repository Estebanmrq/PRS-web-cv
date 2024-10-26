/*
** E.Marques PROJECT, 2024
** esteban-marques-web-cv
** File description:
** Skills
*/

import gsap from 'gsap';
import axios from "axios";
import Alert from "../../Alert";
import React, { useEffect, useState, useRef } from "react";
import SlidingTabBar from "../../SlidingTabBar";
import Accordion from "../../Accordion";


export default function Skills() {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [error, setError] = useState(null);
    const [tabs, setTabs] = useState([]);
    const [skills, setSkills] = useState([]);
    const [activeSkillIndex, setActiveSkillIndex] = useState(null);
    const skillsRef = useRef([]);

    useEffect(() => {
        axios.get("http://localhost:5000/skills/")
            .then((response) => {
                if (response.data.rows) {
                    setTabs(response.data.rows);
                    setActiveTabIndex(0);
                } else {
                    setError("No data found");
                }
            })
            .catch((error) => {
                setError("An error occurred: " + error.message);
            });
    }, []);

    useEffect(() => {
        if (tabs.length > 0) {
            const selectedTab = tabs[activeTabIndex];
            const tabId = selectedTab?.id;

            axios.get(`http://localhost:5000/skills/${tabId}`)
                .then((response) => {
                    if (response.data.rows) {
                        setSkills(response.data.rows);
                    } else {
                        setError("No skills found for this tab.");
                    }
                })
                .catch((error) => {
                    setError("An error occurred: " + error.message);
                });
        }
    }, [activeTabIndex, tabs]);

    useEffect(() => {
        gsap.fromTo(skillsRef.current, 
            { opacity: 0, y: 20 }, 
            { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", delay: 0 }
          );
    }, []);      

    const handleToggleAccordion = (index) => {
        if (activeSkillIndex === index) {
            setActiveSkillIndex(null);
        } else {
            setActiveSkillIndex(index);
        }
    };


    return (
        <div className="h-screen">
            {error && <Alert text={error} setText={setError} type="error" />}
            <div ref={skillsRef} className="container mx-auto p-5 my-10 bg-pdark-black">
                <div className="flex flex-wrap custom-dark-shadow p-4">
                    <SlidingTabBar tabs={tabs} activeTabIndex={activeTabIndex} setActiveTabIndex={setActiveTabIndex} setActiveSkillIndex={setActiveSkillIndex} />
                </div>
                <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
                    <ul className="flex flex-wrap mt-10 justify-center items-top">
                        {
                            skills.map((skill, index) => (
                                <Accordion key={index} skill={skill} isActive={activeSkillIndex === index} onToggle={() => handleToggleAccordion(index)} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}
