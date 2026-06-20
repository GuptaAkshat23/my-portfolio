"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const CHARS = "アイウエオカキクケ0123456789<>/\\|=+*#%&";

export default function GlitchText({ text, className = "" }: { text: string; className?: string }) {
  const [display, setDisplay] = useState(text);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scramble = useCallback(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // useState(text) already initialized `display` to the full text —
      // nothing to set here, so we just bail out. Calling setDisplay(text)
      // synchronously inside the mount effect is what triggered the
      // cascading-renders warning.
      return;
    }
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((ch, i) => {
            if (ch === " ") return " ";
            return i < iteration ? text[i] : CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      iteration += 1 / 2;
      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplay(text);
      }
    }, 40);
  }, [text]);

  useEffect(() => {
    scramble();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [scramble]);

  return (
    <span className={className} onMouseEnter={scramble} aria-label={text}>
      {display}
    </span>
  );
}