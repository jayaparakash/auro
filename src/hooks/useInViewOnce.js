import { useEffect, useRef, useState } from "react";

export default function useInViewOnce(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if (!ref.current || seen) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setSeen(true);
    }, options);

    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [seen, options]);

  return { ref, seen };
}
