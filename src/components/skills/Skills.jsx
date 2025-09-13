import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiPostman,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiJsonwebtokens,
  SiNetlify,
  SiVercel,
  SiRender,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import './skills.css'

const Skills = () => {
  const frontendSkills = [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { name: "Express.js", icon: <SiExpress />, color: "#ffffff" },
    { name: "Java", icon: <FaJava />, color: "#ED8B00" },
    { name: "REST APIs", icon: <FaNodeJs />, color: "#68A063" },
  ];

  const databaseSkills = [
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
    { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
    { name: "JWT", icon: <SiJsonwebtokens />, color: "#000000" },
  ];

  const tools = [
    { name: "VS Code", icon: <VscVscode />, color: "#007ACC" },
    { name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
    { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
    { name: "Netlify", icon: <SiNetlify />, color: "#00C7B7" },
    { name: "Vercel", icon: <SiVercel />, color: "#ffffff" },
    { name: "Render", icon: <SiRender />, color: "#46E3B7" },
  ];

  const learning = ["DSA", "Advanced React", "AI Integration", "Cloud Computing"];

  return (
    <section id="skills" className="py-5 text-light">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="skills-title mb-3">Skills & Technologies</h2>
          <p className="fs-5 mb-0">
            Technologies I work with to build amazing projects
          </p>
          <div className="skills-title-underline mt-3"></div>
        </div>

        {/* Categories */}
        <div className="row g-4 mb-5 justify-content-center">
          {/* Frontend */}
          <div className="col-lg-4 col-md-6">
            <div className="skill-category-card p-4 rounded-4 h-100">
              <div className="text-center mb-4">
                <h5 className="fw-bold" style={{ color: "#a855f7" }}>Frontend</h5>
                <small style={{ color: "#d1d5db" }}>User Interface & Experience</small>
              </div>
              <div className="d-flex flex-column gap-3">
                {frontendSkills.map((skill, index) => (
                  <div key={index} className="skill-item-card p-3 rounded-3 d-flex align-items-center">
                    <div
                      className="me-3 d-flex align-items-center justify-content-center"
                      style={{ fontSize: "1.8rem", color: skill.color, width: "40px", height: "40px" }}
                    >
                      {skill.icon}
                    </div>
                    <span className="fw-semibold text-white">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="col-lg-4 col-md-6">
            <div className="skill-category-card p-4 rounded-4 h-100">
              <div className="text-center mb-4">
                <h5 className="fw-bold" style={{ color: "#a855f7" }}>Backend</h5>
                <small style={{ color: "#d1d5db" }}>Server & Logic</small>
              </div>
              <div className="d-flex flex-column gap-3">
                {backendSkills.map((skill, index) => (
                  <div key={index} className="skill-item-card p-3 rounded-3 d-flex align-items-center">
                    <div
                      className="me-3 d-flex align-items-center justify-content-center"
                      style={{ fontSize: "1.8rem", color: skill.color, width: "40px", height: "40px" }}
                    >
                      {skill.icon}
                    </div>
                    <span className="fw-semibold text-white">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Database & Auth */}
          <div className="col-lg-4 col-md-6">
            <div className="skill-category-card p-4 rounded-4 h-100">
              <div className="text-center mb-4">
                <h5 className="fw-bold" style={{ color: "#a855f7" }}>Libraries & Auth</h5>
                <small style={{ color: "#d1d5db" }}>Database & Authentication</small>
              </div>
              <div className="d-flex flex-column gap-3">
                {databaseSkills.map((skill, index) => (
                  <div key={index} className="skill-item-card p-3 rounded-3 d-flex align-items-center">
                    <div
                      className="me-3 d-flex align-items-center justify-content-center"
                      style={{ fontSize: "1.8rem", color: skill.color, width: "40px", height: "40px" }}
                    >
                      {skill.icon}
                    </div>
                    <span className="fw-semibold text-white">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div>
          <h4 className="text-center mb-4" style={{ color: "#e5e7eb" }}>Development Tools</h4>
          <div className="row g-3 justify-content-center">
            {tools.map((tool, index) => (
              <div key={index} className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="tool-card p-3 rounded-4 text-center">
                  <div className="d-flex flex-column align-items-center justify-content-center h-100">
                    <div className="tool-icon mb-2" style={{ fontSize: "2.2rem", color: tool.color }}>
                      {tool.icon}
                    </div>
                    <h6 className="fw-bold text-white mb-0" style={{ fontSize: "0.8rem" }}>{tool.name}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning */}
        {/* <div className="text-center">
          <h4 className="mb-4" style={{ color: "#e5e7eb" }}>Currently Learning</h4>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {learning.map((item, index) => (
              <span key={index} className="badge learning-badge px-4 py-2 fs-6 fw-semibold">
                {item}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
