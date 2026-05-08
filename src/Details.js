// Enter all your detials in this file
import Typewriter from "typewriter-effect";
// Logo images
// import logogradient from "./assets/logo.png";
// import logo from "./assets/logo.png";
// // Profile Image
import profile from "./assets/profile.jpg";
// // Tech stack images
// import html from "./assets/techstack/html.png";
// import css from "./assets/techstack/css.png";
// import sass from "./assets/techstack/sass.png";
// import js from "./assets/techstack/js.png";
// import react from "./assets/techstack/react.png";
// import vue from "./assets/techstack/vue.png";
// import python from "./assets/techstack/python.png";
// import bootstrap from "./assets/techstack/bootstrap.png";
// import vscode from "./assets/techstack/vscode.png";
// import github from "./assets/techstack/github.png";
// import git from "./assets/techstack/git.png";
// import wordpress from "./assets/techstack/wordpress.png";
// import postman from "./assets/techstack/postman.png";
// import figma from "./assets/techstack/figma.png";
// import tableau from "./assets/techstack/tableau.png";
// import powerbi from "./assets/techstack/powerbi.png";
// import excel from "./assets/techstack/Excel.png";
// import word from "./assets/techstack/Word.png";
// import powerpoint from "./assets/techstack/PowerPoint.png";
// import plotly from "./assets/techstack/plotly.png";
// import seaborn from "./assets/techstack/seaborn.png";
// import matplotlib from "./assets/techstack/matplotlib.png";
// import typescript from "./assets/techstack/Typescript.png"
// // Project Images
// import projectImage1 from "./assets/projects/project1.jpg";
// import projectImage2 from "./assets/projects/project2.jpg";
// import projectImage3 from "./assets/projects/project3.jpg";
// import projectImage4 from "./assets/projects/project4.jpg";
// import projectImage5 from "./assets/projects/project5.jpg";
// import projectImage6 from "./assets/projects/project6.jpg";
// import projectImage7 from "./assets/projects/project7.jpg";


// Logos
// export const logos = {
//   logogradient: logogradient,
//   logo: logo,
// };

// Enter your Personal Details here
export const personalDetails = {
  name: "Afjal Shohid",
  tagline:<Typewriter
  options={{loop:true, autoStart: true}}
  onInit={(typewriter)=> {
  typewriter
  .typeString("Release Readiness Specialist at Wealthsimple")  
  .pauseFor(1500)
  .deleteChars(40)
  .typeString("Computer Science Graduate")
  .pauseFor(1500)
  .deleteChars(26)
  .typeString("Dean's & President's Honor Roll")
  .pauseFor(1500)
  .deleteChars(33)
  .typeString("Security & Risk Expert") 
  .start();
  }}
  />,
  img: profile,
  about: `I am a Computer Science graduate from Trent University (BSc, 86.1% GPA) with 3 years on Dean's & President's Honor Rolls. Currently a Release Readiness Specialist at Wealthsimple, focusing on security, risk management, and product launches. Experienced in full-stack development (C#, Java, JavaScript, Python), database management, and cross-functional collaboration. Proven track record in optimizing operations, fraud prevention, and enhancing product security while maintaining exceptional client experiences.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/afjal-shohid-a95b89227/",
  github: "https://github.com/AfjalShohid",
  twitter: "https://x.com/AfjalShohid1"
};


// // Tech Stack and Tools
// export const techStackDetails = {
//   html: html,
//   css: css,
//   js: js,
//   react: react,
//   vue: vue,
//   sass: sass,
//   python: python,
//   bootstrap: bootstrap,
//   vscode: vscode,
//   postman: postman,
//   wordpress: wordpress,
//   git: git,
//   github: github,
//   figma: figma,
//   tableau: tableau,
//   powerbi: powerbi,
//   excel: excel,
//   word: word,
//   powerpoint: powerpoint,
//   plotly:plotly,
//   seaborn:seaborn,
//   matplotlib:matplotlib,
//   typescript:typescript,
// };

// // Enter your Project Details here
export const projectDetails = [
  {
    title: "Subway System Management Application",
    description: `A sophisticated subway management system developed using C#. Features include station management, route planning using graph-based algorithms, and efficient shortest path calculations considering distance, time, and transfers. Demonstrates proficiency in data structures and algorithmic design.`,
    techstack: "C#, Data Structures, Graph Algorithms",
    previewLink: "#",
    githubLink: "https://github.com/AfjalShohid",
  },
  {
    title: "Identity Conflict Reform (Wealthsimple)",
    description: `Led the development of a report on project requirements, constraints, and scope through stakeholder meetings. Identified system enhancement opportunities, designed new processes using Figma, and evaluated implementation impact. Enhanced operational efficiency and security protocols.`,
    techstack: "Figma, Process Analysis, SQL",
    previewLink: "#",
    githubLink: "https://github.com/AfjalShohid",
  },
  {
    title: "Identity Conflict Process Automation (Wealthsimple)",
    description: `Mapped diverse scenarios for identity conflict resolution and developed comprehensive pseudocode for each scenario. Collaborated with automation specialists throughout development and testing phases, identifying and resolving bugs to optimize effectiveness and reliability.`,
    techstack: "SQL, Process Automation, Pseudocode, WHALE",
    previewLink: "#",
    githubLink: "https://github.com/AfjalShohid",
  },
  {
    title: "Portfolio Website",
    description: `Developed a personal portfolio website showcasing various HTML elements including images, tables, lists, and media. Created an online CV using HTML and CSS with a professional design inspired by modern resume templates.`,
    techstack: "HTML5, CSS3, JavaScript",
    previewLink: "https://afjalshohid.netlify.app",
    githubLink: "https://github.com/AfjalShohid/portfolio",
  },
];
//Contact Details here
export const contactDetails = {
  email: "afjalshohid@trentu.ca",
  phone: "437-232-2477",
};
