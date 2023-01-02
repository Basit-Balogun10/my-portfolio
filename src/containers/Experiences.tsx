import React from "react";

import { IoMdMoon, IoMdSunny } from "react-icons/io";

import ButtonTabs from "../components/ButtonTabs";
import Experience from "../components/Experience";

import { experienceType } from "../components/Experience";
import { tabType } from "../components/ButtonTabs";

const myExperiences: experienceType[] = [
    {
        type: "full-time",
        role: "Engineer",
        organization: "Upstatement",
        startDate: "May 2020",
        endDate: "Present",
        contributions: [
            "Write modern, performant, maintainable code for a diverse array of client and internal projects",
            "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
            "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
        ],
    },
    {
        type: "volunteering",
        role: "Engineer",
        organization: "IEEE Nigeria Students Congress",
        startDate: "May 2020",
        endDate: "Present",
        contributions: [
            "Write modern, performant, maintainable code for a diverse array of client and internal projects",
            "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
            "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
        ],
    },
    {
        type: "volunteering",
        role: "Engineer",
        organization: "Synergy Network International",
        startDate: "May 2020",
        endDate: "Present",
        contributions: [
            "Write modern, performant, maintainable code for a diverse array of client and internal projects",
            "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
            "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
        ],
    },
];

const tabs: tabType[] = [
    {
        displayName: "All",
        title: "all",
    },
    {
        displayName: "Full-time",
        title: "full time",
    },
    {
        displayName: "Volunteering",
        title: "volunteering",
    },
];

const Experiences = () => {
    const handleActiveTabChange = (category: string) => {
        // const updatedTabItems = techStacks.filter(
        //     (techStack) => category in techStacks.categories
        // );
        // setActiveTabItems(updatedTabItems);
    };
    return (
        <section className="my-20 px-7 lg:px-60">
            {/* <h2 className="relative lg:block flex items-center justify-center mb-8 lg:mb-4 font-comfortaa text-2xl dark:text-white lg:after:block after:absolute after:w-full lg:after:w-[52%] after:mt-6 lg:after:mt-0 lg:after:ml-[31rem] after:bottom-0 lg:after:bottom-auto lg:after:top-1/2  after:border-[1.5px] lg:after:border after:border-mainColor dark:after:border-slate-400 overflow-x-hidden overflow-y-hidden"> */}
            <h2 className="relative xl:block flex items-center justify-center mb-6 xl:mb-4 font-comfortaa text-2xl dark:text-white xl:after:block after:absolute xl:after:w-3/5 xl:after:mt-0 xl:after:ml-[33rem] xl:after:top-1/2 xl:after:border after:border-mainColor dark:after:border-slate-400 overflow-hidden">
                <span className="font-pacifico lg:font-extrabold mb-2 lg:mb-0 sm:mr-4 lg:mr-4 text-3xl lg:text-2xl text-dimmedSecondaryColor dark:text-secondaryColor ">
                    03.
                </span>
                <span className="font-semibold lg:font-extrabold text-center xl:text-left">
                    And the Experience I've Gained So Far
                </span>
            </h2>

            <ButtonTabs
                tabs={tabs}
                handleActiveTabChange={handleActiveTabChange}
                cssClasses="justify-start space-x-2"
            />

            <div className="lg:px-12 mt-6 space-y-8">
                {myExperiences.map((experience, index) => (
                    <>
                        <Experience
                            key={index}
                            experience={experience}
                            hasBottomBorder={
                                index === myExperiences.length - 1
                                    ? false
                                    : true
                            }
                        />
                    </>
                ))}
            </div>
        </section>
    );
};

export default Experiences;
