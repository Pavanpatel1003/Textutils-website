import React from "react";

const About = ({ mode }) => {
  const isDark = mode === "dark";
  const cardCls = `card border-0 rounded-4 h-100 shadow-sm ${isDark ? "bg-dark-card" : ""}`;

  const values = [
    { icon: "bi-lightning-charge-fill", color: "text-warning", bg: "#fffbeb", darkBg: "#451a03", title: "Fast",       desc: "Instant processing, zero delay."   },
    { icon: "bi-shield-lock-fill",      color: "text-success", bg: "#f0fdf4", darkBg: "#14532d", title: "Secure",     desc: "Text never leaves your browser."   },
    { icon: "bi-phone-fill",            color: "text-primary", bg: "#eff6ff", darkBg: "#1e3a5f", title: "Responsive", desc: "Works on all screen sizes."        },
    { icon: "bi-gift-fill",             color: "text-danger",  bg: "#fff1f2", darkBg: "#450a0a", title: "Free",       desc: "100% free to use, always."         },
  ];

  const team = [
    { icon: "bi-code-slash",   color: "text-primary", bg: "#eff6ff", darkBg: "#1e3a5f", name: "Pavan",       role: "Lead Developer"    },
    { icon: "bi-palette-fill", color: "text-info",    bg: "#f0f9ff", darkBg: "#0c2a3a", name: "Design Team", role: "UI/UX Designer"    },
    { icon: "bi-shield-check", color: "text-success", bg: "#f0fdf4", darkBg: "#14532d", name: "QA Team",     role: "Quality Assurance" },
  ];

  return (
    <div className={`inner-page ${isDark ? "dark-bg" : ""}`}>
      <div className="container-lg">

        {/* ── HERO ── */}
        <div className="text-center mb-5">
          <div className="tf-hero-icon mx-auto mb-3" style={{ background: "linear-gradient(135deg, #2563eb, #6d28d9)" }}>
            <i className="bi bi-info-circle-fill"></i>
          </div>
          <h2 className={`fw-bold mb-1 ${isDark ? "text-white" : "text-dark"}`}>About TextUtils</h2>
          <p className="text-muted mb-0">A modern browser-based text utility — simple, fast, and free.</p>
        </div>

        {/* ── OUR STORY ── */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-md-9 col-lg-7">
            <div className="card border-0 rounded-4 shadow-sm" style={{ background: isDark ? "#1e3a5f" : "#eff6ff" }}>
              <div className="card-body p-4 text-center">
                <i className="bi bi-book-fill text-primary mb-3" style={{ fontSize: 40 }}></i>
                <h4 className={`fw-bold mb-2 ${isDark ? "text-white" : "text-dark"}`}>Our Story</h4>
                <p className={`mb-0 ${isDark ? "text-white" : "text-muted"}`}>
                  Built to give users a clean, distraction-free tool for text processing.
                  No accounts, no ads, no data collection — just you and your text.
                  Every feature runs entirely in your browser.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── WHY TEXTUTILS ── */}
        <h5 className={`text-center fw-bold mb-4 ${isDark ? "text-white" : "text-dark"}`}>Why TextUtils?</h5>
        <div className="row g-4 justify-content-center mb-5">
          {values.map(({ icon, color, bg, darkBg, title, desc }) => (
            <div className="col-6 col-md-3" key={title}>
              <div className="card border-0 rounded-4 h-100 shadow-sm text-center"
                style={{ background: isDark ? darkBg : bg }}>
                <div className="card-body p-4">
                  <i className={`bi ${icon} ${color} mb-3`} style={{ fontSize: 40 }}></i>
                  <h5 className={`fw-bold mb-1 ${isDark ? "text-white" : "text-dark"}`}>{title}</h5>
                  <p className={`small mb-0 ${isDark ? "text-white" : "text-muted"}`}>{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── TEAM ── */}
        <h5 className={`text-center fw-bold mb-4 ${isDark ? "text-white" : "text-dark"}`}>Meet the Team</h5>
        <div className="row g-4 justify-content-center">
          {team.map(({ icon, color, bg, darkBg, name, role }) => (
            <div className="col-12 col-sm-6 col-md-4" key={name}>
              <div className="card border-0 rounded-4 h-100 shadow-sm text-center"
                style={{ background: isDark ? darkBg : bg }}>
                <div className="card-body p-4">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: 64, height: 64, background: isDark ? "rgba(255,255,255,0.1)" : "#fff" }}
                  >
                    <i className={`bi ${icon} ${color}`} style={{ fontSize: 28 }}></i>
                  </div>
                  <h5 className={`fw-bold mb-1 ${isDark ? "text-white" : "text-dark"}`}>{name}</h5>
                  <p className={`small mb-0 ${isDark ? "text-white" : "text-muted"}`}>{role}</p>
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
