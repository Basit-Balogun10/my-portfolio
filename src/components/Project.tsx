import React from "react";

import { FiGithub } from "react-icons/fi";

interface propsType {
    project: projectType;
    index: number;
}

export interface projectType {
    name: string;
    categories: string[];
    featured: boolean;
    description: string;
    imgUrl: string;
    liveUrl: string;
    problem: string;
    repoUrl: string;
    technologyUsed: string[];
    year: string;
}

const Project = ({ project, index }: propsType) => {
    return (
        <div
            className={`md:relative md:w-[85%] mx-auto mb-10 md:mb-12 flex ${
                index % 2 != 0 ? "md:flex-row-reverse" : ""
            } flex-wrap justify-start items-start`}
        >
            <div
                className={`md:absolute top-[25px] md:w-3/5 md:h-64 text-center ${
                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                }`}
            >
                <div className="flex md:block justify-between items-center">
                    <h3
                        className={`font-semibold font-comfortaa text-xl text-left ${
                            index % 2 === 0 ? "md:text-left" : "md:text-right"
                        }`}
                    >
                        {project.name.toUpperCase()}
                    </h3>
                    <div className={`flex md:hidden items-center space-x-4`}>
                        <a href={project.repoUrl} target="_blank">
                            <FiGithub className="w-6 h-6" />
                        </a>
                        <a href={project.liveUrl} target="_blank">
                            <FiGithub className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                <div
                    className={`mt-1 px-4 py-6 text-left ${
                        index % 2 === 0 ? "md:text-left" : "md:text-right"
                    } bg-gray-300 dark:bg-lighterMainColor/80 border border-gray-300 dark:border-lighterMainColor/80 rounded`}
                >
                    <p className="text-">{project.description}</p>
                    <ul
                        className={`flex md:hidden items-center justify-center mt-4 space-x-4`}
                    >
                        {project.technologyUsed.map((tech, index) => (
                            <li
                                key={index}
                                className="text-dimmedSecondaryColor dark:text-secondaryColor"
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-4 space-y-2">
                    <ul
                        className={`hidden md:flex items-center ${
                            index % 2 === 0
                                ? "md:justify-start"
                                : "md:justify-end"
                        } space-x-4`}
                    >
                        {project.technologyUsed.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                    <div
                        className={`hidden md:flex items-center ${
                            index % 2 === 0
                                ? "md:justify-start"
                                : "md:justify-end"
                        } space-x-8`}
                    >
                        <a href={project.repoUrl} target="_blank">
                            <FiGithub className="w-6 h-6" />
                        </a>
                        <a href={project.liveUrl} target="_blank">
                            <FiGithub className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
            <img
                src={project.imgUrl}
                className={`md:w-1/2 md:h-72 ${
                    index % 2 === 0 ? "ml-auto" : "mr-auto"
                } object-contain md:object-cover rounded-xl shadow-lg shadow-black`}
            />
        </div>
    );
};

export default Project;
