import { useEffect, useState } from "react";
import { useRef } from "react";
import ScrollReveal from "scrollreveal";
import { isSSR } from "../utils";
// import { sr } from "./sr";

export function useScrollThreshold(threshold) {
  if (!threshold && !isSSR()) {
    threshold = window.innerHeight;
  }
  const [exceeded, setExceeded] = useState(false);
  useEffect(() => {
    if (isSSR()) return;
    function onScroll() {
      const currentScrollPos = window.pageYOffset;
      setExceeded(currentScrollPos > threshold);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return exceeded;
}

export function useConstantVh() {
  const vhRef = useRef(null);
  if (typeof window != "undefined" && vhRef.current == null) {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    vhRef.current = vh;
  }
}

// const sr = typeof window === "undefined" ? null : ScrollReveal();
// const isSSR2 = typeof window === "undefined";
// const sr = isSSR2 ? null : ScrollReveal();
const srConfig = {
  origin: "bottom",
  distance: "20px",
  duration: 500,
  delay: 200,
  rotate: { x: 0, y: 0, z: 0 },
  opacity: 0,
  scale: 1,
  easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  mobile: true,
  reset: false,
  useDelay: "always",
  viewFactor: 0.25,
  viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
};

export const useScrollReveal = () => {
  const revealContainer = useRef(null);
  useEffect(() => ScrollReveal().reveal(revealContainer.current, srConfig, []));
  return revealContainer;
};
