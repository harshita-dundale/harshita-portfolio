import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCoffee, FaArrowUp } from "react-icons/fa";
import './footer.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <style>
        {`
          .footer-container {
            background: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%);
            border-top: 1px solid rgba(168, 85, 247, 0.2);
            position: relative;
            overflow: hidden;
          }
          
          .footer-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, #a855f7, transparent);
          }
          
          .footer-brand {
            background: linear-gradient(135deg, #a855f7, #8b5cf6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-size: 1.8rem;
            font-weight: bold;
          }
          
          .footer-link {
            color: #9ca3af !important;
            text-decoration: none !important;
            transition: all 0.3s ease;
            position: relative;
            padding: 0.5rem 0;
            display: inline-block;
          }
          
          .footer-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: 0;
            left: 0;
            background: #a855f7;
            transition: width 0.3s ease;
          }
          
          .footer-link:hover {
            color: #a855f7 !important;
            transform: translateX(5px);
          }
          
          .footer-link:hover::after {
            width: 100%;
          }
          
          .social-icon-footer {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(139, 92, 246, 0.1));
            border: 1px solid rgba(168, 85, 247, 0.3);
            border-radius: 15px;
            color: #a855f7;
            font-size: 1.2rem;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }
          
          .social-icon-footer::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: radial-gradient(circle, rgba(168, 85, 247, 0.3), transparent);
            border-radius: 50%;
            transition: all 0.4s ease;
            transform: translate(-50%, -50%);
          }
          
          .social-icon-footer:hover::before {
            width: 80px;
            height: 80px;
          }
          
          .social-icon-footer:hover {
            transform: translateY(-5px) scale(1.1);
            border-color: #a855f7;
            box-shadow: 0 10px 25px rgba(168, 85, 247, 0.4);
            color: #a855f7;
          }
          
          .scroll-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #a855f7, #8b5cf6);
            border: none;
            border-radius: 50%;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: 0 4px 15px rgba(168, 85, 247, 0.3);
          }
          
          .scroll-to-top:hover {
            transform: translateY(-3px) scale(1.1);
            box-shadow: 0 8px 25px rgba(168, 85, 247, 0.5);
          }
          
          .footer-divider {
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.3), transparent);
            border: none;
            margin: 2rem 0;
          }
          
          .footer-bottom {
            background: rgba(0, 0, 0, 0.3);
            border-radius: 15px;
            padding: 1.5rem;
            border: 1px solid rgba(168, 85, 247, 0.1);
          }
          
          .heart-icon {
            color: #ef4444;
            animation: heartbeat 1.5s ease-in-out infinite;
          }
          
          .coffee-icon {
            color: #8b4513;
            margin-left: 0.5rem;
          }
          
          @keyframes heartbeat {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          
          @media (max-width: 768px) {
            .scroll-to-top {
              bottom: 20px;
              right: 20px;
              width: 45px;
              height: 45px;
            }
            
            .footer-brand {
              font-size: 1.5rem;
            }
          }
        `}
      </style>

      <footer className="footer-container text-light">
        <div className="container py-5">
          <div className="row text-center text-md-start">
            {/* Left Column - Brand */}
            <div className="col-md-4 mb-4">
              <h3 className="footer-brand mb-3">
                Harshita Dundale
              </h3>
              <p className=" mb-4" style={{ lineHeight: "1.7" }}>
                Full Stack Developer passionate about creating amazing web experiences 
                with modern technologies and clean code.
              </p>
              <div className="d-flex align-items-center justify-content-center justify-content-md-start">
  <span className="me-2">Available for freelance</span>
  <div className="freelance-dot" />
</div>

            </div>

            {/* Middle Column - Quick Links */}
            <div className="col-md-4 mb-4">
              <h6 className="fw-bold mb-4" style={{ color: "#e5e7eb" }}>Quick Navigation</h6>
              <ul className="list-unstyled">
                {[
                  { id: 'about', label: 'About Me' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <li key={item.id} className="mb-2">
                    <a 
                      href={`#${item.id}`}
                      className="footer-link"
                      onClick={(e) => handleNavClick(e, item.id)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Connect */}
            <div className="col-md-4 mb-4">
              <h6 className="fw-bold mb-4" style={{ color: "#e5e7eb" }}>Let's Connect</h6>
              <div className="d-flex justify-content-center justify-content-md-start gap-3 mb-4">
                <a
                  href="https://github.com/harshita-dundale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-footer d-flex align-items-center justify-content-center"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/contact-harshita-dundale/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-footer d-flex align-items-center justify-content-center"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="mailto:harshuprajapati14@gmail.com"
                  className="social-icon-footer d-flex align-items-center justify-content-center"
                >
                  <FaEnvelope />
                </a>
              </div>
              <p className=" small">
                <strong>Email:</strong> harshuprajapati14@gmail.com<br />
                <strong>Location:</strong> Dewas, MP, India
              </p>
            </div>
          </div>

          {/* Footer Divider */}
          <hr className="footer-divider" />

          {/* Bottom Section */}
          <div className="footer-bottom text-center">
            <p className="mb-0">
              © 2025 Harshita Dundale. Made with{" "}
              <FaHeart className="heart-icon" /> and lots of{" "}
              <FaCoffee className="coffee-icon" />
            </p>
            <small className="">
              Designed & Developed with modern web technologies
            </small>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button 
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      </footer>
    </>
  );
};

export default Footer;