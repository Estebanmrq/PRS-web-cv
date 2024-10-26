/*
** E.Marques PROJECT, 2024
** esteban-marques-web-cv
** File description:
** SocialMedia.js
*/

import github from './../assets/images/github.ico';
import linkedin from './../assets/images/linkedin.ico';

export default function SocialMedia() {
    return (
        <div className="bg-pmid-black w-full h-auto py-8 flex items-center justify-center gap-4 flex-wrap mt-5">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/marques-esteban/" target="_blank" rel="noreferrer noopener">
                <svg className="cursor-pointer rounded-md shadow-md shadow-transparent transition-all duration-300 hover:shadow-pdark-purple" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 92 93" fill="none">
                    <rect x="0.138672" y="1" width="91.5618" height="91.5618" rx="15" fill="#292929"/>
                    <image href={linkedin} x="20" y="20" width="50" height="50"/>
                </svg>
            </a>

            {/* GitHub */}
            <a href="https://github.com/Estebanmrq" target="_blank" rel="noreferrer noopener">
                <svg className="cursor-pointer rounded-md shadow-md shadow-transparent transition-all duration-300 hover:shadow-pdark-purple" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 92 93" fill="none">
                    <rect x="0.138672" y="1" width="91.5618" height="91.5618" rx="15" fill="#292929"/>
                    <image href={github} x="20" y="20" width="50" height="50"/>
                </svg>
            </a>

        </div>
    )
}
