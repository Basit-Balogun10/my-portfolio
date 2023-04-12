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
        name: "My Portfolio Site",
        featured: true,
        description:
            "Can you see the 'RECURSION JOKE' in that image? Anyways, This site counts too, right? The code is open-source and I took inspiration from an online portfolio for the design \
            but it was all built by me from scratch using Vite, and the powerful CSS framework, Tailwind CSS.\
            Don't bother clicking the live link icon for this project, or you'll be a victim of the recursion joke.\
            Let's see what's in the next slide",
        problem:
            "I needed to showcase my skills and abilities as a developer, thought a portfolio site like this one could help with that. Also, it gives me an opportunity to build my online presence.",
        imgUrl: "/images/my_portfolio.png",
        liveUrl: "https://basitbalogun.vercel.app",
        repoUrl: "https://github.com/Basit-Balogun10/my-portfolio",
        technologyUsed: ["Vite", "Tailwind"],
        year: "2022",
        categories: ["all", "featured"],
    },
    {
        name: "Synergy Network International's Website",
        featured: false,
        description:
            "This is a fullstack website built using Django, it was my first one as a developer and took months to complete. The CSS framework used was Bootstrap, Django's requests were synchronous, so I used JQuery to send AJAX requests where necessary for a satisfying experience",
        problem:
            "There was a need to showcase the company online and a point of contact between youths looking for mentorship and mentors in the company.",
        liveUrl: "https://synergynetworkinternational.pythonanywhere.com/",
        repoUrl: "",
        technologyUsed: ["Django", "Bootstrap", "JQuery"],
        year: "2021",
        imgUrl: "/images/sni_home.png",
        categories: ["all", "featured"],
    },
    {
        name: "NASA Daily Image Checker",
        featured: true,
        description:
            "A single page application built using the MERN stack and hosted as a serverless function on Vercel. It is capable of fetching and displaying new image every day from NASA'S Astronomy Picture of the Day API. MongoDb is used to persist account credentials and it has a full server-side implementation of Google authentication",
        problem:
            "This app was built as an assessment in order to showcase a growth mindset and work of excellence as a potential intern in a company. And it required me to build an API using a backend stack I've never worked with prior to then and deliver in 7 days",
        liveUrl: "https://nasa-daily-image-checker.vercel.app/",
        repoUrl: "https://github.com/Basit-Balogun10/nasa-daily-image-checker",
        technologyUsed: ["Mongo DB", "Express", "React", "Node.js"],
        year: "2023",
        imgUrl: "/images/nasa_daily_image_checker.png",
        categories: ["all", "featured"],
    },
    {
        name: "AJM Elite Coaching's Website",
        featured: true,
        description:
            "A single page website built using the fast frontend framework, Next JS, with its ultimate sauce of Server Side Rendering. Made use of Email JS API to receive email/feedback from customers in the contact section",
        problem:
            "My client wanted bring their football academy online for the world to see, so I cooked up a solution using Next.js",
        liveUrl: "https://ajmelitecoaching.vercel.app/",
        repoUrl: "",
        technologyUsed: ["Next JS", "Tailwind CSS", "Email JS", "Swiper JS"],
        year: "2022",
        imgUrl: "/images/ajm_elite_coaching_website.png",
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
                // THIS PIECE WORKS FINE BUT TYPESCRIPT ERROR PERSISTS DURING DEPLOYMENT
                // SO, I RESORTED TO OVEWRITING THE APPROPRIATE PROPERTIES OF THE TARGET ELEMENTS
                // IN index.css (WITH MORE CSS SPECIFICITY)

                // style={{
                //     "--swiper-navigation-color": `${
                //         theme === "light" ? "#05d652e8" : "#63fb9a"
                //     }`,
                //     "--swiper-navigation-size": "35px",
                //     "--swiper-pagination-color": `${
                //         theme === "light" ? "#05d652e8" : "#63fb9a"
                //     }`,
                //     "--swiper-pagination-bullet-inactive-opacity": "0.3",
                //     "--swiper-pagination-bullet-inactive-color": `${
                //         theme === "light" ? "#05d652e8" : "#63fb9a"
                //     }`,
                // }}
                
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

