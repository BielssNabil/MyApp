import skills1 from "public/images/html.png";
import skills2 from "public/images/css.png";
import skills3 from "public/images/javascript.png";
import skills4 from "public/images/typescript.png";
import skillsFw1 from "public/images/react.png";
import skillsFw2 from "public/images/next.png";
import skillsFw3 from "public/images/vite.png";
import skillsFw4 from "public/images/tailwind.png";
import skillsFw5 from "public/images/bootstrap.png";
import skillsOther1 from "public/images/npm.png";
import skillsOther2 from "public/images/git.png";
import skillsOther3 from "public/images/wordpress.png";
import company1 from "public/images/sampulkreativ.jpeg";
import company2 from "public/images/svara.jpeg";
import education1 from "public/images/logostm.png";
import project1 from "public/images/project1.jpg";
import project2 from "public/images/project2.png";

export const skillsLanguage = [
  {
    id: 1,
    image: skills1,
    title: "html",
  },
  {
    id: 2,
    image: skills2,
    title: "css",
  },
  {
    id: 3,
    image: skills3,
    title: "JavaScript",
  },
  {
    id: 4,
    image: skills4,
    title: "Typescript",
  },
];
export const skillsFramework = [
  {
    id: 1,
    image: skillsFw1,
    title: "ReatJs",
  },
  {
    id: 2,
    image: skillsFw2,
    title: "NextJs",
  },
  {
    id: 3,
    image: skillsFw3,
    title: "ViteJs",
  },
  {
    id: 4,
    image: skillsFw4,
    title: "Tailwind",
  },
  {
    id: 4,
    image: skillsFw5,
    title: "Bootstrap",
  },
];
export const skillsOther = [
  {
    id: 1,
    image: skillsOther1,
    title: "ReatJs",
  },
  {
    id: 2,
    image: skillsOther2,
    title: "NextJs",
  },
  {
    id: 3,
    image: skillsOther3,
    title: "ViteJs",
  },
];
export const experience = [
  {
    id: 1,
    image: company1,
    companyName: "PT SAMPULKREATIV TECHNOLOGY",
    Position: "STUDENT INTERNSHIP - FRONT END WEB DEVELOPER",
    date: "January 2023 - April 2023",
  },
  {
    id: 1,
    image: company2,
    companyName: "PT SVARA INOVASI INDONESIA",
    Position: "INTERNSHIP - FRONT END WEB DEVELOPER",
    date: "September 2023 - Now",
  },
];
export const education = [
  {
    id: 1,
    image: education1,
    educationName: "SMK NEGERI 1 CIMAHI",
    status: "STUDENT - SOFTWARE ENGINEERING",
    date: "2020 - 2023",
  },
];

export const project = [
  {
    id: 1,
    image: project1,
    projectName: "Personal Website",
    description:
      "I create portfolio website projects with several features such as experience, education, skills, projects, dan responsiveness.",
    projectType1: "Website",
    projectType2: "Landing Page",
    link: "https://biels.vercel.app/",
    linkGithub: "https://github.com/BielssNabil/MyApp",
    skills1: skills4,
    skills2: skillsFw2,
    skills3: skillsFw4,
  },
  {
    id: 2,
    image: project2,
    projectName: "SportChic",
    description:
      "I created an E-Commerce website with the name SportChic which has various features such as buying products and such.",
    projectType1: "Website",
    projectType2: "E-Commerce",
    link: "/Maintenance",
    linkGithub: "/Maintenance",
    skills1: skills3,
    skills2: skillsFw1,
    skills3: skillsFw5,
  },
];
