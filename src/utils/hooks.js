import { useEffect, useState } from "react";

export default function useScrollThreshold(threshold) {
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
