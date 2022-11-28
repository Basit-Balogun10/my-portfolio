import React from "react";

interface propsType {
    project: projectType;
}

export interface projectType {
    name: string;
    featured: boolean;
    description: string;
    problem: string;
    approach: string;
    technologyUsed: string[];
    year: string;
    imgUrl: string;
}

const Project = ({ project }: propsType) => {
    return (
        <div className="flex items-center justify-center">
            <img src={project.imgUrl} />
            <div>
                <div>
                    <h3>Description</h3>
                    <p>{project.description}</p>
                </div>
                <div>
                    <h3>Problem</h3>
                    <p>{project.description}</p>
                </div>
                <div>
                    <h3>Approach</h3>
                    <p>{project.description}</p>
                </div>
                <ul>
                    {project.technologyUsed.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Project;
