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
    { icon: "bi-envelope-fill",  color: "text-primary", label: "Email",         value: "support@textutils.com" },
    { icon: "bi-geo-alt-fill",   color: "text-danger",  label: "Location",      value: "India"                 },
    { icon: "bi-clock-fill",     color: "text-warning", label: "Support Hours", value: "Mon – Sat, 9am – 6pm"  },
    { icon: "bi-chat-dots-fill", color: "text-success", label: "Response Time", value: "Within 24 hours"       },
  ];

  const socials = [
    { icon: "bi-linkedin",  color: "text-primary", label: "LinkedIn"  },
    { icon: "bi-github",    color: "text-dark",    label: "GitHub"    },
    { icon: "bi-twitter-x", color: "text-dark",    label: "Twitter"   },
    { icon: "bi-instagram", color: "text-danger",  label: "Instagram" },
  ];

  return (
    <div className={`inner-page ${isDark ? "dark-bg" : ""}`}>
      <div className="container-lg">

        {/* Hero */}
        <div className="text-center mb-4">
          <div
            className="rounded-circle d-inline-flex align-items-center justify-content-center mb-2"
            style={{ width: 60, height: 60, background: isDark ? "rgba(255,255,255,0.08)" : "#eff6ff" }}
          >
            <i className="bi bi-envelope-fill fs-3 text-primary"></i>
          </div>
          <h2 className={`fw-bold mb-1 ${isDark ? "text-white" : "text-dark"}`}>Contact Us</h2>
          <p className="text-muted small mb-0">
            Have a question or suggestion? We'd love to hear from you.
          </p>
        </div>

        <div className="row g-4 justify-content-center">

          {/* LEFT — Info */}
          <div className="col-12 col-md-5 col-lg-4">
            <div className={`card border-0 shadow-sm rounded-4 h-100 ${isDark ? "bg-secondary text-white" : ""}`}>
              <div className="card-body p-3">
                <h6 className="fw-bold mb-3">Get in Touch</h6>

                {contactInfo.map(({ icon, color, label, value }) => (
                  <div className="d-flex align-items-center gap-3 mb-3" key={label}>
                    <div
                      className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{ width: 40, height: 40, background: isDark ? "rgba(255,255,255,0.08)" : "#f3f4f6" }}
                    >
                      <i className={`bi ${icon} ${color}`}></i>
                    </div>
                    <div>
                      <p className="fw-semibold small mb-0">{label}</p>
                      <p className="text-muted small mb-0">{value}</p>
                    </div>
                  </div>
                ))}

                <hr className="my-2" />
                <h6 className="fw-bold mb-2">Follow Us</h6>
                <div className="d-flex gap-2 flex-wrap">
                  {socials.map(({ icon, color, label }) => (
                    <button
                      key={label}
                      className={`btn btn-outline-secondary btn-sm rounded-3 ${isDark ? "text-white border-secondary" : ""}`}
                      title={label}
                    >
                      <i className={`bi ${icon} ${color} me-1`}></i>{label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="col-12 col-md-7 col-lg-6">
            <div className={`card border-0 shadow-sm rounded-4 ${isDark ? "bg-secondary text-white" : ""}`}>
              <div className="card-body p-3">
                <h6 className="fw-bold mb-3">Send a Message</h6>

                {submitted && (
                  <div className="alert alert-success d-flex align-items-center gap-2 rounded-3 py-2" role="alert">
                    <i className="bi bi-check-circle-fill"></i>
                    <small>Message sent! We'll get back to you soon.</small>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-2 mb-2">
                    <div className="col-12 col-sm-6">
                      <label className="form-label fw-semibold small mb-1">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        className={`form-control form-control-sm rounded-3 ${isDark ? "bg-dark text-white border-secondary" : ""}`}
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <label className="form-label fw-semibold small mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        className={`form-control form-control-sm rounded-3 ${isDark ? "bg-dark text-white border-secondary" : ""}`}
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold small mb-1">Message</label>
                    <textarea
                      name="message"
                      className={`form-control form-control-sm rounded-3 ${isDark ? "bg-dark text-white border-secondary" : ""}`}
                      rows="5"
                      placeholder="Write your message here..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-100 fw-semibold rounded-3">
                    <i className="bi bi-send-fill me-2"></i>Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
