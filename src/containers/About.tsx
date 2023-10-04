import React, { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

import {
    FaJs,
    FaPython,
    FaCss3,
    FaHtml5,
    FaReact,
    FaGithub,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";

import ButtonTabs from "../components/ButtonTabs";
import { tabType } from "../components/ButtonTabs";

interface techStacksType {
    name: string;
    icon: string;
    categories: string[];
}

const techStacks: techStacksType[] = [
    {
        name: "Javascript",
        icon: "javascript-original",
        categories: ["all", "languages"],
    },
    {
        name: "Python",
        icon: "python-original",
        categories: ["all", "languages"],
    },
    {
        name: "Git & GitHub",
        icon: "git-original",
        categories: ["all", "dev tools"],
    },
    {
        name: "CSS",
        icon: "css3-original",
        categories: ["all", "languages"],
    },
    {
        name: "HTML",
        icon: "html5-original",
        categories: ["all", "languages"],
    },
    {
        name: "React Native",
        icon: "react-original",
        categories: ["all", "libs/frameworks"],
    },
    {
        name: "Django & DRF",
        icon: "django-original",
        categories: ["all", "libs/frameworks"],
    },
    {
        name: "Tailwind CSS",
        icon: "null",
        categories: ["all", "libs/frameworks"],
    },
    {
        name: "Next.js",
        icon: "null",
        categories: ["all", "libs/frameworks"],
    },
    {
        name: "Next.js",
        icon: "null",
        categories: ["all", "libs/frameworks"],
    },
    {
        name: "Mongo DB",
        icon: "mongodb-original",
        categories: ["all", "libs/frameworks"],
    },
    {
        name: "Express",
        icon: "express-original",
        categories: ["all", "libs/frameworks"],
    },
    {
        name: "Node.js",
        icon: "nodejs-original",
        categories: ["all", "libs/frameworks"],
    },
    {
        name: "Vite",
        icon: "null",
        categories: ["all", "libs/frameworks"],
    },
    {
        name: "Typescript",
        icon: "typescript-original",
        categories: ["all", "languages"],
    },
    {
        name: "C",
        icon: "c-original",
        categories: ["all", "languages"],
    },
    {
        name: "Vercel",
        icon: "null",
        categories: ["all", "dev tools"],
    },
    {
        name: "Netlify",
        icon: "null",
        categories: ["all", "dev tools"],
    },
    {
        name: "jQuery",
        icon: "jquery-original",
        categories: ["all", "libs/frameworks"],
    },
    {
        name: "Bootstrap",
        icon: "bootstrap-plain",
        categories: ["all", "libs/frameworks"],
    },
    {
        name: "Firebase",
        icon: "null",
        categories: ["all", "libs/frameworks"],
    }
];

const tabs: tabType[] = [
    {
        displayName: "All",
        title: "all",
    },
    {
        displayName: "Languages",
        title: "languages",
    },
    {
        displayName: "Libraries & Frameworks",
        title: "libs/frameworks",
    },
    {
        displayName: "Dev Tools",
        title: "dev tools",
    },
];

const About = () => {
    const [activeTabItems, setActiveTabItems] =
        useState<techStacksType[]>(techStacks);

    const handleActiveTabChange = (category: string) => {
        console.log(category, "cat");
        const updatedTabItems = techStacks.filter((techStack) =>
            techStack.categories.includes(category)
        );
        console.log(updatedTabItems, "uti");
        setActiveTabItems(updatedTabItems);
    };

    return (
        <section id="about" className="my-20 px-7 lg:px-44 xl:px-60">
            <h2
                data-aos="fade-right"
                data-aos-duration="1000"
                className="relative mb-4 font-extrabold font-comfortaa text-2xl dark:text-white after:block lg:after:absolute lg:after:mt-0 lg:after:w-4/5 lg:after:ml-[17rem] after:top-1/2 after:border after:border-mainColor dark:after:border-slate-400 overflow-hidden"
            >
                <span className="font-pacifico mr-4 text-dimmedSecondaryColor dark:text-secondaryColor">
                    01.
                </span>
                First Things First!
            </h2>

            <div className="flex lg:justify-center lg:items-center flex-col-reverse lg:flex-row flex-wrap lg:flex-nowrap lg:space-x-14 text-lg leading-relaxed">
                <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="lg:w-3/5 xl:w-3/5"
                >
                    <div>
                        <p className="mb-3">
                            Greetings! How's it going? I’m Basit, A dedicated software engineer with 1.2 years of industrial experience in responsive software development in Python (Django), MongoDB, Express, React, and
Node.js. Coupled with a joint 2 years of personal, volunteering, and freelancing experience in mobile and frontend development using React Native, NextJS. 
                        </p>
                        <p className="mt-3">
                            I'm focused on going above and beyond to provide the
                            best solutions to customers, as I've built landing
                            pages for businesses as a freelancer, while
                            maintaining the drive to stay motivated to keep
                            learning and growing as a professional in this
                            field.
                        </p>
                    </div>
                </div>

                <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className="lg:self-start xl:self-center xl:w-2/5 mt-4 lg:mt:0 mb-8 lg:mb-0"
                >
                    <AnimationOnScroll animateIn="animate__bounceIn">
                        <img
                            id="my-pic"
                            className="mx-auto h-72 w-72 sm:h-96 sm:w-96 lg:h-[16rem] lg:w-[16rem] xl:h-[20rem] xl:w-[20rem] rounded-full shadow-black shadow-lg lg:grayscale-[0.7] hover:grayscale-0 object-cover"
                            src="/images/me_rounded.png"
                        />
                    </AnimationOnScroll>
                    {/* <div className="absolute -top-4 -left-4  h-[22rem] w-[22rem] border-[3px] border-secondaryColor rounded-full"></div> */}
                </div>
            </div>
            <div className="lg:w-4/5 lg:mx-auto mt-12">
                <ButtonTabs
                    cssClasses="justify-start space-x-2"
                    tabs={tabs}
                    handleActiveTabChange={handleActiveTabChange}
                />
                <ul
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    className="techstack-list mt-4 flex items-end justify-center flex-wrap space-y-3"
                >
                    {activeTabItems.map((tech, index) => {
                        if (tech.icon != "null") {
                            return (
                                <li
                                    key={index}
                                    className={`flex flex-col items-center justify-center space-y-2 basis-1/4 lg:basis-1/6 xl:basis-[12.5%] text-center`}
                                >
                                    <img
                                        src={`https://icongr.am/devicon/${tech.icon}.svg?size=60&color=currentColor`}
                                    />
                                    <span className="text-sm">{tech.name}</span>
                                </li>
                            );
                        }
                    })}
                </ul>
                <ul
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className={`mt-2 flex flex-wrap md:flex-nowrap items-center justify-center space-x-4 md:space-x-12 md:list-disc`}
                >
                    {activeTabItems.map((tech, index) => {
                        if (tech.icon == "null") {
                            return (
                                <li key={index} className="">
                                    {tech.name}
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
        </section>
    );
};

export default About;

// MIN-WIDTH: 1024PX; MAX-WIDTH: 1200PX (MD-LG < X < LG)
// * 'Download my resume' button on Hero section
// * About section image and text display
// * Skill section's button tabs and list display

// MIN-WIDTH: 570PX; MAX-WIDTH: 1024PX (MD-SM < X < MD-LG)
// * About section image appears too big
// * Spacing between decimal and sections titles (experience and projects)

// WHAT'S LEFT?
// Projects and Recommendations section
// Hyperlinking and correction of texts
