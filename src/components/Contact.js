import React, { useState } from "react";

const Contact = ({ mode }) => {
  const [form, setForm]           = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const isDark = mode === "dark";

  const inputCls = `form-control rounded-3 ${isDark ? "bg-dark text-white border-secondary" : ""}`;

  function handleChange(e) { setForm({ ...form, [e.target.name]: e.target.value }); }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  }

  const contactInfo = [
    { icon: "bi-envelope-fill",  color: "text-primary", bg: "#eff6ff", darkBg: "#1e3a5f", label: "Email",         value: "support@textutils.com" },
    { icon: "bi-geo-alt-fill",   color: "text-danger",  bg: "#fff1f2", darkBg: "#450a0a", label: "Location",      value: "India"                 },
    { icon: "bi-clock-fill",     color: "text-warning", bg: "#fffbeb", darkBg: "#451a03", label: "Support Hours", value: "Mon – Sat, 9am – 6pm"  },
    { icon: "bi-chat-dots-fill", color: "text-success", bg: "#f0fdf4", darkBg: "#14532d", label: "Response Time", value: "Within 24 hours"       },
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

        {/* ── HERO ── */}
        <div className="text-center mb-5">
          <div className="tf-hero-icon mx-auto mb-3" style={{ background: "linear-gradient(135deg, #2563eb, #6d28d9)" }}>
            <i className="bi bi-envelope-fill"></i>
          </div>
          <h2 className={`fw-bold mb-1 ${isDark ? "text-white" : "text-dark"}`}>Contact Us</h2>
          <p className="text-muted mb-0">Have a question or suggestion? We'd love to hear from you.</p>
        </div>

        <div className="row g-4 justify-content-center">

          {/* ── LEFT — Info ── */}
          <div className="col-12 col-lg-4">

            {/* Contact info cards */}
            <div className="row g-3 mb-4">
              {contactInfo.map(({ icon, color, bg, darkBg, label, value }) => (
                <div className="col-12" key={label}>
                  <div
                    className="card border-0 rounded-4 shadow-sm"
                    style={{ background: isDark ? darkBg : bg }}
                  >
                    <div className="card-body p-3 d-flex align-items-center gap-3">
                      <div
                        className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{ width: 48, height: 48, background: isDark ? "rgba(255,255,255,0.1)" : "#fff" }}
                      >
                        <i className={`bi ${icon} ${color} fs-5`}></i>
                      </div>
                      <div>
                        <p className={`fw-semibold mb-0 ${isDark ? "text-white" : "text-dark"}`}>{label}</p>
                        <p className={`small mb-0 ${isDark ? "text-white" : "text-muted"}`}>{value}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="card border-0 rounded-4 shadow-sm" style={{ background: isDark ? "#1e3a5f" : "#eff6ff" }}>
              <div className="card-body p-3">
                <h6 className={`fw-bold mb-3 ${isDark ? "text-white" : "text-dark"}`}>Follow Us</h6>
                <div className="d-flex flex-wrap gap-2">
                  {socials.map(({ icon, color, label }) => (
                    <button
                      key={label}
                      className={`btn btn-sm rounded-3 fw-semibold ${isDark ? "btn-outline-light" : "btn-outline-secondary"}`}
                    >
                      <i className={`bi ${icon} ${color} me-1`}></i>{label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT — Form ── */}
          <div className="col-12 col-lg-7">
            <div className="card border-0 rounded-4 shadow-sm"
              style={{ background: isDark ? "#1a1a2e" : "#fff" }}>
              <div className="card-body p-4">
                <h5 className={`fw-bold mb-4 ${isDark ? "text-white" : "text-dark"}`}>
                  <i className="bi bi-send-fill text-primary me-2"></i>Send a Message
                </h5>

                {submitted && (
                  <div className="alert alert-success d-flex align-items-center gap-2 rounded-3" role="alert">
                    <i className="bi bi-check-circle-fill fs-5"></i>
                    <span><strong>Message sent!</strong> We'll get back to you soon.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3 mb-3">
                    <div className="col-12 col-sm-6">
                      <label className={`form-label fw-semibold small ${isDark ? "text-white" : ""}`}>Your Name</label>
                      <input type="text" name="name" className={inputCls}
                        placeholder="John Doe" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="col-12 col-sm-6">
                      <label className={`form-label fw-semibold small ${isDark ? "text-white" : ""}`}>Email Address</label>
                      <input type="email" name="email" className={inputCls}
                        placeholder="john@example.com" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className={`form-label fw-semibold small ${isDark ? "text-white" : ""}`}>Message</label>
                    <textarea name="message" className={inputCls} rows="6"
                      placeholder="Write your message here..." value={form.message} onChange={handleChange} required />
                  </div>

                  <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold rounded-3" style={{ fontSize: 15 }}>
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
