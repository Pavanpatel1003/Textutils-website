import React from "react";

const Feature = () => {
  const features = [
    {
      icon: "bi-arrow-up-circle-fill",
      color: "text-primary",
      bg: "bg-primary-soft",
      title: "Uppercase",
      desc: "Convert your entire text to UPPERCASE in one click.",
    },
    {
      icon: "bi-arrow-down-circle-fill",
      color: "text-secondary",
      bg: "bg-secondary-soft",
      title: "Lowercase",
      desc: "Convert your entire text to lowercase instantly.",
    },
    {
      icon: "bi-fonts",
      color: "text-dark",
      bg: "bg-dark-soft",
      title: "Title Case",
      desc: "Capitalize the first letter of every word automatically.",
    },
    {
      icon: "bi-arrow-repeat",
      color: "text-info",
      bg: "bg-info-soft",
      title: "Reverse Text",
      desc: "Flip your text completely — character by character.",
    },
    {
      icon: "bi-text-paragraph",
      color: "text-warning",
      bg: "bg-warning-soft",
      title: "Remove Spaces",
      desc: "Clean up extra spaces and improve text formatting.",
    },
    {
      icon: "bi-sort-alpha-down",
      color: "text-success",
      bg: "bg-success-soft",
      title: "Sort A–Z",
      desc: "Sort all words alphabetically in ascending order.",
    },
    {
      icon: "bi-clipboard-check-fill",
      color: "text-success",
      bg: "bg-success-soft",
      title: "Copy Text",
      desc: "Copy the transformed text to clipboard instantly.",
    },
    {
      icon: "bi-download",
      color: "text-primary",
      bg: "bg-primary-soft",
      title: "Download",
      desc: "Save your text as a .txt file to your device.",
    },
    {
      icon: "bi-eye-fill",
      color: "text-danger",
      bg: "bg-danger-soft",
      title: "Live Preview",
      desc: "See a real-time preview of your text as you type.",
    },
    {
      icon: "bi-file-text-fill",
      color: "text-primary",
      bg: "bg-primary-soft",
      title: "Word Count",
      desc: "Instantly count the number of words in your text.",
    },
    {
      icon: "bi-clock-fill",
      color: "text-warning",
      bg: "bg-warning-soft",
      title: "Reading Time",
      desc: "Estimate how long it takes to read your content.",
    },
    {
      icon: "bi-moon-stars-fill",
      color: "text-dark",
      bg: "bg-dark-soft",
      title: "Dark Mode",
      desc: "Switch to dark mode for comfortable night-time use.",
    },
  ];

  return (
    <div className="page-wrapper">

      {/* Hero */}
      <div className="page-hero text-center mb-5">
        <div className="hero-icon-wrap mx-auto mb-3">
          <i className="bi bi-stars hero-icon text-warning"></i>
        </div>
        <h1 className="page-title">Features</h1>
        <p className="page-subtitle mx-auto">
          Everything you need to work with text — all in one place, all free, all instant.
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="row g-4 justify-content-center">
        {features.map(({ icon, color, title, desc }) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={title}>
            <div className="feature-card text-center h-100">
              <div className="feature-icon-wrap mx-auto mb-3">
                <i className={`bi ${icon} ${color} feature-icon`}></i>
              </div>
              <h5 className="fw-bold mb-2">{title}</h5>
              <p className="text-muted small mb-0">{desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Feature;
