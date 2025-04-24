import { Divider } from "antd";
import {
  Skills,
  Certifications,
  Contact,
  Experience,
  Navbar,
  Profile,
  Projects,
} from "./sections";
import { ExperienceValues } from "./values";

export const PersonalPortfolio = () => {
  return (
    <div className="total-portfolio">
      <Navbar />
      <div id="profile">
        <Profile />
      </div>
      <div id="experience">
        <Divider children={<p style={{ color: "white" }}>Experience</p>} />
        <Experience values={ExperienceValues} />
      </div>
      <div id="projects">
        <Divider children={<p style={{ color: "white" }}>Projects</p>} />
        <Projects />
      </div>
      <div id="skills">
        <Divider children={<p style={{ color: "white" }}>Skills</p>} />
        <Skills />
      </div>
      <div id="certifications">
        <Divider children={<p style={{ color: "white" }}>Certifications</p>} />
        <Certifications />
      </div>
      <div id="contact">
        <Divider children={<p style={{ color: "white" }}>Contact</p>} />
        <Contact />
      </div>
    </div>
  );
};
