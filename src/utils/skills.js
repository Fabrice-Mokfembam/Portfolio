import React from 'react';
import { FaHtml5, FaCode, FaWrench } from 'react-icons/fa';

const skills = [
  {
    icon: <FaHtml5 className="text-blue-accent-700 text-4xl" />,
    title: "FrontEnd",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "SASS",
      "TailwindCSS",
      "Bootstrap",
      "APIs",
    ],
  },
  {
    icon: <FaCode className="text-blue-accent-700 text-4xl" />,
    title: "BackEnd",
    skills: [
      "NodeJS",
      "Express",
      "MongoDB",
      "Mongoose",
      "MySQL",
      "Sequelize",
      "PHP"
    ],
  },
  {
    icon: <FaWrench className="text-blue-accent-700 text-4xl" />,
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Netlify",
      "VSCode",
      "Postman",
      "Figma",
      "Vercel"
    ],
  }
];

export default skills;