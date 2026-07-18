import React, { useState } from "react";

const TextForm = ({ mode }) => {
  const [text, setText] = useState("");

  const wordCount = text.split(/\s+/).filter((w) => w.length !== 0).length;
  const isDark = mode === "dark";

  function handleUpperClick()       { setText(text.toUpperCase()); }
  function handleLowerClick()       { setText(text.toLowerCase()); }
  function handleClearClick()       { setText(""); }
  function handleReverseClick()     { setText(text.split("").reverse().join("")); }
  function handleRemoveSpaceClick() { setText(text.split(/[ ]+/).join(" ")); }

  function handleCopyClick() {
    navigator.clipboard.writeText(text);
    alert("Text copied!");
  }

  function handleTitleCaseClick() {
    setText(
      text.toLowerCase().split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    );
  }

  function handleDownloadClick() {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
    a.download = "TextUtils.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  function handleSortAscClick() {
    setText(text.split(/\s+/).sort().join(" "));
  }

  function handleEventChange(e) { setText(e.target.value); }

  const stats = [
    { icon: "bi-file-text-fill",      color: "text-primary",  value: wordCount,                             label: "Words"            },
    { icon: "bi-type",                 color: "text-success",  value: text.length,                           label: "Characters"       },
    { icon: "bi-clock-fill",           color: "text-warning",  value: (0.008 * wordCount).toFixed(2),        label: "Read Time (min)"  },
    { icon: "bi-chat-left-text-fill",  color: "text-danger",   value: text.split(".").filter(s => s.trim()).length, label: "Sentences" },
  ];

  const buttons = [
    { label: "Uppercase",      icon: "bi-arrow-up-circle-fill",   cls: "btn-primary",       fn: handleUpperClick,       needsText: true  },
    { label: "Lowercase",      icon: "bi-arrow-down-circle-fill", cls: "btn-secondary",     fn: handleLowerClick,       needsText: true  },
    { label: "Copy",           icon: "bi-clipboard-check-fill",   cls: "btn-success",       fn: handleCopyClick,        needsText: true  },
    { label: "Clear",          icon: "bi-trash-fill",             cls: "btn-danger",        fn: handleClearClick,       needsText: true  },
    { label: "Remove Spaces",  icon: "bi-text-paragraph",         cls: "btn-warning",       fn: handleRemoveSpaceClick, needsText: true  },
    { label: "Reverse",        icon: "bi-arrow-repeat",           cls: "btn-info text-white", fn: handleReverseClick,   needsText: true  },
    { label: "Title Case",     icon: "bi-fonts",                  cls: "btn-dark",          fn: handleTitleCaseClick,   needsText: true  },
    { label: "Download",       icon: "bi-download",               cls: "btn-outline-primary", fn: handleDownloadClick,  needsText: true  },
    { label: "Sort A-Z",       icon: "bi-sort-alpha-down",        cls: "btn-outline-success", fn: handleSortAscClick,   needsText: true  },
  ];

  return (
    <div className={`main-wrapper ${isDark ? "dark-bg" : ""}`}>
      <div className="row g-4">

        {/* ── LEFT PANEL ── */}
        <div className="col-12 col-lg-7">

          {/* Heading */}
          <div className="mb-3">
            <h2 className={`fw-bold mb-1 ${isDark ? "text-white" : "text-dark"}`}>
              <i className="bi bi-file-earmark-text-fill text-primary me-2"></i>
              TextUtils
            </h2>
            <p className="text-muted mb-0">Analyze and transform your text instantly.</p>
          </div>

          {/* Textarea */}
          <textarea
            className={`form-control textarea-box mb-3 ${isDark ? "dark-textarea" : ""}`}
            value={text}
            placeholder="Enter your text here..."
            onChange={handleEventChange}
          />

          {/* Action Buttons */}
          <div className="d-flex flex-wrap gap-2">
            {buttons.map(({ label, icon, cls, fn, needsText }) => (
              <button
                key={label}
                className={`btn ${cls}`}
                onClick={fn}
                disabled={needsText && text.length === 0}
              >
                <i className={`bi ${icon} me-1`}></i>{label}
              </button>
            ))}
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="col-12 col-lg-5">

          {/* Stat Cards */}
          <div className="row g-3 mb-3">
            {stats.map(({ icon, color, value, label }) => (
              <div className="col-6" key={label}>
                <div className={`card stat-card h-100 ${isDark ? "dark-card" : ""}`}>
                  <div className="card-body text-center py-3">
                    <i className={`bi ${icon} display-6 ${color}`}></i>
                    <h3 className={`mt-2 fw-bold ${isDark ? "text-white" : ""}`}>{value}</h3>
                    <p className="mb-0 text-muted small">{label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Preview Card */}
          <div className={`card ${isDark ? "dark-card" : ""}`}>
            <div className="card-body preview-body">
              <h5 className={`fw-bold mb-2 ${isDark ? "text-white" : ""}`}>
                <i className="bi bi-eye-fill me-2 text-primary"></i>Preview
              </h5>
              <hr className="mt-0 mb-2" />
              <p className={`mb-0 preview-text ${isDark ? "text-white" : "text-dark"}`}>
                {text.length > 0 ? text : "Nothing to preview. Start typing above."}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TextForm;
