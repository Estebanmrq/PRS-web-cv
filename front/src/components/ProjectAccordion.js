/*
** E.Marques PROJECT, 2024
** esteban-marques-web-cv
** File description:
** ProjectAccordion
*/

import React from 'react';
import github from './../assets/images/github.ico';

export default function ProjectAccordion({ project, isActive, onToggle }) {
    return (
        <li className="w-1/3 p-5 bg-pmid-black m-5 rounded-lg">
            <div className="flex justify-center items-center text-white">
                <img src={project.image} alt={project.name} className="w-30 h-[200px] object-cover rounded-lg mb-5" />
            </div>
            <div className="flex justify-between items-center text-white">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <div className="flex items-center">
                    {project.link && (
                        <a href={project.link} target="_blank" rel="noreferrer noopener">
                            <svg className="cursor-pointer rounded-md shadow-md shadow-transparent transition-all duration-300 hover:shadow-pdark-purple ml-3" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 92 93" fill="none">
                                <rect x="0.138672" y="1" width="91.5618" height="91.5618" rx="15" fill="#292929"/>
                                <image href={github} x="20" y="20" width="50" height="50"/>
                            </svg>
                        </a>
                    )}
                    <button onClick={onToggle} className={`transition-transform duration-300 ${isActive ? 'rotate-180 text-pmid-purple' : 'text-pmid-gray'} text-2xl font-bold py-1 px-3 bg-pdark-black rounded-2xl ml-3`}>
                        {isActive ? '-' : '+'}
                    </button>
                </div>
            </div>

            <div className={`mt-2 overflow-hidden transition-all duration-300 ease-in-out ${isActive ? 'opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-2 bg-pdark-black rounded-lg text-pmid-gray">
                    <p className='m-2'><strong>For: </strong>{project.target}</p>
                    <p className='m-2'><strong>Technologies: </strong>{
                        project.tech.map((item) => (
                            <span key={item}>{item}; </span>
                        ))
                    }</p>
                    <p className='m-2'><strong>Description: </strong>{project.description}</p>
                </div>
            </div>
        </li>
    );
}
