import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";

import { Scrollbar, A11y, Mousewheel, Keyboard, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";

interface propsType {
    project: projectType;
    index: number;
}

export interface projectType {
    name: string;
    categories: string[];
    featured: boolean;
    description: string;
    imgUrl: string;
    liveUrl: string;
    problem: string;
    repoUrl: string;
    technologyUsed: string[];
    year: string;
}

const Project = ({ project, index }: propsType) => {
    return (
        <div
            className={`md:relative md:w-[85%] mx-auto mb-10 md:mb-12 flex ${
                index % 2 != 0 ? "md:flex-row-reverse" : ""
            } flex-wrap justify-start items-start`}
        >
            <div
                className={`md:absolute top-[25px] md:w-3/5 md:h-64 text-center ${
                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                }`}
            >
                <div className="flex md:block justify-between items-center">
                    <h3
                        className={`flex-auto font-semibold font-comfortaa text-xl text-left ${
                            index % 2 === 0 ? "md:text-left" : "md:text-right"
                        }`}
                    >
                        {project.name.toUpperCase()}
                    </h3>
                    <div className={`flex flex-auto md:hidden items-center space-x-4`}>
                        <a href={project.repoUrl} target="_blank">
                            <FiGithub className="w-6 h-6 text-dimmedSecondaryColor dark:text-secondaryColor" />
                        </a>
                        <a href={project.liveUrl} target="_blank">
                            <FaExternalLinkAlt className="w-6 h-6 text-dimmedSecondaryColor dark:text-secondaryColor" />
                        </a>
                    </div>
                </div>

                {/* DESKTOP ONLY!!! */}
                <div className="hidden md:block">
                    <Swiper
                        modules={[Scrollbar, A11y, Mousewheel, Autoplay]}
                        spaceBetween={120}
                        height={160}
                        slidesPerView={1}
                        mousewheel={true}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                        }}
                        direction="vertical"
                        className=""
                    >
                        {[1, 2].map((ele) => (
                            <SwiperSlide>
                                <div
                                    className={`mt-1 px-4 py-6 text-left ${
                                        index % 2 === 0
                                            ? "md:text-left"
                                            : "md:text-right"
                                    } bg-gray-300 dark:bg-lighterMainColor/80 border border-gray-300 dark:border-lighterMainColor/80 rounded`}
                                >
                                    {ele % 2 == 0 ? (
                                        <p className="">
                                            <p>THE PROBLEM</p>
                                            {project.problem}
                                        </p>
                                    ) : (
                                        <p className="">
                                            {project.description}
                                        </p>
                                    )}
                                    <div className="flex items-center justify-between mt-4">
                                        <ul
                                            className={`flex items-center ${
                                                index % 2 === 0
                                                    ? "md:justify-start"
                                                    : "md:justify-end"
                                            } space-x-4`}
                                        >
                                            {project.technologyUsed.map(
                                                (tech, index) => (
                                                    <li
                                                        key={index}
                                                        className="text-dimmedSecondaryColor dark:text-secondaryColor"
                                                    >
                                                        {tech}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                        <div className="flex items-center space-x-3">
                                            <a
                                                href={project.repoUrl}
                                                target="_blank"
                                            >
                                                <FiGithub className="w-6 h-6 text-dimmedSecondaryColor dark:text-secondaryColor" />
                                            </a>
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                            >
                                                <FaExternalLinkAlt className="w-6 h-6 text-dimmedSecondaryColor dark:text-secondaryColor" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* MOBILE VIEW ONLY!!! */}
                <img
                    src={project.imgUrl}
                    className={`md:hidden h-56 my-6 object-cover rounded-md shadow-md shadow-black`}
                />
                <div
                    className={`md:hidden mt-1 px-4 py-6 text-left ${
                        index % 2 === 0 ? "md:text-left" : "md:text-right"
                    } bg-gray-300 dark:bg-lighterMainColor/80 border border-gray-300 dark:border-lighterMainColor/80 rounded`}
                >
                    <p className="border-b pb-4">
                        <p>THE PROBLEM</p>
                        {project.problem}
                    </p>
                    <p className="my-4">{project.description}</p>
                    <ul
                        className={`flex flex-wrap items-center justify-center space-x-3`}
                    >
                        {project.technologyUsed.map((tech, index) => (
                            <li
                                key={index}
                                className="text-dimmedSecondaryColor dark:text-secondaryColor"
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <img
                src={project.imgUrl}
                className={`hidden md:block w-1/2 h-72 ${
                    index % 2 === 0 ? "ml-auto" : "mr-auto"
                } object-contain md:object-cover rounded-xl shadow-lg shadow-black`}
            />
        </div>
    );
};

export default Project;
