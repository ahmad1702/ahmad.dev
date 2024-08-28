"use client";
import { useEffect } from "react";

export default function Overlay() {
  const handleMouseDown = () => {
    window.document.body.style.cursor = "grabbing";
  };

  const handleMouseUp = () => {
    window.document.body.style.cursor = "grab";
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="container">
      <header>
        <h3
          onClick={() => {
            window.open("https://andersonmancini.dev", "tab");
          }}
        >
          ANDERSONMANCINI.DEV
        </h3>

        <button
          className="ctaButton contact"
          onClick={() => {
            window.open("https://andersonmancini.dev", "tab");
          }}
        >
          GET IN TOUCH
        </button>
      </header>
      <section className="overlay">
        <h1>Gradient FBM Material for React Three Fiber</h1>
      </section>
      <footer>Hover to morth - Created by Anderson Mancini.</footer>
    </div>
  );
}
