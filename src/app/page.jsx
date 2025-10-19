"use client";
import React, { useEffect, useState } from "react";
import AboutPage from "../components/pages/AboutPage.jsx";
import HomePage from "../components/pages/HomePage.jsx";
import Projects from "../components/pages/Projects.jsx";
import Contact from "@/components/pages/Contact.jsx";
import Skills from "../components/pages/Skills.jsx";
import Loader from "@/components/Loader/Loader.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1500);
    const removeTimer = setTimeout(() => setLoading(false), 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden flex flex-col min-h-screen bg-[#020305] text-white">
      <HomePage />
      <AboutPage />
      <Skills />
      <Projects />
      <Contact />

      {loading && (
        <div
          className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020305] transition-opacity duration-1000 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <Loader />
        </div>
      )}
    </div>
  );
}

export default App;
