import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Header from '../header/Header'
import './home.css'
const Home = () => {
  return (
    <>
      <div className="bg-dark text-light min-vh-100">
        <Header/>
        {/* Hero Section */}
        <section id="home" className="d-flex align-items-center min-vh-100">
          <div className="container">
            <div className="row align-items-center">
              
              {/* Left Content */}
              <div className="col-lg-8 col-md-12 text-center text-lg-start">
                <h1 className="display-3 fw-bold mb-3 hero-title">
                  Harshita Dundale
                </h1>
                
                <h4 className="mb-4 hero-subtitle" style={{ color: "#e5e7eb" }}>
                  Full Stack Developer (MERN Stack)
                </h4>
                
                <p className="lead mb-5" style={{ color: "#9ca3af", lineHeight: "1.7" }}>
                  Crafting beautiful, responsive web applications with modern technologies. 
                  Passionate about creating seamless user experiences and clean code.
                </p>

                {/* Action Buttons */}
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start mb-5">
                  <a 
                    href="#projects" 
                    className="btn btn-primary-custom btn-lg px-4 "
                  >
                    View My Work
                  </a>
                  <a 
                    href="#contact" 
                    className="btn btn-outline-custom btn-lg px-4 "
                  >
                    Get In Touch
                  </a>
                </div>

                {/* Social Links */}
                <div className="d-flex gap-4 justify-content-center justify-content-lg-start">
                  <a 
                    href="https://github.com/harshita-dundale" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-light fs-2 social-icon"
                  >
                    <FaGithub />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/contact-harshita-dundale/" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-light fs-2 social-icon"
                  >
                    <FaLinkedin />
                  </a>
                  <a 
                    href="mailto:harshuprajapti14@gmail.com" 
                    className="text-light fs-2 social-icon"
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </div>

              {/* Right Content - Professional Card */}
              <div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
                <div className="text-center">
                  <div 
                    className="card bg-transparent border-0 p-4"
                    style={{
                      background: "linear-gradient(145deg, rgba(168, 85, 247, 0.1), rgba(139, 92, 246, 0.05))",
                      border: "1px solid rgba(168, 85, 247, 0.3)",
                      borderRadius: "20px",
                      backdropFilter: "blur(10px)"
                    }}
                  >
                    <div className="card-body">
                      <div 
                        className="rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
                        style={{
                          width: "120px",
                          height: "120px",
                          background: "linear-gradient(135deg, #a855f7, #8b5cf6)",
                          fontSize: "3rem",
                          color: "white"
                        }}
                      >
                        HD
                      </div>
                      
                      <h5 className="card-title text-white mb-3">Full Stack Developer</h5>
                      
                      <div className="row text-center">
                        <div className="col-4">
                          <div className="mb-2">
                            <h6 style={{ color: "#a855f7" }}>200+</h6>
                            <small className="text-white">DSA </small>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="mb-2">
                            <h6 style={{ color: "#a855f7" }}>10+</h6>
                            <small className="text-white">Projects</small>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="mb-2">
                            <h6 style={{ color: "#a855f7" }}>24/7</h6>
                            <small className="text-white">Support</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;