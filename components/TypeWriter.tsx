"use client";

import { useEffect, useState } from "react";

const words = [
  { text: "el baño",      color: "#38BDF8", glow: "rgba(56,189,248,0.35)"   }, // sky blue
  { text: "la cocina",    color: "#F97316", glow: "rgba(249,115,22,0.35)"   }, // orange
  { text: "el salón",     color: "#A78BFA", glow: "rgba(167,139,250,0.35)"  }, // violet
  { text: "el suelo",     color: "#34D399", glow: "rgba(52,211,153,0.35)"   }, // emerald
  { text: "la fachada",   color: "#FB7185", glow: "rgba(251,113,133,0.35)"  }, // rose
  { text: "tu hogar",     color: "#C9A84C", glow: "rgba(201,168,76,0.4)"    }, // gold
];

const TYPE_SPEED = 80;
const DELETE_SPEED = 45;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 400;

export default function TypeWriter() {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting" | "waiting">("typing");

  const current = words[wordIdx];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayed.length < current.text.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.text.slice(0, displayed.length + 1));
        }, TYPE_SPEED);
      } else {
        timeout = setTimeout(() => setPhase("deleting"), PAUSE_AFTER_TYPE);
      }
    } else if (phase === "deleting") {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, DELETE_SPEED);
      } else {
        timeout = setTimeout(() => {
          setWordIdx((i) => (i + 1) % words.length);
          setPhase("typing");
        }, PAUSE_AFTER_DELETE);
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, displayed, current.text]);

  return (
    <div className="w-full px-4 flex items-center justify-center gap-3 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold mt-3 mb-2 min-h-[1.4em]">
      <span className="text-gray-800 dark:text-gray-200 font-light shrink-0">Reforma</span>
      <span
        style={{
          color: current.color,
          textShadow: `0 0 24px ${current.glow}, 0 0 8px ${current.glow}`,
          transition: "color 0.3s ease, text-shadow 0.3s ease",
          display: "inline-block",
        }}
      >
        {displayed}
        <span
          className="typewriter-cursor"
          style={{ background: current.color, opacity: 0.85 }}
        />
      </span>
    </div>
  );
}
