/*
** E.Marques PROJECT, 2024
** cv-web
** File description:
** Projects
*/

import gsap from 'gsap';
import axios from "axios";
import Alert from "../../Alert";
import React, { useEffect, useState, useRef } from "react";
import SlidingTabBar from "../../SlidingTabBar";
import ProjectAccordion from '../../ProjectAccordion';

export default function Projects() {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [error, setError] = useState(null);
    const [tabs, setTabs] = useState([]);
    const [projects, setProjects] = useState([]);
    const [activeSkillIndex, setActiveSkillIndex] = useState(null);
    const projectRef = useRef([]);

    useEffect(() => {
        axios.get("http://localhost:5000/modules/")
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

            axios.get(`http://localhost:5000/projects/${tabId}`)
                .then((response) => {
                    if (response.data.rows) {
                        // Transform project data
                        const projectPromises = response.data.rows.map(project => {
                            return axios.get(`http://localhost:5000/projects/tech/${project.id}`)
                                .then((techResponse) => {
                                    return {
                                        ...project,
                                        tech: techResponse.data.rows.map(tech => tech.name)
                                    };
                                });
                        });

                        Promise.all(projectPromises)
                            .then((formattedProjects) => {
                                setProjects(formattedProjects);
                            });
                    } else {
                        setError("No project found for this tab.");
                    }
                })
                .catch((error) => {
                    setError("An error occurred: " + error.message);
                });
        }
    }, [activeTabIndex, tabs]);

    useEffect(() => {
        gsap.fromTo(projectRef.current, 
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
            <div ref={projectRef} className="container mx-auto p-5 my-10 bg-pdark-black">
                <div className="flex flex-wrap custom-dark-shadow p-4">
                    <SlidingTabBar tabs={tabs} activeTabIndex={activeTabIndex} setActiveTabIndex={setActiveTabIndex} setActiveSkillIndex={setActiveSkillIndex} />
                </div>
                <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
                    <ul className="flex flex-wrap mt-10 justify-center items-top">
                        {
                            projects.map((project, index) => (
                                <ProjectAccordion
                                    key={index}
                                    project={{
                                        name: project.name,
                                        image: project.image || '/images/default-image.jpg',
                                        target: project.target_name,
                                        tech: project.tech,
                                        link: project.repo,
                                        description: project.description,
                                    }}
                                    isActive={activeSkillIndex === index}
                                    onToggle={() => handleToggleAccordion(index)}
                                />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}
