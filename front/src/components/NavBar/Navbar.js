/*
** E.Marques PROJECT, 2024
** cv-web
** File description:
** NavBar
*/


import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { sectionList } from './SectionList';

const normalizeSectionName = (name) => name.replace(' ', '%20');

export default function Navbar() {
    const activeButtonClass = "block py-2 px-3 md:text-pmid-purple md:p-0 border-b-2 border-pmid-purple uppercase font-bold";
    const inactiveButtonClass = "block py-2 px-3 text-white rounded md:hover:text-pmid-purple md:p-0 uppercase font-bold";
    const activePage = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (activePage.pathname === '/') {
            navigate(`/${sectionList[0].name}`);
        }
    }, [activePage, navigate]);

    return (
        <div>
            <nav className="custom-dark-shadow fixed bg-pdark-black border-gray-200 min-w-full pt-16 z-50">
                <div className="flex flex-wrap items-center justify-between p-4 bg-pdark-black">
                    <div className="ml-auto">
                        <div className="items-center justify-stretch hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                            <ul className="bg-pdark-black flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-20 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                                {sectionList.map((section, index) => (
                                    <li key={index}>
                                        <button 
                                            className={activePage.pathname === `/${normalizeSectionName(section.name)}` ? activeButtonClass : inactiveButtonClass}
                                            onClick={() => {
                                                window.location.href = `/${section.name}`;
                                            }}>
                                            {section.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

