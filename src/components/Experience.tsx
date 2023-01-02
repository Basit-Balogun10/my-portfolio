import React from "react";
import { FaArrowRight } from "react-icons/fa";
interface propsType {
    experience: experienceType;
    hasBottomBorder: boolean;
}

export interface experienceType {
    type: string;
    role: string;
    organization: string;
    startDate: string;
    endDate: string;
    contributions: string[];
}

const Experience = ({ experience, hasBottomBorder }: propsType) => {
    return (
        <div
            className={`space-y-6 ${
                hasBottomBorder
                    ? "after:block after:mt-8 after:w-full after:border after:border-mainColor dark:after:border-slate-400"
                    : ""
            }`}
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
        </div>
    );
};

export default Experience;
