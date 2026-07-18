import React from "react";

const Feature = ({ mode }) => {
  const isDark = mode === "dark";

  const features = [
    { icon: "bi-arrow-up-circle-fill",   color: "text-primary",   title: "Uppercase",     desc: "Convert text to UPPERCASE."              },
    { icon: "bi-arrow-down-circle-fill", color: "text-secondary", title: "Lowercase",     desc: "Convert text to lowercase."              },
    { icon: "bi-fonts",                  color: "text-dark",      title: "Title Case",    desc: "Capitalize every word."                  },
    { icon: "bi-arrow-repeat",           color: "text-info",      title: "Reverse",       desc: "Flip text character by character."       },
    { icon: "bi-text-paragraph",         color: "text-warning",   title: "Remove Spaces", desc: "Clean up extra spaces."                  },
    { icon: "bi-sort-alpha-down",        color: "text-success",   title: "Sort A–Z",      desc: "Sort words alphabetically."              },
    { icon: "bi-clipboard-check-fill",   color: "text-success",   title: "Copy",          desc: "Copy text to clipboard."                 },
    { icon: "bi-download",               color: "text-primary",   title: "Download",      desc: "Save as .txt file."                      },
    { icon: "bi-eye-fill",               color: "text-danger",    title: "Preview",       desc: "Live preview as you type."               },
    { icon: "bi-file-text-fill",         color: "text-primary",   title: "Word Count",    desc: "Count words instantly."                  },
    { icon: "bi-clock-fill",             color: "text-warning",   title: "Read Time",     desc: "Estimated reading time."                 },
    { icon: "bi-moon-stars-fill",        color: "text-dark",      title: "Dark Mode",     desc: "Comfortable night-time use."             },
  ];

  return (
    <div className={`inner-page ${isDark ? "dark-bg" : ""}`}>
      <div className="container-lg">

        {/* Hero */}
        <div className="text-center mb-4">
          <div
            className="rounded-circle d-inline-flex align-items-center justify-content-center mb-2"
            style={{ width: 60, height: 60, background: isDark ? "rgba(255,255,255,0.08)" : "#fffbeb" }}
          >
            <i className="bi bi-stars fs-3 text-warning"></i>
          </div>
          <h2 className={`fw-bold mb-1 ${isDark ? "text-white" : "text-dark"}`}>Features</h2>
          <p className="text-muted small mb-0">
            Everything you need to work with text — free and instant.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="row g-3 justify-content-center">
          {features.map(({ icon, color, title, desc }) => (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={title}>
              <div className={`card border-0 shadow-sm rounded-4 h-100 text-center ${isDark ? "bg-secondary text-white" : ""}`}>
                <div className="card-body p-3">
                  <div
                    className="rounded-3 d-inline-flex align-items-center justify-content-center mb-2"
                    style={{ width: 44, height: 44, background: isDark ? "rgba(255,255,255,0.08)" : "#f3f4f6" }}
                  >
                    <i className={`bi ${icon} ${color} fs-5`}></i>
                  </div>
                  <h6 className="fw-bold mb-1 small">{title}</h6>
                  <p className="text-muted mb-0" style={{ fontSize: "11px" }}>{desc}</p>
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
