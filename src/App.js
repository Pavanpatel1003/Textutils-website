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
  const [mode, setMode] = useState("light");

  return (
    <BrowserRouter>
      <div className={`App ${mode === "dark" ? "dark-mode" : ""}`}>
        <Navbar mode={mode} setMode={setMode} />

        <Routes>
          <Route path="/"        element={<TextForm mode={mode} />} />
          <Route path="/home"    element={<Home     mode={mode} />} />
          <Route path="/about"   element={<About    mode={mode} />} />
          <Route path="/feature" element={<Feature  mode={mode} />} />
          <Route path="/contact" element={<Contact  mode={mode} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
