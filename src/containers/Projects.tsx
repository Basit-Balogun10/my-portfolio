import React from 'react'

import { IoMdMoon, IoMdSunny } from "react-icons/io";

import ButtonTabs from "../components/ButtonTabs";

import { tabType } from "../components/ButtonTabs";
import Project, { projectType } from '../components/Project';

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
        title: "Featured",
        isActive: true,
        icon: IoMdMoon,
    },
    {
        title: "Others",
        isActive: false,
        icon: IoMdSunny,
    },
];

const Projects = () => {
  return (
      <section>
          <h4>Rhetorical question?</h4>
          <h2>Solutions I Provided</h2>

          <ButtonTabs tabs={tabs} />

          {
            myProjects.map((project, index) => (
              <Project key={index} project={project}/>
            ))
          }
      </section>
  );
}

export default Projects