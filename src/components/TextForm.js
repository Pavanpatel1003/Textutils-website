import React, { useState } from "react";

const TextForm = ({ mode }) => {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  const isDark = mode === "dark";

  const wordCount = text.split(/\s+/).filter((w) => w.length !== 0).length;

  function handleUpperClick()       { setText(text.toUpperCase()); }
  function handleLowerClick()       { setText(text.toLowerCase()); }
  function handleClearClick()       { setText(""); }
  function handleReverseClick()     { setText(text.split("").reverse().join("")); }
  function handleRemoveSpaceClick() { setText(text.split(/[ ]+/).join(" ")); }
  function handleCopyClick()        { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); }
  function handleTitleCaseClick()   { setText(text.toLowerCase().split(" ").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")); }
  function handleSortAscClick()     { setText(text.split(/\s+/).sort().join(" ")); }
  function handleEventChange(e)     { setText(e.target.value); }

  function handleDownloadClick() {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
    a.download = "TextUtils.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  const stats = [
    { icon: "bi-file-word-fill",    color: "text-primary", bg: "#eff6ff",  darkBg: "#1e3a5f", value: wordCount,                                       label: "Words"       },
    { icon: "bi-fonts",             color: "text-success", bg: "#f0fdf4",  darkBg: "#14532d", value: text.length,                                     label: "Characters"  },
    { icon: "bi-clock-fill",        color: "text-warning", bg: "#fffbeb",  darkBg: "#451a03", value: (0.008 * wordCount).toFixed(2),                  label: "Min to Read" },
    { icon: "bi-chat-left-dots-fill",color:"text-danger",  bg: "#fff1f2",  darkBg: "#450a0a", value: text.split(".").filter(s => s.trim()).length,     label: "Sentences"   },
  ];

  const buttons = [
    { label: "Uppercase",     icon: "bi-arrow-up-circle-fill",   cls: "btn-primary",         fn: handleUpperClick       },
    { label: "Lowercase",     icon: "bi-arrow-down-circle-fill", cls: "btn-secondary",       fn: handleLowerClick       },
    { label: "Title Case",    icon: "bi-fonts",                  cls: "btn-dark",            fn: handleTitleCaseClick   },
    { label: "Reverse",       icon: "bi-arrow-repeat",           cls: "btn-info text-white", fn: handleReverseClick     },
    { label: "Remove Spaces", icon: "bi-text-paragraph",         cls: "btn-warning",         fn: handleRemoveSpaceClick },
    { label: "Sort A-Z",      icon: "bi-sort-alpha-down",        cls: "btn-outline-primary", fn: handleSortAscClick     },
    { label: "Download",      icon: "bi-download",               cls: "btn-outline-success", fn: handleDownloadClick    },
    { label: "Clear",         icon: "bi-trash3",                 cls: "btn-outline-danger",  fn: handleClearClick       },
  ];

  const cardBg   = (bg, darkBg) => isDark ? darkBg : bg;

  return (
    <div className={`main-wrapper ${isDark ? "dark-bg" : ""}`}>

      {/* ── HERO ── */}
      <div className="text-center mb-4">
        <div className="tf-hero-icon mx-auto mb-3">
          <i className="bi bi-file-earmark-text-fill"></i>
        </div>
        <h2 className={`fw-bold mb-1 ${isDark ? "text-white" : "text-dark"}`}>TextUtils</h2>
        <p className="text-muted mb-0" style={{ fontSize: 14 }}>
          Paste your text and transform it instantly — free, fast, private.
        </p>
      </div>

      {/* ── MAIN ROW ── */}
      <div className="row g-4">

        {/* LEFT — Textarea + Buttons */}
        <div className="col-12 col-lg-7">

          <div className="tf-textarea-wrap mb-3">
            <textarea
              className={`form-control textarea-box ${isDark ? "dark-textarea" : ""}`}
              value={text}
              placeholder="Start typing or paste your text here..."
              onChange={handleEventChange}
            />
            <span className="tf-char-badge">{text.length} chars</span>
          </div>

          {copied && (
            <div className="tf-toast mb-2">
              <i className="bi bi-check-circle-fill me-2"></i>Copied to clipboard!
            </div>
          )}

          {/* Action Buttons */}
          <div className="d-flex flex-wrap gap-2">
            {buttons.map(({ label, icon, cls, fn }) => (
              <button key={label} className={`btn ${cls}`} onClick={fn} disabled={text.length === 0}>
                <i className={`bi ${icon} me-1`}></i>{label}
              </button>
            ))}
            <button className={`btn ${copied ? "btn-success" : "btn-success"}`} onClick={handleCopyClick} disabled={text.length === 0}>
              <i className={`bi ${copied ? "bi-check-lg" : "bi-clipboard-check-fill"} me-1`}></i>
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* RIGHT — Stats + Preview */}
        <div className="col-12 col-lg-5">

          {/* Stat Cards — Bootstrap row g-4 col-6 */}
          <div className="row g-4 mb-4">
            {stats.map(({ icon, color, bg, darkBg, value, label }) => (
              <div className="col-6" key={label}>
                <div
                  className="card border-0 rounded-4 h-100 shadow-sm"
                  style={{ background: cardBg(bg, darkBg) }}
                >
                  <div className="card-body text-center py-4 px-3">
                    <i className={`bi ${icon} ${color} mb-3`} style={{ fontSize: 36 }}></i>
                    <h2 className={`fw-bold mb-1 ${isDark ? "text-white" : ""}`}
                        style={{ fontSize: 36 }}>
                      {value}
                    </h2>
                    <p className={`mb-0 fw-semibold small ${isDark ? "text-white" : "text-muted"}`}>
                      {label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Preview Card */}
          <div
            className="card border-0 rounded-4 shadow-sm"
            style={{ background: isDark ? "#1a1a2e" : "#fff" }}
          >
            <div className="card-body p-4">
              <div className="d-flex align-items-center mb-2">
                <i className="bi bi-eye-fill text-primary me-2 fs-5"></i>
                <span className={`fw-bold ${isDark ? "text-white" : "text-dark"}`}>Live Preview</span>
                <span className="ms-auto badge bg-primary rounded-pill">
                  {wordCount} words
                </span>
              </div>
              <hr style={{ borderColor: isDark ? "#334155" : "#e5e7eb", margin: "8px 0 12px" }} />
              <div className="tf-preview-body">
                <p className={`mb-0 tf-preview-text ${isDark ? "text-white" : "text-dark"}`}>
                  {text.length > 0 ? text : "Nothing to preview. Start typing above."}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TextForm;
