import React from "react";

import { IoMdMoon, IoMdSunny } from "react-icons/io";

import ButtonTabs from "../components/ButtonTabs";

import { tabType } from "../components/ButtonTabs";
import Project, { projectType } from "../components/Project";

const myProjects: projectType[] = [
    {
        name: "Message box generator",
        featured: true,
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate cum ipsa placeat! Laudantium quam voluptas, aliquam error libero, cumque rem, excepturi vero tempore quaerat eius maxime maiores sed esse cupiditate!",
        problem:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate cum ipsa placeat! Laudantium quam voluptas, aliquam error libero, cumque rem, excepturi vero tempore quaerat eius maxime maiores sed esse cupiditate!",
        approach:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate cum ipsa placeat! Laudantium quam voluptas, aliquam error libero, cumque rem, excepturi vero tempore quaerat eius maxime maiores sed esse cupiditate!",
        technologyUsed: ["Next js", "Python"],
        year: "2022",
        imgUrl: "",
    },
    {
        name: "Tik-tac-toe",
        featured: false,
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate cum ipsa placeat! Laudantium quam voluptas, aliquam error libero, cumque rem, excepturi vero tempore quaerat eius maxime maiores sed esse cupiditate!",
        problem:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate cum ipsa placeat! Laudantium quam voluptas, aliquam error libero, cumque rem, excepturi vero tempore quaerat eius maxime maiores sed esse cupiditate!",
        approach:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate cum ipsa placeat! Laudantium quam voluptas, aliquam error libero, cumque rem, excepturi vero tempore quaerat eius maxime maiores sed esse cupiditate!",
        technologyUsed: ["Next js", "Python"],
        year: "2022",
        imgUrl: "",
    },
    {
        name: "Message-box-generator",
        featured: true,
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate cum ipsa placeat! Laudantium quam voluptas, aliquam error libero, cumque rem, excepturi vero tempore quaerat eius maxime maiores sed esse cupiditate!",
        problem:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate cum ipsa placeat! Laudantium quam voluptas, aliquam error libero, cumque rem, excepturi vero tempore quaerat eius maxime maiores sed esse cupiditate!",
        approach:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate cum ipsa placeat! Laudantium quam voluptas, aliquam error libero, cumque rem, excepturi vero tempore quaerat eius maxime maiores sed esse cupiditate!",
        technologyUsed: ["Next js", "Python"],
        year: "2022",
        imgUrl: "",
    },
];

const tabs: tabType[] = [
    {
        displayName: "All",
        title: "all",
    },
    {
        displayName: "Featured",
        title: "featured",
    },
    {
        displayName: "Others",
        title: "others",
    },
];

const Projects = () => {
    const handleActiveTabChange = (category: string) => {
        // const updatedTabItems = techStacks.filter(
        //     (techStack) => category in techStacks.categories
        // );
        // setActiveTabItems(updatedTabItems);
    };

    return (
        <section className="my-20 px-7 lg:px-60">
            <h2 className="relative xl:block flex items-center justify-center mb-6 xl:mb-4 font-comfortaa text-2xl dark:text-white xl:after:block after:absolute xl:after:w-3/5 xl:after:mt-0 xl:after:ml-[33.5rem] xl:after:top-1/2 xl:after:border after:border-mainColor dark:after:border-slate-400 overflow-hidden">
                <span className="font-pacifico lg:font-extrabold mb-2 lg:mb-0 sm:mr-4 text-3xl lg:text-2xl text-dimmedSecondaryColor dark:text-secondaryColor ">
                    02.
                </span>
                <span className="font-semibold lg:font-extrabold text-center xl:text-left tracking-wide">
                    Let's Talk About the Projects I've Built
                </span>
            </h2>

            <ButtonTabs
                cssClasses="justify-start space-x-2"
                defaultActiveTabIndex={1}
                handleActiveTabChange={handleActiveTabChange}
                tabs={tabs}
            />

            <div className="">
                {myProjects.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
