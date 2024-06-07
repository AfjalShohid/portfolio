import React from "react";
// import Work from "../Components/Work";
// import { personalDetails, workDetails, eduDetails } from "../Details";
import { personalDetails } from "../Details";
import { Timeline, Event } from "react-timeline-scribble";

function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-gradient text-dark-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">{personalDetails.about}</p>
      </section>
      <React.Fragment>
        <h1 className="text-2xl text-gradient text-dark-heading  md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work Experience
        </h1><br />
        <Timeline>
          <Event interval={"October 2022 – Present"} title={"Front Desk Associate"} subtitle={"Hampton Inn by Hilton, ON, CA"}>
            🔹Welcomed guests with a warm and professional demeanor, creating a positive first impression.<br />
            🔹Managed check-in and check-out processes efficiently, ensuring a seamless experience for guests.<br />
            🔹Handled guest inquiries and concerns promptly and effectively, enhancing overall guest satisfaction.<br />
            🔹Assisted in maintaining cleanliness and organization of the front desk area, contributing to a pleasant atmosphere.<br />
            🔹Collaborated with other hotel departments to coordinate guest services and resolve issues efficiently.<br />
            🔹Demonstrated excellent communication and interpersonal skills, building rapport with guests and colleagues.<br />
            🔹Exceed customer service expectations, achieving a 20% increase in efficiency.
          </Event>
          <Event interval={"September 2023 – April 2024"} title={"Teaching Assistant, Student Marker, and Student Lab Demonstrator"} subtitle={"Trent University, Peterborough, ON, CA"}>
            🔹Provide hands-on instructional support in Software Design and Modelling, and emphasizing problem-solving.<br />
            🔹Collaborate closely with a supervisor to align activities with the overall course objectives.<br />
            🔹Facilitate practical application, leading to a 25% improvement in problem-solving.
          </Event>
          <Event interval={"Sep 2021 – Apr 2022, Sep 2022 – Oct 2022"} title={"Cashier"} subtitle={"Petro Canada, Peterborough, ON, CA"}>
            🔹Processed customer transactions accurately and efficiently, handling cash, debit, and credit card payments.<br />
            🔹Analyzed and managed the journeys of entire user-flow for multiple clients.<br />
            🔹Analyzed and managed the journeys of entire user-flow for multiple clients.<br />
            🔹Analyzed and managed the journeys of entire user-flow for multiple clients.<br />
            🔹Analyzed and managed the journeys of entire user-flow for multiple clients.<br />
            🔹Technology used at workplace is Adobe Experience Manager (AEM) for development and Adobe Analytics for reports and visualization of data.
          </Event>
        </Timeline><br />


        <h1 className="text-2xl text-gradient pt-10 text-dark-heading  md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1><br />
        <Timeline>
          <Event interval={"2023 – 2024"} title={"Master of Science in Big Data Analytics"} subtitle={"Trent University, ON, CA"}> </Event>
          <Event interval={"2020 – 2022"} title={"Master of Science in Computer Science"} subtitle={"Somaiya Vidyavihar University, IN"}> </Event>
          <Event interval={"2017 – 2020"} title={"Bachelor of Science in Computer Science"} subtitle={"University of Mumbai, IN"}></Event>
        </Timeline>
      </React.Fragment>
    </main>
  );
}

export default About;
