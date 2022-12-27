import React from "react";

import { FaJs, FaPython, FaCss3, FaHtml5, FaReact, FaGithub } from "react-icons/fa";
// import { IoLogoFirebase, } from "react-icons/io";
import { IconType } from "react-icons/lib";

interface techStacksType {
    id: number;
    name: string;
    icon: IconType;
}

const techStacks: techStacksType[] = [
    {
        id: 1,
        name: "Javascript",
        icon: FaJs,
    },
    {
        id: 2,
        name: "Python",
        icon: FaPython,
    },
    {
        id: 3,
        name: "Git & GitHub",
        icon: FaGithub,
    },
    {
        id: 4,
        name: "CSS",
        icon: FaCss3,
    },
    {
        id: 5,
        name: "HTML",
        icon: FaHtml5,
    },
    {
        id: 6,
        name: "React Native",
        icon: FaReact,
    },
    {
        id: 6,
        name: "Django",
        icon: FaReact,
    },
    {
        id: 6,
        name: "Django Rest Framework",
        icon: FaReact,
    },
    {
        id: 6,
        name: "Tailwind CSS",
        icon: FaReact,
    },
    {
        id: 6,
        name: "Next.js",
        icon: FaReact,
    },
    {
        id: 6,
        name: "Vite",
        icon: FaReact,
    },
    {
        id: 6,
        name: "Typescript",
        icon: FaReact,
    },
    {
        id: 6,
        name: "C",
        icon: FaReact,
    },
    {
        id: 6,
        name: "Vercel",
        icon: FaReact,
    },
    {
        id: 6,
        name: "Netlify",
        icon: FaReact,
    },
    {
        id: 6,
        name: "AJAX",
        icon: FaReact,
    },
    {
        id: 6,
        name: "jQuery",
        icon: FaReact,
    },
    {
        id: 6,
        name: "Bootstrap",
        icon: FaReact,
    },
    {
        id: 6,
        name: "Firebase",
        icon: FaReact,
    },
    {
        id: 6,
        name: "Jest",
        icon: FaReact,
    },
    {
        id: 6,
        name: "Python Unittest",
        icon: FaReact,
    },
];

const About = () => {
    return (
        <section className="my-20 px-7 md:px-60">
            <h2 className=" mb-4 font-extrabold font-comfortaa text-2xl dark:text-white">
                <span className="font-pacifico mr-4 text-dimmedSecondaryColor dark:text-secondaryColor ">
                    01.
                </span>
                About Me
            </h2>

            <div className="flex md:justify-center md:items-center flex-col-reverse md:flex-row flex-wrap md:flex-nowrap md:space-x-14 text-lg leading-relaxed">
                <div className="md:w-3/5">
                    <div>
                        <p className="mb-3">
                            Hello! My name is Brittany and I enjoy creating
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

                <div className="relative md:w-2/5 mt-4 md:mt:0 mb-8 md:mb-0">
                    <img
                        id="my-pic"
                        className="w-full mx-auto md:h-[22rem] md:w-[22rem] rounded-full shadow-black shadow-lg grayscale-[0.5] hover:grayscale-0 object-cover"
                        src="/images/me_rounded.png"
                    />
                    {/* <div className="absolute -top-4 -left-4  h-[22rem] w-[22rem] border-[3px] border-secondaryColor rounded-full"></div> */}
                </div>
            </div>
            <ul
                className="techstack-list w-3/5 h-96 overflow-y-scroll mx-auto mt-16 grid grid-cols-4 gap-4
            ">
                {techStacks.map((tech, index) => (
                    <li
                        key={index}
                        className="flex flex-col items-center justify-center"
                    >
                        <tech.icon className="w-20 h-20 "/>
                        <span className="text-base">
                            {tech.name.toUpperCase()}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default About;
