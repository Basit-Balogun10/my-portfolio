import React, {useState} from "react";

import { IoMdMoon, IoMdSunny } from "react-icons/io";

import ButtonTabs from "../components/ButtonTabs";
import Experience from "../components/Experience";

import { experienceType } from "../components/Experience";
import { tabType } from "../components/ButtonTabs";

const myExperiences: experienceType[] = [
    {
        type: "volunteering",
        role: "Instructional Facilitator",
        organization: "IEEE Pre-University Ambassadors STEM Programme",
        startDate: "March 2022",
        endDate: "September 2022",
        contributions: [
            "I delivered talks and facilitated hands-on practical projects for students in selected secondary schools in Lagos, Nigeria.",
            "We showed them what can be built with skills revolving around STEM, hence increasing their passion to pursue a career in STEM",
        ],
        categories: ["all", "volunteering"],
    },
    {
        type: "volunteering",
        role: "Web Development Lead and Planning Committee Member",
        organization: "IEEE Nigeria Students Congress 2022",
        startDate: "May 2022",
        endDate: "June 2022",
        contributions: [
            "I was part of the committee responsible for managing all the administrative materials and congress registrations",
            "Led the web development team into successfully developing deploying to NETLIFY, a landing page for the congress using HTML, Tailwind CSS and Javascript. GitHub repo link below",
            "I worked with every web development team member, assigning tasks and bringing together the pieces built by each member by managing and merging their Pull Requests on GitHub.",
        ],
        categories: ["all", "volunteering"],
        projectGithubRepo:
            "https://ieee-nigeria-students-congress-2022.netlify.app",
    },
    {
        type: "full-time",
        role: "Web Developer",
        organization: "Synergy Network International",
        startDate: "March 2021",
        endDate: "Jan 2022",
        contributions: [
            "As a sole member of the team for a few months, I built a full-stack Django web app as a point of contact between youths looking for mentorship and mentors in the company. Website link below",
            "Using Django ‘auth_views’ and email system, I implemented a rich and secure authentication system featuring password change and reset, account activation, email address verification, and email notifications on changes in user credentials among others.",
            "Implemented a “Quick Login” feature to display login forms to visitors and speed up authentication to about 15% as they won't have to navigate to the login page.",
            "Provided a satisfying User Experience with a smooth, animated user interface using Bootstrap",
            "Improved engagements in the blog by ensuring there is no page reload as a result of blog actions (like, comments and replies) using JQuery and AJAX requests",
        ],
        categories: ["all", "full time"],
        projectLiveLink:
            "https://synergynetworkinternational.pythonanywhere.com/",
    },
    {
        type: "full-time",
        role: "Software Engineering Intern",
        organization: "Matt Young Media",
        startDate: "April 2023",
        endDate: "Present",
        contributions: [
            "Developed and implemented a React/TypeScript web application, utilizing Jest for unit testing and GitHub Actions for CI/CD, to optimize internal processes and reduce build times by 10%",
            "Joined and collaborated with a cross-functional development team of a LinkedIn leads generation and management tool across multiple domains like ML, Design and Product Management, during critical pre-release stages of a LinkedIn leads generation and management tool",
            "Together with the team, I implemented enhancement features, whilst fixing subtle and critical bugs and issues, dramatically improving system stability to improve user experience, optimize product quality and reduce crashes by at least 20% prior to launch",
            "I provided valuable insights and perspectives targeted at product enhancements/improvements during team discussions and sometimes through written documents, ensuring that users get the optimal value from the service.",
            "Additionally, I spearheaded and played a crucial role in the development of a doc-status client management tool using React, Node.js, Express and MongoDB with instrumental contributions to ensuring efficient deployment processes.",
            "Built highly collaborative relationships across engineering and non-engineering teams and networked extensively with fellow interns and existing staff members hence, building a reputation as an enthusiastic team player and achieving shared success on several occasions with the team",
            "Exhibited an initiative in reaching out to non-engineers and collaborating effectively as a team, using my ability to communicate and engage with individuals from diverse backgrounds and roles, hence contributing massively to a positive team dynamic and strengthening the overall workflow",
            "Demonstrated great attention to detail and continually sought out feedback and self-improvement opportunities through a growth mindset and eagerness to learn with exuded passion and energy.",
        ],
        categories: ["all", "full time"],
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
    const [activeTabItems, setActiveTabItems] =
        useState<experienceType[]>(myExperiences);

    const handleActiveTabChange = (category: string) => {
        console.log(category, "cat");
        const updatedTabItems = myExperiences.filter((experience) =>
            experience.categories.includes(category)
        );
        console.log(updatedTabItems, "uti");
        setActiveTabItems(updatedTabItems);
    };

    return (
        <section id="experience" className="mt-12 mb-14 px-7 lg:px-60">
            {/* <h2 className="relative lg:block flex items-center justify-center mb-8 lg:mb-4 font-comfortaa text-2xl dark:text-white lg:after:block after:absolute after:w-full lg:after:w-[52%] after:mt-6 lg:after:mt-0 lg:after:ml-[31rem] after:bottom-0 lg:after:bottom-auto lg:after:top-1/2  after:border-[1.5px] lg:after:border after:border-mainColor dark:after:border-slate-400 overflow-x-hidden overflow-y-hidden"> */}
            <h2
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="50"
                className="relative xl:block flex items-center justify-center mb-6 xl:mb-4 font-comfortaa text-2xl dark:text-white xl:after:block after:absolute xl:after:w-3/5 xl:after:mt-0 xl:after:ml-[35rem] xl:after:top-1/2 xl:after:border after:border-mainColor dark:after:border-slate-400 overflow-hidden"
            >
                <span className="font-pacifico lg:font-extrabold mb-2 lg:mb-0 sm:mr-4 lg:mr-4 text-3xl lg:text-2xl text-dimmedSecondaryColor dark:text-secondaryColor ">
                    03.
                </span>
                <span className="font-semibold lg:font-extrabold text-center xl:text-left">
                    And the Experience I've Gained So Far 👌🏾
                </span>
            </h2>

            <ButtonTabs
                tabs={tabs}
                handleActiveTabChange={handleActiveTabChange}
                cssClasses="justify-start space-x-2"
            />

            <div className="lg:px-12 mt-6 space-y-8">
                {activeTabItems.map((experience, index) => (
                    <>
                        <Experience key={index} experience={experience} />
                    </>
                ))}
            </div>
        </section>
    );
};

export default Experiences;
