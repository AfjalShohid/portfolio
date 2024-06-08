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
  .typeString("I am a Computer Science Graduate")  
  .pauseFor(1500)
  .deleteChars(35)
  .typeString("Dean's Honor Roll Recipient")
  .pauseFor(1500)
  .deleteChars(35)
  .typeString("President's Honor Roll Recipient")
  .pauseFor(1500)
  .deleteChars(35)
  .typeString("") 
  .start();
  }}
  />,
  img: profile,
  about: `I am a Computer Science graduate from Trent University with a solid foundation in programming and web development. With hands-on experience in customer service and project management, I excel in problem-solving and delivering exceptional results in fast-paced environments. Skilled in C#, Python, HTML, CSS, and Algorithms.`,
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
    // title: "Tensorflow vs BigQuery",
    // // image: projectImage7,
    // description: `The objective of this project is to comprehensively assess and contrast two prominent big data solutions, namely TensorFlow and Google BigQuery.`,
    // techstack: "Python, Tensorflow, Google Big Query",
    // previewLink: "https://tensorflowvsbigquery.netlify.app/",
    // githubLink: "https://github.com/Chinmay2911/TFvsBQProject",
  },
  {
    // title: "Chatbot Data Analysis",
    // // image: projectImage1,
    // description: `From the backend side, all the queries are collected and it creates a dashboard on Tableau which makes it easier to understand what students are keen to know about the college.`,
    // techstack: "Python, NLP, ML, HTML, CSS",
    // previewLink: "https://google.com",
    // githubLink: "https://github.com/Chinmay2911/Chatbot-Data-Analysis",
  },
  {
    // title: "Driver’s Drowsiness Detection System",
    // // image: projectImage2,
    // description: `This system will monitor the driver eyes using a camera and by developing an algorithm we can detect symptoms of driver fatigue early enough to avoid the person from sleeping.`,
    // techstack: "Python, Machine Learning",
    // previewLink: "https://google.com",
    // githubLink: "https://github.com/Chinmay2911/Driver-Drowsiness-Detection-System",
  },
  {
    // title: "COVID-19 Prediction and Forecasting using Machine Learning",
    // // image: projectImage3,
    // description: `Analysis and Prediction of cases in future on COVID-19 which was 92% accurate. Linear Regression and Support Vector Machine was used for prediction & model was trained with accuracy of 98%.`,
    // techstack: "Python, Linear Regression, Logistic Regression, Data Analysis, Data Visualization",
    // previewLink: "https://google.com",
    // githubLink: "https://github.com/Chinmay2911/COVID-19-Prediction-and-Forecasting-using-Machine-Learning",
  },
  {
    // title: "Football Player Detection",
    // // image: projectImage4,
    // description: `Player detection and ball detection in Football videos There are multiple ways to detect players in any sports videos. Here I have used simple image processing techniques to detect players by only using opencv. It detects first the green ground and make everything other then green color into black.`,
    // techstack: "Python, Linear Regression, Logistic Regression, Data Analysis, Data Visualization",
    // previewLink: "https://google.com",
    // githubLink: "https://github.com/Chinmay2911/Player_detection",
  },
  {
    // title: "QR-Code Attendance System",
    // // image: projectImage5,
    // description: `The proposed system generates unique QR code for every student. The teacher needs to scan the QR code of particular student in order to confirm the student’s attendance. This system enables us to speed up the process of taking attendance and would save us valuable teaching time.`,
    // techstack: "Python, JAVA, Google Apps Script, Database Management, Google APIs",
    // previewLink: "https://google.com",
    // githubLink: "https://github.com/Chinmay2911/QR-Code-Attendance",
  },
  {
    // title: "Predicting IMDB Movie Rating",
    // // image: projectImage6,
    // description: `Using Machine Learning to predict the IMDB score with the meaningful variables. Using a Random Forest algorithm (500 estimators).`,
    // techstack: "Python, BeautifulSoup, Parsing data, Data Analysis, Data Visualization",
    // previewLink: "https://google.com",
    // githubLink: "https://github.com/Chinmay2911/ProjectMovieRating",
  },
];

//Contact Details here
export const contactDetails = {
  email: "afjalshohid@trentu.ca",
};
