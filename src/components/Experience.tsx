import React from "react";
import { FaArrowRight } from "react-icons/fa";
interface propsType {
    experience: experienceType;
}

export interface experienceType {
    categories: string[];
    contributions: string[];
    endDate: string;
    organization: string;
    projectGithubRepo?: string;
    projectLiveLink?: string;
    role: string;
    startDate: string;
    type: "full-time" | "volunteering";
}

const Experience = ({ experience }: propsType) => {
    return (
        <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="space-y-6 after:block after:mt-8 after:w-full after:border after:border-mainColor dark:after:border-slate-400"
        >
            <div>
                <h4 className="text-xl font-medium text-dimmedSecondaryColor dark:text-secondaryColor">
                    {experience.role} <span className="font-pacifico">@</span>{" "}
                    {experience.organization}
                </h4>
                <p className="text-lg">
                    {experience.startDate} - {experience.endDate}
                </p>
            </div>
            <ul className="space-y-3">
                {experience.contributions.map((contribution, index) => (
                    <li
                        className="flex items-center justify-start space-x-4"
                        key={index}
                    >
                        <FaArrowRight className="h-4 w-4 shrink-0 text-dimmedSecondaryColor dark:text-secondaryColor" />
                        <p>{contribution}</p>
                    </li>
                ))}
            </ul>
            <div>
                {experience.projectGithubRepo && (
                    <p className="font-comfortaa text-sm text-dimmedSecondaryColor dark:text-secondaryColor">
                        Github repository:{" "}
                        <a
                            href={experience.projectGithubRepo}
                            className="hover:underline"
                        >
                            {experience.projectGithubRepo}
                        </a>
                    </p>
                )}
                {experience.projectLiveLink && (
                    <p className="font-comfortaa text-sm text-dimmedSecondaryColor dark:text-secondaryColor text-ellipsis overflow-hidden sm:overflow-auto">
                        Website here:{" "}
                        <a
                            href={experience.projectLiveLink}
                            className="hover:underline"
                        >
                            {experience.projectLiveLink}
                        </a>
                    </p>
                )}
            </div>
        </div>
    );
};

export default Experience;
