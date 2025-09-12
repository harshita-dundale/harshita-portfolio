import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUserAlt, FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";
import "./about.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    const aboutSection = document.getElementById("about");
    if (aboutSection) observer.observe(aboutSection);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const stats = [
    { number: "150+", label: "DSA Problems", icon: <FaCode />, delay: "0.2s" },
    { number: "10+", label: "Projects", icon: <FaLaptopCode />, delay: "0.4s" },
    { number: "24/7", label: "Support", icon: <FaRocket />, delay: "0.6s" },
  ];

  const FloatingElement = ({ children, delay = "0s" }) => (
    <div className="floating-element" style={{ animationDelay: delay }}>
      {children}
    </div>
  );

  return (
    <section
      id="about"
      className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-light about-container"
     
      style={{ backgroundColor: "#0d0d0d", minHeight: "100vh" }}
    >
      <div className="container py-5">
        {/* Heading */}
        <div className="text-center mb-5">
          <h1
            className={`fw-bold mb-3 about-title ${
              isVisible ? "animate__animated animate__fadeInUp" : ""
            }`}
          >
            About Me
          </h1>
          <div
            className="about-title-underline"
            style={{
              animation: isVisible ? "fadeInUp 1s ease 0.3s both" : "none",
            }}
          />
        </div>

        <div className="row align-items-center">
          {/* Left */}
          <div className="col-md-7">
            <div
              style={{
                animation: isVisible ? "slideInLeft 1s ease 0.5s both" : "none",
              }}
            >
              <FloatingElement delay="0.5s">
                <p className="lead mb-4 about-lead">
                  Dedicated and self-motivated{" "}
                  <span className="about-highlight">BCA student</span> with
                  strong time management and organizational skills. Passionate
                  about building efficient solutions using{" "}
                  <span className="about-highlight">MERN stack</span>{" "}
                  technologies.
                </p>
              </FloatingElement>

              <FloatingElement delay="1s">
                <p className="mb-4 about-paragraph">
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open-source projects, or
                  enjoying a good cup of coffee while brainstorming my next
                  project.
                </p>
              </FloatingElement>
            </div>

            {/* Stats */}
            <div className="row text-center mt-5">
              {stats.map((stat, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div
                    className="stat-card p-4 rounded-4 h-100"
                    style={{
                      animation: isVisible
                        ? `fadeInUp 1s ease ${stat.delay} both`
                        : "none",
                    }}
                  >
                    <div className="mb-3 stat-icon">{stat.icon}</div>
                    <h3 className="stat-number">{stat.number}</h3>
                    <p className="mb-0 stat-label">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Profile */}
          <div className="col-md-5 d-flex justify-content-center mt-4 mt-md-0">
            <div
              className="profile-container"
              style={{
                animation: isVisible ? "slideInRight 1s ease 0.7s both" : "none",
              }}
            >
              <div className="profile-ring"></div>
              <div className="profile-ring"></div>

              <FloatingElement delay="1.5s">
                <div className="rounded-circle d-flex justify-content-center align-items-center position-relative profile-avatar">
                  <FaUserAlt size={100} className="profile-icon" />
                </div>
              </FloatingElement>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
