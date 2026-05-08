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
          <Event interval={"May 2025 – Present"} title={"Release Readiness Specialist - Security & Risk"} subtitle={"Wealthsimple, Toronto, ON, CA"}>
            🔹Work with different teams to support and execute product releases, ensuring alignment with compliance and fraud prevention standards.<br />
            🔹Collaborate cross-functionally with Product Managers and R&D teams to gain insights on release scope, client impact, and risk exposure.<br />
            🔹Review and influence product designs in partnership with Designers, providing feedback from a client-first perspective.<br />
            🔹Analyze security and risk across product releases, proactively identifying vulnerabilities and fraud risks.<br />
            🔹Leverage advanced tooling and AI platforms such as ERNIE, LLM Gateways, WHALE, Zendesk, and SQL to analyze client feedback.<br />
            🔹Report findings and actionable feedback directly to R&D teams to enhance client experience and security posture.
          </Event>
          <Event interval={"August 2024 – May 2025"} title={"Contract Associate - Account Operations"} subtitle={"Wealthsimple, Toronto, ON, CA"}>
            🔹Assessed business methods within the team and identified inefficiencies to optimize operations.<br />
            🔹Conducted document verification and fraud detection for clients, maintaining quality assurance standards.<br />
            🔹Proposed and implemented customized solutions and automation to optimize performance and efficiency.<br />
            🔹Analyzed systems and collaborated with cross-functional teams to identify and resolve operational bugs.<br />
            🔹Delegated work to team members and ensured deadlines were met efficiently.
          </Event>
          <Event interval={"October 2022 – December 2024"} title={"Front Desk Associate"} subtitle={"Hampton Inn by Hilton, Peterborough, ON, CA"}>
            🔹Welcomed guests with a warm and professional demeanor, creating a positive first impression.<br />
            🔹Managed check-in and check-out processes efficiently, ensuring a seamless experience for guests.<br />
            🔹Handled guest inquiries and concerns promptly and effectively, enhancing overall guest satisfaction.<br />
            🔹Collaborated with other hotel departments to coordinate guest services and resolve issues efficiently.<br />
            🔹Successfully managed multiple tasks simultaneously, exceeding customer service expectations with a 20% increase in efficiency.
          </Event>
          <Event interval={"September 2023 – April 2024"} title={"Teaching Assistant, Student Marker, & Lab Demonstrator"} subtitle={"Trent University, Peterborough, ON, CA"}>
            🔹Provided hands-on instructional support in Software Design and Modelling, emphasizing problem-solving and analytical techniques.<br />
            🔹Collaborated closely with supervisor to align activities with overall course objectives.<br />
            🔹Facilitated practical application, leading to a 25% improvement in student problem-solving skills.
          </Event>
        </Timeline><br />


        <h1 className="text-2xl text-gradient pt-10 text-dark-heading  md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1><br />
        <Timeline>
          <Event interval={"September 2021 – April 2024"} title={"Bachelor of Science in Computer Science"} subtitle={"Trent University, Peterborough, ON, CA"}>
            🔹GPA: 86.1% - Dean's Honor Roll (3 Consecutive Years) - President's Honor Roll<br />
            🔹Specialized in Software Design, Algorithms, Data Structures, and Database Management.<br />
            🔹Completed comprehensive coursework in programming languages including C#, Java, Python, and C.
          </Event>
        </Timeline>
      </React.Fragment>
    </main>
  );
}

export default About;
