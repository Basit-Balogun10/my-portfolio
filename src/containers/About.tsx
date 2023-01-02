import React, { useState } from "react";

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
    id: number;
    name: string;
    icon: IconType;
    categories: string[];
}

const techStacks: techStacksType[] = [
    {
        id: 1,
        name: "Javascript",
        icon: FaJs,
        categories: ["all", "languages"],
    },
    {
        id: 2,
        name: "Python",
        icon: FaPython,
        categories: ["all", "languages"],
    },
    {
        id: 3,
        name: "Git & GitHub",
        icon: FaGithub,
        categories: ["all", "dev tools"],
    },
    {
        id: 4,
        name: "CSS",
        icon: FaCss3,
        categories: ["all", "languages"],
    },
    {
        id: 5,
        name: "HTML",
        icon: FaHtml5,
        categories: ["all", "languages"],
    },
    {
        id: 6,
        name: "React Native",
        icon: FaReact,
        categories: ["all", "libs/frameworks"],
    },
    {
        id: 6,
        name: "Django",
        icon: FaReact,
        categories: ["all", "libs/frameworks"],
    },
    {
        id: 6,
        name: "DRF",
        icon: FaReact,
        categories: ["all", "libs/frameworks"],
    },
    {
        id: 6,
        name: "Tailwind CSS",
        icon: FaReact,
        categories: ["all", "libs/frameworks"],
    },
    {
        id: 6,
        name: "Next.js",
        icon: FaReact,
        categories: ["all", "libs/frameworks"],
    },
    {
        id: 6,
        name: "Vite",
        icon: FaReact,
        categories: ["all", "libs/frameworks"],
    },
    {
        id: 6,
        name: "Typescript",
        icon: FaReact,
        categories: ["all", "languages"],
    },
    {
        id: 6,
        name: "C",
        icon: FaReact,
        categories: ["all", "languages"],
    },
    {
        id: 6,
        name: "Vercel",
        icon: FaReact,
        categories: ["all", "dev tools"],
    },
    {
        id: 6,
        name: "Netlify",
        icon: FaReact,
        categories: ["all", "dev tools"],
    },
    {
        id: 6,
        name: "AJAX",
        icon: FaReact,
        categories: ["all", "libs/frameworks"],
    },
    {
        id: 6,
        name: "jQuery",
        icon: FaReact,
        categories: ["all", "libs/frameworks"],
    },
    {
        id: 6,
        name: "Bootstrap",
        icon: FaReact,
        categories: ["all", "libs/frameworks"],
    },
    {
        id: 6,
        name: "Firebase",
        icon: FaReact,
        categories: ["all", "libs/frameworks"],
    },
    {
        id: 6,
        name: "Jest",
        icon: FaReact,
        categories: ["all", "libs/frameworks"],
    },
    {
        id: 6,
        name: "Python Unittest",
        icon: FaReact,
        categories: ["all", "libs/frameworks"],
    },
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
        <section className="my-20 px-7 lg:px-44 xl:px-60">
            <h2 className="relative mb-4 font-extrabold font-comfortaa text-2xl dark:text-white after:block lg:after:absolute lg:after:mt-0 lg:after:w-4/5 lg:after:ml-[17rem] after:top-1/2 after:border after:border-mainColor dark:after:border-slate-400 overflow-hidden">
                <span className="font-pacifico mr-4 text-dimmedSecondaryColor dark:text-secondaryColor">
                    01.
                </span>
                First Things First!
            </h2>

            <div className="flex lg:justify-center lg:items-center flex-col-reverse lg:flex-row flex-wrap lg:flex-nowrap lg:space-x-14 text-lg leading-relaxed">
                <div className="lg:w-3/5 xl:w-3/5">
                    <div>
                        <p className="mb-3">
                            What's up? I am Basit and I enjoy creating
                            things that live on the internet. My interest in web
                            development started back in 2012 when I decided to
                            try editing custom Tumblr themes — turns out hacking
                            together a custom reblog button taught me a lot
                            about HTML & CSS!
                        </p>
                        <p className="mt-3">
                            Fast-forward to today, and I’ve had the privilege of
                            working at an advertising agency, a start-up, a huge
                            corporation, and a student-led design studio. My
                            main focus these days is building accessible,
                            inclusive products and digital experiences at
                            Upstatement for a variety of clients.
                        </p>

                        <p className="mt-3">
                            I also recently launched a course that covers
                            everything you need to build a web app with the
                            Spotify API using Node & React. Here are a few
                            technologies I’ve been working with recently:
                        </p>
                    </div>
                </div>

                <div className="lg:self-start xl:self-center xl:w-2/5 mt-4 lg:mt:0 mb-8 lg:mb-0">
                    <img
                        id="my-pic"
                        className="mx-auto h-72 w-72 sm:h-96 sm:w-96 lg:h-[16rem] lg:w-[16rem] xl:h-[22rem] xl:w-[22rem] rounded-full shadow-black shadow-lg lg:grayscale-[0.7] hover:grayscale-0 object-cover"
                        src="/images/me_rounded.png"
                    />
                    {/* <div className="absolute -top-4 -left-4  h-[22rem] w-[22rem] border-[3px] border-secondaryColor rounded-full"></div> */}
                </div>
            </div>
            <div className="lg:w-4/5 lg:mx-auto mt-12">
                <ButtonTabs
                    cssClasses="justify-start space-x-2"
                    tabs={tabs}
                    handleActiveTabChange={handleActiveTabChange}
                />
                <ul className="techstack-list mt-4 flex items-end justify-center flex-wrap space-y-3">
                    {activeTabItems.map((tech, index) => (
                        <li
                            key={index}
                            className={`flex flex-col items-center justify-center space-y-2 basis-1/4 lg:basis-1/6 xl:basis-[12.5%] text-center`}
                        >
                            <tech.icon className="w-14 h-14" />
                            <span className="text-sm">{tech.name}</span>
                        </li>
                    ))}
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
