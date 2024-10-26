/*
** E.Marques PROJECT, 2024
** esteban-marques-web-cv
** File description:
** Accordion
*/


export default function Accordion({ skill, isActive, onToggle }) {
    return (
        <li className="w-1/4 p-5 bg-pmid-black m-5 rounded-lg">
            <div className="flex justify-between text-white">
                <h3 className="text-xl font-bold">{skill.name}</h3>
                <button onClick={onToggle} className={`transition-transform duration-300 ${isActive ? 'rotate-180 text-pmid-purple' : 'text-pmid-gray'} text-2xl font-bold py-1 px-3 bg-pdark-black rounded-2xl`}> {isActive ? '-' : '+'} </button>
            </div>
            <div className={`mt-2 overflow-hidden transition-all duration-300 ease-in-out ${isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-2 bg-pdark-black rounded-lg text-pmid-gray">
                    <p>{skill.description}</p>
                </div>
            </div>
        </li>
    );
}
