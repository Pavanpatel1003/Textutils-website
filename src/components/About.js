import React from "react";

const About = ({ mode }) => {
  const isDark = mode === "dark";

  const values = [
    { icon: "bi-lightning-charge-fill", color: "text-warning", title: "Fast",       desc: "Instant processing, zero delay."     },
    { icon: "bi-shield-lock-fill",      color: "text-success", title: "Secure",     desc: "Text never leaves your browser."     },
    { icon: "bi-phone-fill",            color: "text-primary", title: "Responsive", desc: "Works on all screen sizes."          },
    { icon: "bi-gift-fill",             color: "text-danger",  title: "Free",       desc: "100% free to use, always."           },
  ];

  const team = [
    { icon: "bi-code-slash",   color: "text-primary", name: "Pavan",       role: "Lead Developer"    },
    { icon: "bi-palette-fill", color: "text-info",    name: "Design Team", role: "UI/UX Designer"    },
    { icon: "bi-shield-check", color: "text-success", name: "QA Team",     role: "Quality Assurance" },
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
            <i className="bi bi-info-circle-fill fs-3 text-primary"></i>
          </div>
          <h2 className={`fw-bold mb-1 ${isDark ? "text-white" : "text-dark"}`}>About TextUtils</h2>
          <p className="text-muted small mb-0">
            A modern browser-based text utility — simple, fast, and free.
          </p>
        </div>

        {/* Our Story */}
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-md-8">
            <div className={`card border-0 shadow-sm rounded-4 ${isDark ? "bg-secondary text-white" : ""}`}>
              <div className="card-body p-3 text-center">
                <i className="bi bi-book-fill fs-3 text-primary mb-2"></i>
                <h6 className="fw-bold mb-1">Our Story</h6>
                <p className="text-muted small mb-0">
                  Built to give users a clean, distraction-free tool for text processing.
                  No accounts, no ads, no data collection — just you and your text.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <h6 className={`text-center fw-bold mb-3 ${isDark ? "text-white" : "text-dark"}`}>Why TextUtils?</h6>
        <div className="row g-3 justify-content-center mb-4">
          {values.map(({ icon, color, title, desc }) => (
            <div className="col-6 col-md-3" key={title}>
              <div className={`card border-0 shadow-sm rounded-4 h-100 text-center ${isDark ? "bg-secondary text-white" : ""}`}>
                <div className="card-body p-3">
                  <i className={`bi ${icon} fs-3 ${color} mb-2`}></i>
                  <h6 className="fw-bold mb-1">{title}</h6>
                  <p className="text-muted small mb-0">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team */}
        <h6 className={`text-center fw-bold mb-3 ${isDark ? "text-white" : "text-dark"}`}>Meet the Team</h6>
        <div className="row g-3 justify-content-center">
          {team.map(({ icon, color, name, role }) => (
            <div className="col-12 col-sm-4" key={name}>
              <div className={`card border-0 shadow-sm rounded-4 text-center ${isDark ? "bg-secondary text-white" : ""}`}>
                <div className="card-body p-3">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-2"
                    style={{ width: 50, height: 50, background: isDark ? "rgba(255,255,255,0.08)" : "#f3f4f6" }}
                  >
                    <i className={`bi ${icon} ${color} fs-4`}></i>
                  </div>
                  <h6 className="fw-bold mb-0">{name}</h6>
                  <p className="text-muted small mb-0">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default About;
