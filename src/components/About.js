import React from "react";

const About = () => {
  const team = [
    { name: "Pavan", role: "Lead Developer", icon: "bi-code-slash", color: "text-primary" },
    { name: "Design Team", role: "UI/UX Designer", icon: "bi-palette-fill", color: "text-purple" },
    { name: "QA Team", role: "Quality Assurance", icon: "bi-shield-check", color: "text-success" },
  ];

  const values = [
    { icon: "bi-lightning-charge-fill", color: "text-warning", title: "Fast", desc: "Instant text processing with zero delay." },
    { icon: "bi-shield-lock-fill",      color: "text-success", title: "Secure", desc: "Your text never leaves your browser." },
    { icon: "bi-phone-fill",            color: "text-primary", title: "Responsive", desc: "Works perfectly on all screen sizes." },
    { icon: "bi-gift-fill",             color: "text-danger",  title: "Free", desc: "100% free to use, always." },
  ];

  return (
    <div className="page-wrapper">

      {/* Hero */}
      <div className="page-hero text-center mb-5">
        <div className="hero-icon-wrap mx-auto mb-3">
          <i className="bi bi-info-circle-fill hero-icon text-primary"></i>
        </div>
        <h1 className="page-title">About TextUtils</h1>
        <p className="page-subtitle mx-auto">
          A modern, browser-based text utility app designed to make text
          processing simple, fast, and accessible to everyone.
        </p>
      </div>

      {/* Our Story */}
      <div className="row justify-content-center mb-5">
        <div className="col-12 col-md-8 col-lg-7">
          <div className="content-card text-center">
            <i className="bi bi-book-fill display-5 text-primary mb-3"></i>
            <h3 className="fw-bold mb-3">Our Story</h3>
            <p className="text-muted lh-lg">
              TextUtils was built with a simple goal — give users a clean,
              distraction-free tool to analyze and transform text without
              installing anything. No accounts, no ads, no data collection.
              Just you and your text.
            </p>
            <p className="text-muted lh-lg mb-0">
              We believe productivity tools should be instant and effortless.
              That's why every feature in TextUtils runs entirely in your browser.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <h3 className="text-center fw-bold mb-4">Why TextUtils?</h3>
      <div className="row g-4 justify-content-center mb-5">
        {values.map(({ icon, color, title, desc }) => (
          <div className="col-6 col-md-3" key={title}>
            <div className="feature-mini-card text-center h-100">
              <i className={`bi ${icon} display-5 ${color} mb-3`}></i>
              <h5 className="fw-bold">{title}</h5>
              <p className="text-muted small mb-0">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Team */}
      <h3 className="text-center fw-bold mb-4">Meet the Team</h3>
      <div className="row g-4 justify-content-center">
        {team.map(({ name, role, icon, color }) => (
          <div className="col-12 col-sm-6 col-md-4" key={name}>
            <div className="team-card text-center h-100">
              <div className="team-avatar mx-auto mb-3">
                <i className={`bi ${icon} ${color}`}></i>
              </div>
              <h5 className="fw-bold mb-1">{name}</h5>
              <p className="text-muted small mb-0">{role}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default About;
