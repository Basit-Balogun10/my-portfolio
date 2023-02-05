import React, { useState, useEffect, useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Mousewheel,
    Keyboard,
    Autoplay,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ButtonTabs from "../components/ButtonTabs";

import { tabType } from "../components/ButtonTabs";
import Project, { projectType } from "../components/Project";
import ThemeContext from "../contexts/ThemeContext";

const myProjects: projectType[] = [
    {
        name: "Message Box Generator",
        featured: true,
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate cum ipsa placeat! Laudantium quam voluptas, aliquam error libero, cumque rem, excepturi vero tempore quaerat eius maxime maiores sed esse cupiditate!",
        problem:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate cum ipsa placeat! Laudantium quam voluptas, aliquam error libero, cumque rem, excepturi vero tempore quaerat eius maxime maiores sed esse cupiditate!",
        imgUrl: "/images/demo.avif",
        liveUrl: "",
        repoUrl: "",
        technologyUsed: ["Next js", "Python"],
        year: "2022",
        categories: ["all", "featured"],
    },
    {
        name: "Tik-tac-toe",
        featured: false,
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate cum ipsa placeat! Laudantium quam voluptas, aliquam error libero, cumque rem, excepturi vero tempore quaerat eius maxime maiores sed esse cupiditate!",
        problem:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate cum ipsa placeat! Laudantium quam voluptas, aliquam error libero, cumque rem, excepturi vero tempore quaerat eius maxime maiores sed esse cupiditate!",
        liveUrl: "",
        repoUrl: "",
        technologyUsed: ["Next js", "Python"],
        year: "2022",
        imgUrl: "/images/demo.avif",
        categories: ["all", "others"],
    },
    {
        name: "Timekeepr",
        featured: true,
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate cum ipsa placeat! Laudantium quam voluptas, aliquam error libero, cumque rem, excepturi vero tempore quaerat eius maxime maiores sed esse cupiditate!",
        problem:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate cum ipsa placeat! Laudantium quam voluptas, aliquam error libero, cumque rem, excepturi vero tempore quaerat eius maxime maiores sed esse cupiditate!",
        liveUrl: "",
        repoUrl: "",
        technologyUsed: ["Next js", "Python"],
        year: "2022",
        imgUrl: "/images/demo.avif",
        categories: ["all", "featured"],
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
    const [activeTabItems, setActiveTabItems] =
        useState<projectType[]>(myProjects);
    const { theme } = useContext(ThemeContext);

    // useEffect(() => {
    //     document.querySelector('.swiper-scrollbar')?.classList.toggle("opacity-0")
    // })

    const handleActiveTabChange = (category: string) => {
        console.log(category, "cat");
        const updatedTabItems = myProjects.filter((project) =>
            project.categories.includes(category)
        );
        setActiveTabItems(updatedTabItems);
    };

    const handleSwiperInit = () => {
            document.querySelector(".swiper-scrollbar")?.classList.add("md:hidden")
            document.querySelector(".swiper-scrollbar")?.classList.add("bottom-0")
            document.querySelector(".swiper-scrollbar")?.classList.add("dark:bg-secondaryColor/70")
            document.querySelector(".swiper-scrollbar")?.classList.add("bg-dimmedSecondaryColor/60")
            
            document.querySelector(".swiper-pagination")?.classList.add("!bottom-5")
            
            document.querySelector(".swiper-button-next")?.classList.add("hidden")
            document.querySelector(".swiper-button-next")?.classList.add("md:block")
            
            document.querySelector(".swiper-button-prev")?.classList.add("hidden")
            document.querySelector(".swiper-button-prev")?.classList.add("md:block")
    }

    return (
        <section id="projects" className="my-12 px-7 lg:px-60">
            <h4
                data-aos="fade-left"
                data-aos-duration="1000"
                className="mb-4 font-comfortaa text-dimmedSecondaryColor dark:text-secondaryColor text-center text-sm lg:text-lg"
            >
                I bet you're now like "Okay... Talk is cheap, show me what you
                can do🙄"
            </h4>
            <h2
                data-aos="fade-right"
                data-aos-duration="1000"
                className="relative xl:block flex items-center justify-center mb-6 xl:mb-4 font-comfortaa text-2xl dark:text-white xl:after:block after:absolute xl:after:w-3/5 xl:after:mt-0 xl:after:ml-[35.5rem] xl:after:top-1/2 xl:after:border after:border-mainColor dark:after:border-slate-400 overflow-hidden"
            >
                <span className="font-pacifico lg:font-extrabold mb-2 lg:mb-0 sm:mr-4 text-3xl lg:text-2xl text-dimmedSecondaryColor dark:text-secondaryColor ">
                    02.
                </span>
                <span className="font-semibold lg:font-extrabold text-center xl:text-left tracking-wide">
                    Let's Talk About the Projects I've Built 😏
                </span>
            </h2>

            <ButtonTabs
                cssClasses="justify-start space-x-2"
                defaultActiveTabIndex={1}
                handleActiveTabChange={handleActiveTabChange}
                tabs={tabs}
            />

            <Swiper
                modules={[
                    Navigation,
                    Pagination,
                    Scrollbar,
                    A11y,
                    Mousewheel,
                    Keyboard,
                    Autoplay,
                ]}
                style={{
                    "--swiper-navigation-color": `${
                        theme === "light" ? "#05d652e8" : "#63fb9a"
                    }`,
                    "--swiper-navigation-size": "35px",
                    "--swiper-pagination-color": `${
                        theme === "light" ? "#05d652e8" : "#63fb9a"
                    }`,
                    "--swiper-pagination-bullet-inactive-opacity": "0.3",
                    "--swiper-pagination-bullet-inactive-color": `${
                        theme === "light" ? "#05d652e8" : "#63fb9a"
                    }`,
                }}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                mousewheel={true}
                keyboard={true}
                pagination={{ clickable: true, dynamicBullets: true }}
                scrollbar={{ draggable: true }}
                loop={true}
                // autoplay={{
                //     delay: 8000,
                // }}
                className="w-full mx-auto mt-6 md:my-12"
                onInit={handleSwiperInit}
            >
                {activeTabItems.map((project, index) => (
                    <SwiperSlide key={index}>
                        <Project project={project} index={index} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Projects;
