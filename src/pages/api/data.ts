import data from './data.json';
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
import education1 from "public/images/logosmkn1cimahi.png";
import education2 from "public/images/logoUnjani.png";
import project1 from "public/images/project1.jpg";
import project2 from "public/images/project2.png";

export const skillsLanguage = data.skillsLanguage.map((skill, index) => ({
  ...skill,
  image: [skills1, skills2, skills3, skills4][index]
}));

export const skillsFramework = data.skillsFramework.map((framework, index) => ({
  ...framework,
  image: [skillsFw1, skillsFw2, skillsFw3, skillsFw4, skillsFw5][index]
}));

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

export const experience = data.experience.map((exp, index) => ({
  ...exp,
  image: [company1, company2][index]
}));

export const education = data.education.map((edu, index) => ({
  ...edu,
  image: [education1, education2][index]
}));

export const project = data.project.map((proj, index) => ({
  ...proj,
  image: [project1, project2][index],
  skills1: [skills4, skills3][index],
  skills2: [skillsFw2, skillsFw1][index],
  skills3: [skillsFw4, skillsFw5][index],
}));
