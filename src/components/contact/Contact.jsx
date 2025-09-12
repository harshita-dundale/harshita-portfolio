import React, { useState, useRef } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./contact.css"; // Import external CSS

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_aafay1i", // Service ID
        "template_0cnu9xp", // Template ID
        form.current,
        "JFpNA4aP6cJqlEQ6H" // Public Key
      )
      .then((result) => {
        console.log("SUCCESS:", result.text);
        setMessage("Message sent successfully!");
        form.current.reset();
        setIsLoading(false);
        setTimeout(() => setMessage(""), 5000);
      })
      .catch((error) => {
        console.log("ERROR:", error);
        setMessage("Failed to send message. Please try again.");
        setIsLoading(false);
        setTimeout(() => setMessage(""), 5000);
      });
  };

  return (
    <section id="contact" className="min-vh-100 d-flex align-items-center contact-section">
      <div className="container py-5">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold mb-3 contact-title">Get In Touch</h1>
          <p className="fs-5 mb-0 text-white">Let's discuss your next project</p>
          <div className="contact-divider mx-auto mt-3" />
        </div>

        <div className="row g-5 align-items-start">
          {/* Left Info Section */}
          <div className="col-md-5">
            <h3 className="fw-bold mb-3 text-white">Let's Work Together</h3>
            <p className="mb-5 text-white contact-description">
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, I'll try my
              best to get back to you!
            </p>

            <div className="contact-info-item d-flex align-items-center mb-4">
              <div className="contact-icon me-4 d-flex justify-content-center align-items-center">
                <FaEnvelope />
              </div>
              <div className="text-white">
                <h6 className="fw-bold mb-1">Email</h6>
                <p className="mb-0">harshuprajapati14@gmail.com</p>
              </div>
            </div>

            <div className="contact-info-item d-flex align-items-center mb-4">
              <div className="contact-icon me-4 d-flex justify-content-center align-items-center">
                <FaPhoneAlt />
              </div>
              <div className="text-white">
                <h6 className="fw-bold mb-1">Phone</h6>
                <p className="mb-0">+91 9325411885</p>
              </div>
            </div>

            <div className="contact-info-item d-flex align-items-center">
              <div className="contact-icon me-4 d-flex justify-content-center align-items-center">
                <FaMapMarkerAlt />
              </div>
              <div className="text-white">
                <h6 className="fw-bold mb-1">Location</h6>
                <p className="mb-0">Dewas, MP, India</p>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="col-md-7">
            <div className="contact-card p-5 rounded-4">
              {/* Success/Error Message */}
              {message && (
                <div
                  className={`message-alert ${
                    message.includes("successfully") ? "message-success" : "message-error"
                  }`}
                >
                  {message}
                </div>
              )}

              <form ref={form} onSubmit={sendEmail}>
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Your Name"
                      className="form-control form-control-custom py-3 px-4"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="from_email"
                      placeholder="your@email.com"
                      className="form-control form-control-custom py-3 px-4"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="form-control form-control-custom py-3 px-4"
                    required
                  />
                </div>

                <div className="mb-4">
                  <textarea
                    rows="6"
                    name="message"
                    placeholder="Tell me about your project..."
                    className="form-control form-control-custom py-3 px-4"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn btn-send w-100 d-flex align-items-center justify-content-center gap-2 fw-bold py-3"
                >
                  <FaPaperPlane />
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
