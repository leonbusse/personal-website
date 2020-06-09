import { useEffect, useState } from "react";
import { useRef } from "react";

export function useScrollThreshold(threshold) {
  const [exceeded, setExceeded] = useState(false);
  useEffect(() => {
    function onScroll() {
      const currentScrollPos = window.pageYOffset;
      setExceeded(currentScrollPos > threshold);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
