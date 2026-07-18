import React, { useState } from "react";

const Contact = ({ mode }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const isDark = mode === "dark";

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  }

  const contactInfo = [
    {
      icon: "bi-envelope-fill",
      color: "text-primary",
      bg: "#eff6ff",
      label: "Email Us",
      value: "support@textutils.com",
    },
    {
      icon: "bi-geo-alt-fill",
      color: "text-danger",
      bg: "#fff1f2",
      label: "Location",
      value: "India",
    },
    {
      icon: "bi-clock-fill",
      color: "text-warning",
      bg: "#fffbeb",
      label: "Support Hours",
      value: "Mon – Sat, 9am – 6pm",
    },
    {
      icon: "bi-chat-dots-fill",
      color: "text-success",
      bg: "#f0fdf4",
      label: "Response Time",
      value: "Within 24 hours",
    },
  ];

  const socials = [
    { icon: "bi-linkedin",  bg: "#0077b6", label: "LinkedIn" },
    { icon: "bi-github",    bg: "#24292e", label: "GitHub"   },
    { icon: "bi-twitter-x", bg: "#000000", label: "Twitter"  },
    { icon: "bi-instagram", bg: "#e1306c", label: "Instagram"},
  ];

  return (
    <div className={`contact-page ${isDark ? "dark-bg" : ""}`}>

      {/* ── HERO BANNER ── */}
      <div className="contact-hero text-center">
        <div className="contact-hero-icon mx-auto mb-3">
          <i className="bi bi-envelope-paper-fill"></i>
        </div>
        <h1 className="fw-bold text-white mb-2">Contact Us</h1>
        <p className="text-white-50 mb-0" style={{ fontSize: "16px" }}>
          Have a question or suggestion? We'd love to hear from you.
        </p>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="contact-body">
        <div className="row g-4 justify-content-center">

          {/* LEFT — Info */}
          <div className="col-12 col-lg-4">

            {/* Info Cards */}
            <div className="contact-info-card mb-4">
              <h5 className={`fw-bold mb-4 ${isDark ? "text-white" : "text-dark"}`}>
                Get in Touch
              </h5>

              {contactInfo.map(({ icon, color, bg, label, value }) => (
                <div className="contact-info-row" key={label}>
                  <div
                    className="contact-info-icon"
                    style={{ background: isDark ? "rgba(255,255,255,0.07)" : bg }}
                  >
                    <i className={`bi ${icon} ${color}`}></i>
                  </div>
                  <div>
                    <p className={`fw-semibold mb-0 small ${isDark ? "text-white" : "text-dark"}`}>
                      {label}
                    </p>
                    <p className="text-muted small mb-0">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="contact-info-card">
              <h6 className={`fw-bold mb-3 ${isDark ? "text-white" : "text-dark"}`}>
                Follow Us
              </h6>
              <div className="d-flex flex-wrap gap-2">
                {socials.map(({ icon, bg, label }) => (
                  <button
                    key={label}
                    className="contact-social-btn"
                    style={{ "--social-bg": bg }}
                    title={label}
                  >
                    <i className={`bi ${icon}`}></i>
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT — Form */}
          <div className="col-12 col-lg-7">
            <div className="contact-form-card">
              <h5 className={`fw-bold mb-4 ${isDark ? "text-white" : "text-dark"}`}>
                <i className="bi bi-send-fill text-primary me-2"></i>
                Send a Message
              </h5>

              {submitted && (
                <div className="contact-success-alert">
                  <i className="bi bi-check-circle-fill text-success me-2 fs-5"></i>
                  <div>
                    <p className="fw-semibold mb-0 text-success">Message Sent!</p>
                    <p className="small text-muted mb-0">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row g-3 mb-3">
                  <div className="col-12 col-sm-6">
                    <label className={`form-label fw-semibold small ${isDark ? "text-white" : ""}`}>
                      Your Name <span className="text-danger">*</span>
                    </label>
                    <div className="contact-input-wrap">
                      <i className="bi bi-person-fill contact-input-icon"></i>
                      <input
                        type="text"
                        name="name"
                        className={`form-control contact-input-field ${isDark ? "dark-input" : ""}`}
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12 col-sm-6">
                    <label className={`form-label fw-semibold small ${isDark ? "text-white" : ""}`}>
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <div className="contact-input-wrap">
                      <i className="bi bi-envelope-fill contact-input-icon"></i>
                      <input
                        type="email"
                        name="email"
                        className={`form-control contact-input-field ${isDark ? "dark-input" : ""}`}
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label className={`form-label fw-semibold small ${isDark ? "text-white" : ""}`}>
                    Message <span className="text-danger">*</span>
                  </label>
                  <div className="contact-input-wrap">
                    <i className="bi bi-chat-left-text-fill contact-input-icon" style={{ top: "16px" }}></i>
                    <textarea
                      name="message"
                      className={`form-control contact-input-field ${isDark ? "dark-input" : ""}`}
                      rows="6"
                      placeholder="Write your message here..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      style={{ paddingTop: "14px" }}
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="btn contact-submit-btn w-100">
                  <i className="bi bi-send-fill me-2"></i>
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
