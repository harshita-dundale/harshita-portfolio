import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Construction Site Management System",
      description:
        "Built a full-stack app using React, Node.js, and MongoDB where builders can manage jobs, attendance, and profit/loss, while workers apply and track requests with real-time updates. Integrated Auth0 for secure authentication.",
      image: "/construction.png",
      tech: ["React", "Node.js", "MongoDB", "Bootstrap", "Auth0", "Cloudinary"],
      demo: "#",
      code: "https://github.com/harshita-dundale/Construction-Management-System",
    },
    {
      title: "Notes Management App",
      description:
        "Developed a full-stack app with JWT authentication & bcrypt for secure login/signup. Implemented CRUD operations for personal notes with real-time updates and built RESTful APIs with authentication/authorization middleware.",
      image: "/notes.png",
      tech: ["React", "Node.js", "MongoDB", "Bootstrap", "JWT", "Bcrypt.js"],
      demo: "#",
      code: "https://github.com/harshita-dundale/notes-app",
    },
    {
      title: "Quiz App",
      description:
        "Built a dynamic quiz app with real-time question rendering, timer-based interaction, and score tracking. Integrated JSON & Fetch API for asynchronous loading, used local storage to save progress, and enhanced UX with a clean, responsive UI.",
      image: "/Quiz.png",
      tech: ["HTML", "CSS", "JavaScript", "JSON", "LocalStorage"],
      demo: "#",
      code: "#",
    },
  ];

  return (
    <section id="projects" className="min-vh-100 text-light pt-5" style={{ backgroundColor: "#0d0d0d" }}>
      <div className="container py-5">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold mb-3 projects-title">Featured Projects</h1>
          <p className="fs-5 mb-0">Some of my recent work and personal projects</p>
          <div className="mx-auto mt-3" style={{ width: "80px", height: "4px", background: "linear-gradient(90deg, #a855f7, #8b5cf6)", borderRadius: "2px" }} />
        </div>

        <div className="row g-4">
          {projects.map((project, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="project-card h-100 rounded-4 p-0">
                {/* Project Image with Hover Overlay */}
                <div className="position-relative" style={{ height: "220px", overflow: "hidden", borderRadius: "20px 20px 0 0" }}>
                  <img src={project.image} alt={project.title} className="project-image w-100 h-100" />
                  {/* Hover overlay */}
                  <div className="project-overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center gap-3">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-project">
                      <FaExternalLinkAlt />
                    </a>
                    <a href={project.code} target="_blank" rel="noopener noreferrer" className="btn btn-project">
                      <FaGithub />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4">
                  <h5 className="fw-bold text-white mb-3">{project.title}</h5>
                  <p className="mb-4" style={{ lineHeight: "1.6" }}>{project.description}</p>

                  {/* Tech Badges */}
                  <div className="d-flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="tech-badge badge px-3 py-2">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-5">
          <a href="https://github.com/harshita-dundale" target="_blank" rel="noopener noreferrer" className="btn btn-view-all btn-lg px-5 py-3 fw-semibold">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
