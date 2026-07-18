import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Home from "./components/Home";
import About from "./components/About";
import Feature from "./components/Feature";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode]               = useState("light");
  const [showWelcome, setShowWelcome] = useState(true);   // Modal 1
  const [showInfo, setShowInfo]       = useState(false);  // Modal 2

  const isDark = mode === "dark";

  function handleWelcomeNext() {
    setShowWelcome(false);
    setShowInfo(true);
  }

  function handleInfoClose() {
    setShowInfo(false);
  }

  const overlayStyle = {
    position: "fixed", inset: 0,
    background: "rgba(0,0,0,0.55)",
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px",
    backdropFilter: "blur(4px)",
  };

  const modalStyle = {
    background: isDark ? "#1e1e2e" : "#fff",
    borderRadius: 20,
    padding: "36px 32px",
    maxWidth: 460,
    width: "100%",
    boxShadow: "0 24px 60px rgba(0,0,0,0.25)",
    animation: "popIn 0.3s ease",
  };

  return (
    <BrowserRouter>
      <div className={`App ${isDark ? "dark-mode" : ""}`}>
        <Navbar mode={mode} setMode={setMode} />

        <Routes>
          <Route path="/"        element={<TextForm mode={mode} />} />
          <Route path="/home"    element={<Home     mode={mode} />} />
          <Route path="/about"   element={<About    mode={mode} />} />
          <Route path="/feature" element={<Feature  mode={mode} />} />
          <Route path="/contact" element={<Contact  mode={mode} />} />
        </Routes>

        {/* ── MODAL 1 — Welcome ── */}
        {showWelcome && (
          <div style={overlayStyle}>
            <div style={modalStyle}>
              {/* Icon */}
              <div className="text-center mb-4">
                <div className="tf-hero-icon mx-auto mb-3"
                  style={{ background: "linear-gradient(135deg, #2563eb, #6d28d9)" }}>
                  <i className="bi bi-file-earmark-text-fill"></i>
                </div>
                <h3 className={`fw-bold mb-1 ${isDark ? "text-white" : "text-dark"}`}>
                  Welcome to TextUtils! 👋
                </h3>
                <p className={`mb-0 ${isDark ? "text-white" : "text-muted"}`} style={{ fontSize: 15 }}>
                  Your all-in-one text analyzer and transformer.
                </p>
              </div>

              {/* Points */}
              <div className="mb-4">
                {[
                  { icon: "bi-lightning-charge-fill", color: "text-warning", text: "Instant text processing — no signup needed" },
                  { icon: "bi-shield-lock-fill",       color: "text-success", text: "100% private — text stays in your browser" },
                  { icon: "bi-gift-fill",              color: "text-danger",  text: "Completely free to use, forever"            },
                ].map(({ icon, color, text }) => (
                  <div key={text} className="d-flex align-items-center gap-3 mb-3">
                    <i className={`bi ${icon} ${color} fs-4 flex-shrink-0`}></i>
                    <span className={isDark ? "text-white" : "text-dark"} style={{ fontSize: 14 }}>{text}</span>
                  </div>
                ))}
              </div>

              <button
                className="btn btn-primary w-100 py-2 fw-semibold rounded-3"
                style={{ fontSize: 15 }}
                onClick={handleWelcomeNext}
              >
                Get Started <i className="bi bi-arrow-right ms-2"></i>
              </button>
            </div>
          </div>
        )}

        {/* ── MODAL 2 — How it works ── */}
        {showInfo && (
          <div style={overlayStyle}>
            <div style={modalStyle}>
              <div className="text-center mb-4">
                <div className="tf-hero-icon mx-auto mb-3"
                  style={{ background: "linear-gradient(135deg, #d97706, #b45309)" }}>
                  <i className="bi bi-info-circle-fill"></i>
                </div>
                <h4 className={`fw-bold mb-1 ${isDark ? "text-white" : "text-dark"}`}>
                  How it works
                </h4>
                <p className={`mb-0 ${isDark ? "text-white" : "text-muted"}`} style={{ fontSize: 14 }}>
                  Just follow these simple steps to get started.
                </p>
              </div>

              {/* Steps */}
              <div className="mb-4">
                {[
                  {
                    step: "01",
                    color: "#2563eb",
                    bg: "#eff6ff",
                    darkBg: "#1e3a5f",
                    title: "Type or Paste Text",
                    desc: "Add your text in the textarea on the home page.",
                  },
                  {
                    step: "02",
                    color: "#d97706",
                    bg: "#fffbeb",
                    darkBg: "#451a03",
                    title: "Buttons are Disabled Until You Type",
                    desc: "All action buttons stay disabled until you enter some text — so nothing runs on empty input.",
                  },
                  {
                    step: "03",
                    color: "#16a34a",
                    bg: "#f0fdf4",
                    darkBg: "#14532d",
                    title: "Click Any Button",
                    desc: "Once text is entered, all buttons unlock — uppercase, copy, reverse, download and more!",
                  },
                ].map(({ step, color, bg, darkBg, title, desc }) => (
                  <div
                    key={step}
                    className="d-flex gap-3 mb-3 p-3 rounded-3"
                    style={{ background: isDark ? darkBg : bg }}
                  >
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center fw-bold flex-shrink-0"
                      style={{ width: 36, height: 36, background: color, color: "#fff", fontSize: 13 }}
                    >
                      {step}
                    </div>
                    <div>
                      <p className={`fw-semibold mb-1 small ${isDark ? "text-white" : "text-dark"}`}>{title}</p>
                      <p className={`small mb-0 ${isDark ? "text-white" : "text-muted"}`}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="btn btn-success w-100 py-2 fw-semibold rounded-3"
                style={{ fontSize: 15 }}
                onClick={handleInfoClose}
              >
                <i className="bi bi-check-circle-fill me-2"></i>Got it, Let's Go!
              </button>
            </div>
          </div>
        )}

      </div>
    </BrowserRouter>
  );
}

export default App;
