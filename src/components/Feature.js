import React from "react";

const Feature = ({ mode }) => {
  const isDark = mode === "dark";

  const features = [
    { icon: "bi-arrow-up-circle-fill",    color: "text-primary",   bg: "#eff6ff", darkBg: "#1e3a5f", title: "Uppercase",     desc: "Convert text to UPPERCASE in one click."     },
    { icon: "bi-arrow-down-circle-fill",  color: "text-secondary", bg: "#f8fafc", darkBg: "#1e293b", title: "Lowercase",     desc: "Convert text to lowercase instantly."        },
    { icon: "bi-fonts",                   color: "text-dark",      bg: "#f3f4f6", darkBg: "#1f2937", title: "Title Case",    desc: "Capitalize the first letter of every word."  },
    { icon: "bi-arrow-repeat",            color: "text-info",      bg: "#f0f9ff", darkBg: "#0c2a3a", title: "Reverse",       desc: "Flip your text character by character."      },
    { icon: "bi-text-paragraph",          color: "text-warning",   bg: "#fffbeb", darkBg: "#451a03", title: "Remove Spaces", desc: "Clean up all extra spaces from text."        },
    { icon: "bi-sort-alpha-down",         color: "text-success",   bg: "#f0fdf4", darkBg: "#14532d", title: "Sort A–Z",      desc: "Sort all words in alphabetical order."       },
    { icon: "bi-clipboard-check-fill",    color: "text-success",   bg: "#f0fdf4", darkBg: "#14532d", title: "Copy",          desc: "Copy transformed text to clipboard."         },
    { icon: "bi-download",                color: "text-primary",   bg: "#eff6ff", darkBg: "#1e3a5f", title: "Download",      desc: "Save your text as a .txt file."              },
    { icon: "bi-eye-fill",                color: "text-danger",    bg: "#fff1f2", darkBg: "#450a0a", title: "Live Preview",  desc: "See a real-time preview as you type."        },
    { icon: "bi-file-text-fill",          color: "text-primary",   bg: "#eff6ff", darkBg: "#1e3a5f", title: "Word Count",    desc: "Instantly count words in your text."         },
    { icon: "bi-clock-fill",              color: "text-warning",   bg: "#fffbeb", darkBg: "#451a03", title: "Read Time",     desc: "Estimate how long it takes to read."         },
    { icon: "bi-moon-stars-fill",         color: "text-dark",      bg: "#f3f4f6", darkBg: "#1f2937", title: "Dark Mode",     desc: "Switch to dark mode for night use."          },
  ];

  return (
    <div className={`inner-page ${isDark ? "dark-bg" : ""}`}>
      <div className="container-lg">

        {/* ── HERO ── */}
        <div className="text-center mb-5">
          <div className="tf-hero-icon mx-auto mb-3" style={{ background: "linear-gradient(135deg, #d97706, #b45309)" }}>
            <i className="bi bi-stars"></i>
          </div>
          <h2 className={`fw-bold mb-1 ${isDark ? "text-white" : "text-dark"}`}>Features</h2>
          <p className="text-muted mb-0">Everything you need to work with text — free and instant.</p>
        </div>

        {/* ── FEATURE CARDS — 4 per row desktop, 2 mobile ── */}
        <div className="row g-4 justify-content-center">
          {features.map(({ icon, color, bg, darkBg, title, desc }) => (
            <div className="col-6 col-md-4 col-lg-3" key={title}>
              <div
                className="card border-0 rounded-4 h-100 shadow-sm text-center"
                style={{ background: isDark ? darkBg : bg }}
              >
                <div className="card-body p-4">
                  <i className={`bi ${icon} ${color} mb-3 d-block`} style={{ fontSize: 38 }}></i>
                  <h6 className={`fw-bold mb-2 ${isDark ? "text-white" : "text-dark"}`}>{title}</h6>
                  <p className={`small mb-0 ${isDark ? "text-white" : "text-muted"}`}>{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Feature;
