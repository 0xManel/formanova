"use client";

import { useEffect, useState } from "react";

interface Word {
  text: string;
  color: string;
  glow: string;
}

const wordsEs: Word[] = [
  { text: "el baño",      color: "#38BDF8", glow: "rgba(56,189,248,0.35)"   },
  { text: "la cocina",    color: "#F97316", glow: "rgba(249,115,22,0.35)"   },
  { text: "el salón",     color: "#A78BFA", glow: "rgba(167,139,250,0.35)"  },
  { text: "el suelo",     color: "#34D399", glow: "rgba(52,211,153,0.35)"   },
  { text: "la fachada",   color: "#FB7185", glow: "rgba(251,113,133,0.35)"  },
  { text: "tu hogar",     color: "#C9A84C", glow: "rgba(201,168,76,0.4)"    },
];

const wordsGl: Word[] = [
  { text: "o baño",       color: "#38BDF8", glow: "rgba(56,189,248,0.35)"   },
  { text: "a cociña",     color: "#F97316", glow: "rgba(249,115,22,0.35)"   },
  { text: "o salón",      color: "#A78BFA", glow: "rgba(167,139,250,0.35)"  },
  { text: "o chan",        color: "#34D399", glow: "rgba(52,211,153,0.35)"   },
  { text: "a fachada",    color: "#FB7185", glow: "rgba(251,113,133,0.35)"  },
  { text: "o teu fogar",  color: "#C9A84C", glow: "rgba(201,168,76,0.4)"    },
];

const TYPE_SPEED = 80;
const DELETE_SPEED = 45;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 400;

export default function TypeWriter({ lang }: { lang: "es" | "gl" }) {
  const words = lang === "gl" ? wordsGl : wordsEs;

  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");

  const current = words[wordIdx % words.length];

  useEffect(() => {
    setWordIdx(0);
    setDisplayed("");
    setPhase("typing");
  }, [lang]);

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
  }, [phase, displayed, current.text, words.length]);

  return (
    <div className="w-full px-4 flex justify-center mt-3 mb-2" style={{ minHeight: "1.2em" }}>
      <span
        className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl"
        style={{ lineHeight: 1.15, display: "inline-flex", alignItems: "baseline", gap: "0.25em" }}
      >
        <span className="font-light text-gray-800">Reforma</span>
        <span
          style={{
            color: current.color,
            textShadow: `0 0 24px ${current.glow}, 0 0 8px ${current.glow}`,
            transition: "color 0.3s ease, text-shadow 0.3s ease",
            fontWeight: 600,
            display: "inline",
          }}
        >
          {displayed}
          <span className="typewriter-cursor" style={{ background: current.color, opacity: 0.85 }} />
        </span>
      </span>
    </div>
  );
}
